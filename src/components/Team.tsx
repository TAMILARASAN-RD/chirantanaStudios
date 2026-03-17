import { motion } from 'motion/react';

const leaders = [
  { name: "Mahesh N Chidre", role: "Chief Executive Officer / The Narrative Architect", bio: "Sees the bigger picture before it exists. Builds Chirantana Studio at the intersection of story and scale. Believes powerful narratives don’t just engage, they move markets." },
  { name: "Vaithee", role: "Chief Business Officer / Strategy & Expansion", bio: "Starts with people, builds with trust, and closes with clarity. Turns conversations into long-term partnerships. Sees growth not as numbers, but as relationships that compound." },
  { name: "Ashok", role: "Chief Operating Officer / Precision & Structure", bio: "Brings order to ambition and structure to creativity. Designs systems where ideas don’t get stuck, they get delivered. Operates with one goal: consistency at scale." },
];

const coreTeam = [
  { name: "Dinesh", role: "Production Lead", bio: "Ensures the visual craft meets the narrative intent with technical precision." },
  { name: "Darshan", role: "Creative Lead", bio: "Shapes the visual language and creative direction of every cinematic project." },
  { name: "Samarth", role: "Graphic Lead", bio: "Translates complex strategies into intuitive and high-impact visual systems." },
];

const additionalTeam = [
  { name: "Shashidhar Meti", role: "Editorial Head, Just Fact" },
  { name: "Chaitanya", role: "Operations & Project Manager" },
  { name: "Preethi", role: "Associate Creative Producer" },
  { name: "Raghu R", role: "Creative Content Writer" },
  { name: "Shreekantha H S", role: "Senior Video Editor" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
            Disciplined Execution
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">The Team Behind Chirantana</h2>
          <p className="text-xl text-brand-white/40 font-serif italic">Behind every story is disciplined execution.</p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-brand-gray mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors duration-300" />
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-brand-white/5 uppercase font-serif text-sm tracking-[0.5em] -rotate-90">
                  Leadership
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">{leader.name}</h3>
              <p className="text-brand-red text-xs font-semibold uppercase tracking-widest mb-4 inline-block border-b border-brand-red/30 pb-1">{leader.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{leader.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Team */}
        <div className="mb-32">
          <h3 className="text-2xl font-serif mb-12 border-b border-brand-gray pb-4 text-brand-white/80">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-0.5 bg-brand-red/30 mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h4 className="font-medium text-lg leading-tight mb-1">{member.name}</h4>
                <p className="text-brand-red/80 text-xs font-semibold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Studio Operations / Support Team */}
        <div className="mb-24">
          <h3 className="text-xl font-serif mb-12 border-b border-brand-gray pb-4 text-brand-white/60">Studio Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60">
            {additionalTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <h4 className="font-medium text-sm leading-tight mb-1">{member.name}</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-20 border-t border-brand-gray"
        >
          <p className="text-3xl md:text-4xl font-serif italic text-brand-white/20 select-none">
            "The company may be young. The experience is not."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
