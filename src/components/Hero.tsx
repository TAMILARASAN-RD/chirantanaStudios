import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import ImageSequence from './ImageSequence';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black text-center px-6">
      <ImageSequence />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <br /> <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[0.2em] uppercase mb-4 text-white/90">
            Chirantana Studio
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight mb-8">

            <span className="text-white italic">Crafting Stories That Outlive Time. </span>
          </h2>

          <div className="h-px w-24 bg-brand-red mb-10" />

          <p className="text-sm md:text-base text-brand-white/60 tracking-[0.15em] uppercase font-medium mb-4 max-w-3xl">
            Creative Strategy | Brand Building | Political Narrative | Cinematic Production
          </p>

          <p className="text-lg md:text-xl text-white/80 font-serif italic mb-12">
            "You are here because something feels incomplete."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#portfolio" className="px-10 py-4 bg-white text-brand-black font-semibold rounded-sm hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/5">
            Explore Our Work
          </a>
          <a href="#contact" className="px-10 py-4 border border-white/20 text-white font-semibold rounded-sm hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm">
            Begin the Narrative
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40"
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
