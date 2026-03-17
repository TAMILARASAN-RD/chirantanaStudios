/// <reference types="vite/client" />
import { useImageSequence } from '../hooks/useImageSequence';

// Lazy glob — does NOT load all images at startup
const globModules = import.meta.glob('../Sequence/*.jpg', { query: '?url' });

// Sort: "1 (1).jpg", "1 (2).jpg", …
function sortFn(a: string, b: string) {
  const getParts = (path: string) => {
    const match = path.match(/(\d+)\s*\((\d+)\)/);
    return match ? [parseInt(match[1]), parseInt(match[2])] : [0, 0];
  };
  const [a1, a2] = getParts(a);
  const [b1, b2] = getParts(b);
  return a1 !== b1 ? a1 - b1 : a2 - b2;
}

export default function ImageSequence() {
  const { canvasRef, isLoaded } = useImageSequence({
    globModules,
    sortFn,
    batchSize: 15,
  });

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
