import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Do you handle end-to-end production?",
    a: "Yes. From initial strategy and scriptwriting to shooting, editing, and final color grading, we manage the entire lifecycle of visual storytelling."
  },
  {
    q: "Do you travel for projects?",
    a: "Absolutely. We execute mandates globally, ensuring the same premium standard regardless of location."
  },
  {
    q: "How do you ensure confidentiality for political work?",
    a: "We operate with strict NDAs and compartmentalized teams. Discretion is a core pillar of our public affairs practice."
  },
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary by scope. A corporate film may take 4-6 weeks, while a comprehensive political campaign spans months. We define clear milestones during the strategy phase."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-brand-white text-brand-black border-t border-black/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
            Clarity
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black">Common Inquiries</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/10 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left hover:text-brand-red transition-colors"
              >
                <span className="text-xl font-medium pr-8">{faq.q}</span>
                {openIndex === index ? <Minus size={20} className="text-brand-red shrink-0" /> : <Plus size={20} className="text-black/50 shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-black/60 font-light pb-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
