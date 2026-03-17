import { motion } from 'motion/react';
import ImageSequence from './ImageSequence';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-black">
      <ImageSequence />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-6 block">
              Premium Storytelling Studio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
              Strategic Storytelling.<br />
              <span className="text-white/70 italic">Cinematic Craft.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light leading-relaxed"
          >
            We build premium visual narratives and strategic communications for brands, institutions, and leaders who demand serious execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#work" className="px-8 py-4 bg-white text-brand-black font-medium rounded-sm hover:bg-gray-200 transition-colors text-center">
              View Selected Work
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-center">
              Discuss a Mandate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
