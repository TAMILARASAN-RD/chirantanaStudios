import { motion } from 'motion/react';

const leaders = [
  { name: "Mahesh N Chidre", role: "Chief Executive Officer (CEO)", bio: "Sees the bigger picture before it exists. Builds Chirantana Studio at the intersection of story and scale. Believes powerful narratives don’t just engage, they move markets." },
  { name: "Ashok", role: "Chief Operating Officer (COO)", bio: "Brings order to ambition and structure to creativity. Designs systems where ideas don’t get stuck, they get delivered. Operates with one goal: consistency at scale, every single time." },
  { name: "Vaithee", role: "Chief Business Officer (CBO)", bio: "Starts with people, builds with trust, and closes with clarity. Turns conversations into long-term partnerships. Sees growth not as numbers, but as relationships that compound." },
  { name: "Shashidhar Meti", role: "Editorial Head, Just Fact", bio: "Shapes the voice and vision behind Just Fact. Crafts content with clarity, depth, and intent. Ensures every story informs, questions, and leaves a mark." },
];

const coreTeam = [
  { name: "Dinesha G G", role: "Head of Post Production", bio: "Refines every frame until it feels right and lands strong." },
  { name: "Darshan Achar A G", role: "Head of Creative Content", bio: "Thinks in stories, builds in ideas, delivers in impact." },
  { name: "Chaitanya", role: "Operations & Project Manager", bio: "Keeps the chaos organized and the execution on track." },
  { name: "Samarth Shridar", role: "Graphic & Visual Designer", bio: "Turns thoughts into visuals that speak instantly." },
  { name: "Preethi", role: "Associate Creative Producer", bio: "Brings ideas to life by keeping people, process, and production aligned. Ensures every project moves from concept to execution with clarity and flow." },
];

const additionalTeam = [
  { name: "Raghu R", role: "Creative Content Writer" },
  { name: "Shreekantha H S", role: "Senior Video Editor" },
  { name: "Ashok Naik", role: "Social Media Executive" },
  { name: "Nithin H C", role: "Social Media Manager" },
  { name: "Manjunath", role: "Graphic Designer" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">The Team</h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-brand-gray mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors duration-300" />
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-brand-white/10 uppercase font-serif text-2xl tracking-widest -rotate-45">
                  {leader.role}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">{leader.name}</h3>
              <p className="text-brand-red text-sm font-semibold uppercase tracking-wider mb-4">{leader.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Team */}
        <div className="mb-24">
          <h3 className="text-2xl font-serif mb-12 border-b border-brand-gray pb-4">Core Team members</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-1 bg-brand-red/30 mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h4 className="font-medium text-lg leading-tight mb-1">{member.name}</h4>
                <p className="text-brand-red/80 text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Studio Operations / Support Team */}
        <div>
          <h3 className="text-2xl font-serif mb-12 border-b border-brand-gray pb-4">Studio Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 opacity-80">
            {additionalTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 5) * 0.1 }}
                className="group"
              >
                <div className="h-0.5 bg-gray-700 mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h4 className="font-medium text-lg leading-tight mb-1">{member.name}</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
