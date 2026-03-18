import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import cameraImg from '../wmremove-transformed.png';
import lensImg from '../lens.png';

export default function LoadingSequence({ onFinished }: { onFinished: () => void }) {
  const [triggerShutter, setTriggerShutter] = useState(false);
  const [triggerFlash, setTriggerFlash] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // SNAPPY DYNAMIC TRANSITION
    // We start the shutter click almost immediately (as soon as React hydrates)
    const startSequence = () => {
      setTriggerShutter(true);
      
      // Momentary haptic pause (felt, not waited for)
      setTimeout(() => {
        setTriggerFlash(true);
        
        // At peak intensity (fast!), hide camera
        setTimeout(() => {
          setIsCameraVisible(false);
        }, 200);

        // Instant transition to home
        setTimeout(() => {
          setIsDone(true);
          onFinished();
        }, 900);
      }, 100);
    };

    const timer = setTimeout(startSequence, 150); 
    return () => clearTimeout(timer);
  }, [onFinished]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (isDone) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-colors duration-400 ${isCameraVisible ? 'bg-black' : 'bg-transparent'}`}>
      
      {/* 1. CAMERA & LENS LAYER */}
      <AnimatePresence>
        {isCameraVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={triggerShutter ? {
              y: [0, 4, -2, 0],
              scale: [1, 0.98, 1],
            } : {}}
            transition={{ duration: 0.15 }}
            className="relative z-10 flex flex-col items-center justify-center w-full max-w-[900px] mb-20 px-6"
          >
            {/* Photographic Camera Asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-[85vw] max-w-[600px] aspect-square flex items-center justify-center"
            >
              <img 
                src={cameraImg} 
                alt="Retro Camera" 
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_60px_rgba(0,0,0,1)]"
              />

              {/* LENS ASSET - CENTER ALIGNMENT FIXED */}
              <div className="absolute top-[60.4%] left-[50.1%] -translate-x-1/2 -translate-y-1/2 w-[48.5%] h-[48.5%] flex items-center justify-center pointer-events-none rounded-full overflow-hidden">
                <motion.div
                   animate={{ rotate: [0, 20, -20, 0] }} // Very fast focus-pull
                   transition={{ 
                     repeat: Infinity, 
                     duration: 3, 
                     ease: "easeInOut" 
                   }}
                   className="w-full h-full"
                >
                   <img 
                    src={lensImg} 
                    alt="Rotating Lens" 
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    className="w-full h-full object-cover pointer-events-none" 
                   />
                </motion.div>
                
                {/* Visual Fix for Seamless rim integration */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>
              
              <div className="absolute top-[60.4%] left-[50.1%] -translate-x-1/2 -translate-y-1/2 w-[48.5%] h-[48.5%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />
            </motion.div>

            {/* Branding Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center -mt-12 relative z-20"
            >
              <h1 className="text-white font-sans font-black text-2xl md:text-5xl uppercase tracking-[0.25em] mb-4 whitespace-nowrap">
                Chirantana Studios
              </h1>
              <p className="text-white/40 font-sans font-light text-[10px] md:text-base uppercase tracking-[0.65em]">
                Capture • Create • Deliver
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLASH TRANSITION */}
      <AnimatePresence>
        {triggerFlash && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 85, 
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: 1, 
              times: [0, 0.25, 0.5, 1],
              ease: "easeOut",
            }}
            className="absolute top-[60.4%] left-[50.1%] -translate-x-1/2 -translate-y-[15%] w-40 h-40 bg-white rounded-full z-50 pointer-events-none shadow-[0_0_100px_white,0_0_200px_white]"
          />
        )}
      </AnimatePresence>

      {/* 3. ATMOSPHERIC GRAIN */}
      {isCameraVisible && (
        <motion.div 
          animate={{ opacity: [0.03, 0.05, 0.03] }}
          transition={{ repeat: Infinity, duration: 0.12 }}
          className="absolute inset-0 pointer-events-none bg-[url('https://grain-y.com/images/grain.png')] bg-repeat mix-blend-overlay opacity-[0.04]" 
        />
      )}
    </div>
  );
}
