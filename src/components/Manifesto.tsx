import { motion } from 'motion/react';
import EventSequence from './EventSequence';

export default function Manifesto() {
  return (
    <section className="py-32 bg-brand-light text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-8 block">
              The Manifesto
            </span>
            <div className="aspect-square w-full relative overflow-hidden bg-gray-100 border border-black/5">
              <EventSequence />
            </div>
          </div>
          <div className="md:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8"
            >
              We don't just make films.<br />
              <span className="italic text-gray-500">We engineer perception.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl space-y-6"
            >
              <p>
                In a world of endless noise, clarity is a premium asset. Chirantana Studio bridges the gap between cinematic creativity and strategic credibility.
              </p>
              <p>
                Whether it's a brand campaign, a corporate mandate, or a political narrative, we execute with precision, discretion, and an uncompromising standard of visual culture.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
