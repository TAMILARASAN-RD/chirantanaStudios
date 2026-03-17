/// <reference types="vite/client" />
import { useEffect, useRef, useState } from 'react';

type SortFn = (a: string, b: string) => number;

interface UseImageSequenceOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  globModules: Record<string, () => Promise<any>>;
  sortFn?: SortFn;
  fps?: number;
  batchSize?: number;
}

/**
 * Shared hook for image sequences with batched loading.
 * No conditional hooks - all hooks are called unconditionally.
 */
export function useImageSequence({
  globModules,
  sortFn,
  fps = 24,
  batchSize = 10,
}: UseImageSequenceOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastFrameTimeRef = useRef(0);
  const currentIndexRef = useRef(0);

  // Resolve glob URLs and load images in batches
  useEffect(() => {
    const keys = Object.keys(globModules);
    if (keys.length === 0) return;

    const sortedKeys = sortFn ? [...keys].sort(sortFn) : [...keys].sort();
    const total = sortedKeys.length;
    imagesRef.current = new Array(total);

    let isCancelled = false;

    // Resolve URLs from lazy glob
    // With import: 'default', the resolved value IS the string directly
    // Without import: 'default', it would be { default: string }
    Promise.all(
      sortedKeys.map((key) =>
        globModules[key]().then((mod: any) => {
          // Handle both cases: direct string or { default: string }
          if (typeof mod === 'string') return mod;
          if (mod && typeof mod.default === 'string') return mod.default;
          return mod;
        })
      )
    ).then((resolvedUrls) => {
      if (isCancelled) return;

      let loadedCount = 0;
      let batchStart = 0;

      function loadBatch() {
        if (isCancelled) return;
        const end = Math.min(batchStart + batchSize, total);
        let batchDone = 0;

        for (let i = batchStart; i < end; i++) {
          const img = new Image();
          const onComplete = () => {
            loadedCount++;
            batchDone++;
            // Start playback once first batch loads
            if (loadedCount >= Math.min(batchSize, total)) {
              setIsLoaded(true);
            }
            if (batchDone >= end - batchStart) {
              batchStart = end;
              if (batchStart < total) {
                setTimeout(loadBatch, 50);
              }
            }
          };
          img.onload = onComplete;
          img.onerror = onComplete;
          img.src = resolvedUrls[i];
          imagesRef.current[i] = img;
        }
      }

      loadBatch();
    });

    return () => { isCancelled = true; };
  }, [globModules, sortFn, batchSize]);

  // Animation loop
  useEffect(() => {
    if (!isLoaded) return;

    const interval = 1000 / fps;

    function animate(timestamp: number) {
      if (timestamp - lastFrameTimeRef.current >= interval) {
        lastFrameTimeRef.current = timestamp;

        const images = imagesRef.current;
        const total = images.length;
        if (total === 0) {
          animFrameRef.current = requestAnimationFrame(animate);
          return;
        }

        // Find next loaded frame
        let nextIndex = (currentIndexRef.current + 1) % total;
        let attempts = 0;
        while (attempts < total) {
          const img = images[nextIndex];
          if (img && img.complete && img.naturalWidth > 0) break;
          nextIndex = (nextIndex + 1) % total;
          attempts++;
        }

        if (attempts >= total) {
          animFrameRef.current = requestAnimationFrame(animate);
          return;
        }

        currentIndexRef.current = nextIndex;

        const canvas = canvasRef.current;
        if (!canvas) {
          animFrameRef.current = requestAnimationFrame(animate);
          return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          animFrameRef.current = requestAnimationFrame(animate);
          return;
        }

        const img = images[nextIndex];
        if (img && img.complete && img.naturalWidth > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const canvasAspect = canvas.width / canvas.height;
          const imgAspect = img.width / img.height;

          let drawWidth = canvas.width;
          let drawHeight = canvas.height;
          let offsetX = 0;
          let offsetY = 0;

          if (canvasAspect > imgAspect) {
            drawHeight = canvas.width / imgAspect;
            offsetY = (canvas.height - drawHeight) / 2;
          } else {
            drawWidth = canvas.height * imgAspect;
            offsetX = (canvas.width - drawWidth) / 2;
          }

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isLoaded, fps]);

  // Canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          canvasRef.current.width = parent.clientWidth;
          canvasRef.current.height = parent.clientHeight;
        } else {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { canvasRef, isLoaded };
}
