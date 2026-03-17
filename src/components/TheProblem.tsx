import { motion } from 'motion/react';
import ArtSequence from './ArtSequence';

const painPoints = [
  "You are posting consistently but the brand feels fragmented.",
  "Your ads convert sometimes, but there is no long term recall.",
  "Your founder voice is present, but not positioned.",
  "Your political messaging is loud, but not layered.",
  "Your corporate films look good, but do not build authority.",
  "Your events happen, but do not become experiences."
];

export default function TheProblem() {
  return (
    <section id="services" className="bg-brand-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column: Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
            The Problem You<br />
            <span className="text-white italic">May Be Facing</span>
          </h2>

          <p className="text-lg text-white/60 mb-12 font-light">
            Let us guess what brought you here.
          </p>

          <ul className="space-y-6 mb-12">
            {painPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start gap-4 text-white/80 border-l border-brand-red/30 pl-6 py-1 hover:border-brand-red transition-colors"
              >
                <span className="text-brand-red font-bold">/</span>
                <p className="text-lg font-light">{point}</p>
              </motion.li>
            ))}
          </ul>

          <div className="space-y-4 mb-12">
            <p className="text-xl text-white font-medium">You are executing.</p>
            <p className="text-xl text-brand-red italic font-bold">But you are not building permanence.</p>
          </div>

          <div className="text-lg text-white/60 font-light space-y-2 mb-12">
            <p>Most agencies deliver output.</p>
            <p className="text-white font-normal underline decoration-brand-red underline-offset-8 decoration-2">Very few build positioning.</p>
            <p className="pt-4 text-white uppercase tracking-widest text-sm font-bold">That is the gap we step into.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="#contact" className="px-10 py-4 bg-brand-red text-white font-semibold rounded-sm hover:bg-red-700 transition-all active:scale-95 shadow-xl shadow-brand-red/10 uppercase tracking-widest text-sm">
              Build Positioning
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Cinematic Perspective */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square lg:aspect-auto lg:h-[700px] w-full bg-brand-gray/50 rounded-sm overflow-hidden border border-white/5 group"
        >
          <div className="absolute inset-[32px] overflow-hidden z-0 bg-brand-black">
            <ArtSequence />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 pointer-events-none z-10" />

          <div className="absolute inset-0 flex flex-col items-end justify-center p-14 pointer-events-none z-20">
            <p className="text-[10px] uppercase tracking-[1em] text-white/40 font-bold vertical-text rotate-180 mb-4 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>Cinematic Perspective</p>
            <div className="w-px h-24 bg-gradient-to-b from-brand-red to-transparent opacity-50" />
          </div>

          <div className="absolute inset-0 border-[32px] border-brand-black pointer-events-none z-30" />
        </motion.div>
      </div>
    </section>
  );
}
