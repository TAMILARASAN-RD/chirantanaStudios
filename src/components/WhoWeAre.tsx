import { motion } from 'motion/react';

const roles = [
  "Creative Partners",
  "Brand Story Consultants",
  "Strategic Narrative Architects"
];

const pillars = [
  "Every visual.",
  "Every word.",
  "Every campaign.",
  "Aligned to one larger story."
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-brand-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12 text-brand-black">
            Who <span className="text-black italic">We Are</span>
          </h2>

          <div className="space-y-8 mb-16">
            <p className="text-xl md:text-2xl text-black/90 font-light leading-relaxed">
              Chirantana Studio is a <span className="text-brand-red font-medium italic underline underline-offset-8 decoration-1">Creative Strategy and Narrative Architecture Company.</span>
            </p>
            <p className="text-lg text-black/60 font-light">
              When clients approach us, they often look for marketing.<br />
              What they receive is something deeper.
            </p>
          </div>

          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-black/30 font-bold mb-8">We step in as:</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {roles.map((role, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-serif text-black italic">{role}</span>
                  <div className="h-px w-12 bg-brand-red/50 mt-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-black/5 p-12 rounded-sm border border-black/5 mb-16">
            <p className="text-xl md:text-2xl text-brand-black font-serif mb-10 italic">
              "Think of us as your extended Chief Creative and Content Office."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-sm uppercase tracking-widest text-black/40 font-medium">
                  {pillar}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 mb-16">
            <p className="text-xl text-black/80 font-light">We do not execute assignments.</p>
            <p className="text-2xl text-brand-black font-bold uppercase tracking-widest">We build positioning.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#how-we-think" className="px-10 py-5 bg-transparent border border-black/20 text-brand-black font-semibold rounded-sm hover:bg-black/5 transition-all active:scale-95 uppercase tracking-[0.2em] text-xs">
              Discover Our Approach
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
