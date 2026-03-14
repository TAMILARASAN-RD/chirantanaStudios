import { motion } from 'motion/react';

export default function Pillar3() {
  return (
    <section id="public-affairs" className="py-32 bg-brand-black text-white border-y border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/40 font-semibold tracking-widest text-xs uppercase mb-6 block">
            Pillar III â Confidential Mandates
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Public Affairs &<br />
            <span className="italic text-white/70">Political Communication</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12">
            Operating at the highest levels of discretion, we provide strategic counsel, narrative architecture, and campaign management for political leaders and public institutions. Serious execution for high-stakes environments.
          </p>
          
          <div className="flex justify-center">
            <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors inline-flex items-center gap-2">
              Request Confidential Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
