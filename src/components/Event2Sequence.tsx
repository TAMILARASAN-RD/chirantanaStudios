/// <reference types="vite/client" />
import { useEffect, useRef, useState } from 'react';

export default function Event2Sequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Import all images from the event 2 folder
    const imageModules = import.meta.glob('../event 2/*.jpg', { eager: true, query: '?url', import: 'default' });
    
    const imageUrls = Object.keys(imageModules).map((key) => ({
      path: key,
      url: imageModules[key] as string
    }));

    // Sort by frame number: ezgif-frame-001.jpg
    const sortedUrls = imageUrls.sort((a, b) => {
      const getFrameNum = (path: string) => {
        const match = path.match(/frame-(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      return getFrameNum(a.path) - getFrameNum(b.path);
    });

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

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
  }, [currentIndex, images]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const parent = canvasRef.current.parentElement;
        canvasRef.current.width = parent.clientWidth;
        canvasRef.current.height = parent.clientHeight;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-brand-black group-hover:scale-105 transition-transform duration-700 ease-out">
      <canvas 
        ref={canvasRef} 
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      {!isLoaded && (
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
         </div>
      )}
    </div>
  );
}
