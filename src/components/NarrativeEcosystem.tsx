import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: "01",
    title: "Brand Strategy and Narrative Architecture",
    description: "Before visibility, there must be clarity. Outcome: A brand identity that commands recognition and long term recall."
  },
  {
    number: "02",
    title: "Personal Branding and Authority Design",
    description: "Influence today is personal. Outcome: Credibility that scales beyond platforms."
  },
  {
    number: "03",
    title: "Social Media Strategy and Content Systems",
    description: "Consistency without strategy is noise. Outcome: A feed that feels intentional, not improvised."
  },
  {
    number: "04",
    title: "Performance Marketing Creative Intelligence",
    description: "Creativity engineered for ROI. Outcome: Media spend supported by storytelling precision."
  },
  {
    number: "05",
    title: "Political Campaign Strategy and Public Perception",
    description: "Politics is narrative at scale. Outcome: Perception shaped with consistency and control."
  },
  {
    number: "06",
    title: "Cinema, TVC and Visual Production",
    description: "Cinematic craft is our backbone. Outcome: Production creates presence."
  },
  {
    number: "07",
    title: "Post Production and Visual Refinement",
    description: "Editing is emotional calibration. Outcome: Post production creates impact that lasts."
  },
  {
    number: "08",
    title: "Corporate Events and Experiential Campaigns",
    description: "A corporate event is a live brand statement. Outcome: Moments that translate into memory."
  },
  {
    number: "09",
    title: "High End Weddings and Luxury Celebrations",
    description: "Luxury demands precision and discretion. Outcome: Legacy preserved through design."
  },
  {
    number: "10",
    title: "AI Video Creation and Intelligent Visual Systems",
    description: "AI powered video systems built for speed and adaptability. Outcome: High volume visual content with strategic consistency."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function NarrativeEcosystem() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="bg-brand-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-brand-black">
            Our <span className="text-black italic">Narrative Ecosystem</span>
          </h2>
          <p className="text-lg text-black/50 max-w-2xl font-light leading-relaxed">
            Our services are not separate departments. They are interconnected storytelling engines. 
            Each one strengthens the other. Let us walk you through them.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-square md:aspect-auto md:h-[400px] bg-black/5 border border-black/5 overflow-hidden group p-10 cursor-pointer"
            >
              {/* Overlay Background */}
              <div className={`absolute inset-0 bg-brand-red transition-transform duration-700 ease-in-out origin-bottom ${hoveredIndex === index ? 'scale-y-100' : 'scale-y-0'}`} />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className={`text-4xl font-black mb-4 block transition-colors duration-500 ${hoveredIndex === index ? 'text-white/20' : 'text-brand-red/10'}`}>
                    {service.number}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-serif mb-6 leading-tight transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : 'text-brand-black/90'}`}>
                    {service.title}
                  </h3>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-white/90 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group/btn">
                    View Full Service
                    <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-black/5 transition-colors group-hover:border-white/30" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
