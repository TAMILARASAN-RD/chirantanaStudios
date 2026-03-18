import { motion } from 'motion/react';
import { Lightbulb, Repeat, Heart } from 'lucide-react';

const thinkingPillars = [
  {
    icon: <Lightbulb className="text-brand-red" size={40} strokeWidth={1} />,
    title: "Clarity of Identity",
    description: "Without clarity, communication becomes noise."
  },
  {
    icon: <Repeat className="text-brand-red" size={40} strokeWidth={1} />,
    title: "Consistency of Communication",
    description: "Without consistency, identity dissolves."
  },
  {
    icon: <Heart className="text-brand-red" size={40} strokeWidth={1} />,
    title: "Emotional Connection",
    description: "Without emotion, nothing is remembered."
  }
];

export default function HowWeThink() {
  return (
    <section id="how-we-think" className="bg-brand-black py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif mb-6 leading-tight">
            How <span className="text-white italic border-b border-brand-red pb-2">We Think</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {thinkingPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-12 bg-brand-gray/20 rounded-sm border border-white/5 flex flex-col items-center text-center transition-all hover:border-brand-red/30 group"
            >
              <div className="mb-10 p-6 bg-brand-black rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-6 italic">{pillar.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12">
            We integrate strategy with cinematic execution so storytelling drives brand building, not the other way around.
          </p>
          
          <div className="h-px w-32 bg-brand-red/50 mx-auto mb-12" />
          
          <p className="text-sm uppercase tracking-[0.4em] text-white/30 font-bold mb-8">Our work exists at the intersection of:</p>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {["Content marketing", "Visual craft", "Long term narrative planning"].map((item, index) => (
              <span key={index} className="text-lg text-white font-serif italic border-l border-brand-red pl-6">{item}</span>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-white/5">
            <p className="text-2xl md:text-3xl font-serif text-white mb-8">
              "Before we create anything, we ask one question.<br />
              <span className="text-brand-red italic">What story are we building?</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
