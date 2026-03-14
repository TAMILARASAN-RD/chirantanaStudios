import { motion } from 'motion/react';
import ElectionRallySequence from './ElectionRallySequence';

export default function Pillar2() {
  return (
    <section id="digital" className="py-32 bg-brand-gray text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-[4/5] bg-brand-black border border-white/5 relative overflow-hidden flex items-center justify-center">
              <ElectionRallySequence />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
                Pillar II
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                Brand & Digital<br />
                <span className="italic text-white/70">Amplification</span>
              </h2>
              <p className="text-lg text-white/60 font-light mb-8 leading-relaxed">
                Great stories need strategic distribution. We don't just create content; we engineer its reach. Our PR and digital marketing services ensure your narrative lands with the right audience, at the right time, with maximum authority.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-brand-red mt-1">â</span>
                  <span className="text-white/80">Strategic PR & Media Relations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red mt-1">â</span>
                  <span className="text-white/80">Digital Campaign Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-red mt-1">â</span>
                  <span className="text-white/80">Brand Positioning & Identity</span>
                </li>
              </ul>

              <a href="#contact" className="px-8 py-4 bg-white text-brand-black font-medium rounded-sm hover:bg-gray-200 transition-colors inline-block">
                Amplify Your Brand
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
