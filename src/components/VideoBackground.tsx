import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoBackgroundProps {
  src: string;
  isHero?: boolean;
  overlayClassName?: string;
  loadingText?: string;
}

const DEFAULT_VIDEO = "/hero-cinematic.mp4";

export default function VideoBackground({ 
  src = DEFAULT_VIDEO, 
  isHero = false, 
  overlayClassName = "bg-black/20",
  loadingText = "Loading..." 
}: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-brand-black">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload={isHero ? "auto" : "none"}
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      
      <div className={`absolute inset-0 ${overlayClassName}`} />

      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-brand-black"
          >
             {isHero ? (
                <h3 className="text-[#ed2127] font-serif italic text-2xl md:text-3xl tracking-wide">
                  {loadingText}
                </h3>
             ) : (
                <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
             )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
