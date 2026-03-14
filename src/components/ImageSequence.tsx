/// <reference types="vite/client" />
import { useEffect, useRef, useState } from 'react';

export default function ImageSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Import all images from the Sequence folder
    // Using import.meta.glob to get all jpg files
    const imageModules = import.meta.glob('../Sequence/*.jpg', { eager: true, query: '?url', import: 'default' });
    
    const imageUrls = Object.keys(imageModules).map((key) => ({
      path: key,
      url: imageModules[key] as string
    }));

    // Simple natural sort for filenames like "1 (1).jpg", "1 (2).jpg", ..., "2 (1).jpg"
    const sortedUrls = imageUrls.sort((a, b) => {
      const getParts = (path: string) => {
        const match = path.match(/(\d+)\s*\((\d+)\)/);
        if (match) {
          return [parseInt(match[1]), parseInt(match[2])];
        }
        return [0, 0];
      };
      const [a1, a2] = getParts(a.path);
      const [b1, b2] = getParts(b.path);
      if (a1 !== b1) return a1 - b1;
      return a2 - b2;
    });

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Load only a subset first if needed, but let's try all 681
    // For background, we might want to start playing as soon as some are loaded
    sortedUrls.forEach((file, index) => {
      const img = new Image();
      img.src = file.url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === sortedUrls.length) {
          setIsLoaded(true);
        }
      };
      loadedImages[index] = img;
    });

    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 41.67); // ~24fps

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[currentIndex];
    if (img && img.complete) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate cover fit
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
  }, [currentIndex, images]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-brand-black/20" />
    </div>
  );
}
