/// <reference types="vite/client" />
import { useImageSequence } from '../hooks/useImageSequence';

const globModules = import.meta.glob('../singer 2/*.jpg', { query: '?url' });

function sortFn(a: string, b: string) {
  const getFrameNum = (path: string) => {
    const match = path.match(/frame-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };
  return getFrameNum(a) - getFrameNum(b);
}

export default function Singer2Sequence() {
  const { canvasRef, isLoaded } = useImageSequence({
    globModules,
    sortFn,
    batchSize: 10,
  });

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
