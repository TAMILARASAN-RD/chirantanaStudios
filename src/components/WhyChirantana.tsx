import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const alignmentItems = [
  "Brand Story Crafting",
  "Personal Branding",
  "Social Media Strategy",
  "Content Marketing",
  "Political Campaigns",
  "Film Production",
  "Performance Marketing"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhyChirantana() {
  return (
    <section className="py-40 bg-brand-black text-brand-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-red font-semibold tracking-[0.3em] text-[10px] uppercase mb-8 block">
              The Value Proposition
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-12 leading-tight">
              Why <span className="italic text-brand-red">Chirantana</span>
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-brand-white/90 font-light leading-relaxed max-w-xl">
              <p>
                Many agencies deliver content. <br />
                <span className="text-brand-white font-medium italic">Few build permanence.</span>
              </p>
              <p>
                When you partner with Chirantana Studio, you gain a Creative Partner invested in your long-term narrative.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Alignment List & Closing */}
          <div className="relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-brand-gray/30 backdrop-blur-sm border border-white/5 p-12 md:p-16 rounded-sm"
            >
              <p className="text-brand-red font-semibold tracking-wider text-xs uppercase mb-10">
                We Align:
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-12">
                {alignmentItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 text-brand-white group cursor-default"
                  >
                    <div className="h-px w-6 bg-brand-red/40 group-hover:w-10 transition-all duration-300" />
                    <span className="text-sm md:text-base font-light tracking-wide group-hover:text-brand-red transition-colors duration-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-12" />

              <div className="space-y-6">
                <p className="text-brand-white/90 text-lg md:text-xl font-serif italic leading-relaxed">
                  Into one cohesive communication system.
                </p>
                <div className="space-y-2">
                  <p className="text-brand-red font-semibold tracking-widest text-xs uppercase">
                    Chirantana means eternal.
                  </p>
                  <p className="text-brand-white/80 text-sm font-light leading-relaxed">
                    If your brand deserves to be remembered,<br />
                    It deserves a story built to last.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="pt-10"
                >
                  <a 
                    href="#contact" 
                    className="group inline-flex items-center gap-4 px-10 py-5 bg-brand-red text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-brand-black transition-all duration-500 shadow-2xl shadow-brand-red/20"
                  >
                    Begin the Narrative
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 text-[180px] font-serif italic text-white/[0.02] select-none pointer-events-none z-0">
              Eternal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
