import { motion } from 'motion/react';

const services = [
  {
    title: "Ad Films",
    positioning: "Commercials that command attention.",
    audience: "Brands & Agencies",
    problem: "Breaking through market noise with high-impact visual storytelling.",
    deliverables: "TVCs, Digital Campaigns, Product Launches",
    benefits: "Premium production value, strategic messaging, cinematic execution."
  },
  {
    title: "Documentary Films",
    positioning: "Truth, beautifully told.",
    audience: "Institutions & Foundations",
    problem: "Communicating complex impact stories with authenticity and emotion.",
    deliverables: "Short Docs, Impact Films, Founder Stories",
    benefits: "Deep research, empathetic interviewing, narrative arc development."
  },
  {
    title: "Corporate Films",
    positioning: "Your business, elevated.",
    audience: "Corporates & B2B Enterprises",
    problem: "Translating corporate capability into compelling visual proof.",
    deliverables: "Brand Anthems, Factory Tours, Investor Pitches",
    benefits: "Professionalism, clarity, stakeholder confidence."
  },
  {
    title: "Post-Production",
    positioning: "The final polish.",
    audience: "Production Houses & Agencies",
    problem: "Needing high-end finishing, color grading, and sound design.",
    deliverables: "Editing, Color Grading, VFX, Sound Mix",
    benefits: "Technical excellence, timely delivery, creative enhancement."
  }
];

export default function Pillar1() {
  return (
    <section id="services" className="py-32 bg-brand-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
                Pillar I
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                Films & Visual<br />
                <span className="italic text-white/70">Storytelling</span>
              </h2>
              <p className="text-lg text-white/60 font-light max-w-md mb-8">
                Our primary craft. We build cinematic narratives that solve business problems and elevate brand perception.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-red font-medium hover:text-red-400 transition-colors">
                Discuss a Film Project <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="lg:col-span-7 space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="border-t border-white/10 pt-12"
              >
                <h3 className="text-3xl font-serif mb-2">{service.title}</h3>
                <p className="text-xl text-white/80 font-light italic mb-8">{service.positioning}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h4 className="text-white/40 uppercase tracking-wider font-semibold mb-2">For Whom</h4>
                    <p className="text-white/90">{service.audience}</p>
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-wider font-semibold mb-2">Problem Solved</h4>
                    <p className="text-white/90">{service.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-wider font-semibold mb-2">Deliverables</h4>
                    <p className="text-white/90">{service.deliverables}</p>
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-wider font-semibold mb-2">Key Benefits</h4>
                    <p className="text-white/90">{service.benefits}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
