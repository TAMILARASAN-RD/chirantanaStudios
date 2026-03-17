import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="clients" className="py-32 bg-brand-light text-brand-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-12 block">
          Client Perspectives
        </span>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="absolute -top-12 -left-8 text-8xl font-serif text-gray-200 opacity-50 select-none">"</span>
          <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed italic mb-12 relative z-10">
            [Verified Testimonial] Chirantana Studio delivered a campaign that didn't just look beautiful—it fundamentally shifted how our stakeholders perceive our brand. Their strategic rigor matches their visual craft.
          </blockquote>
          <div className="flex flex-col items-center">
            <span className="font-medium text-lg">[Client Name]</span>
            <span className="text-gray-500 text-sm uppercase tracking-wider mt-1">[Title, Organization]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
