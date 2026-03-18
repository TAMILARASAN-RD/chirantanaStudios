import { motion } from 'motion/react';
import { useState } from 'react';

// Import actual team photos from src/team
import maheshImg from '../team/mahesh.webp';
import ashokImg from '../team/ashok.webp';
import darshanImg from '../team/darshan.webp';
import samarthImg from '../team/samarth.webp';
import chaitanyaImg from '../team/chaitanya.webp';
import preethiImg from '../team/preethi.webp';
import raghuImg from '../team/raghu.webp';
import shashidharImg from '../team/shashidhar.jpg';
import shreekanthaImg from '../team/shreekantha.webp';
import agniImg from '../team/agni.webp';
import santoshImg from '../team/santosh.webp';
import nithinImg from '../team/nithin.webp';
import sriniImg from '../team/srini.webp';

const leaders = [
  {
    name: "Mahesh N Chidre",
    role: "Chief Executive Officer",
    tagline: "The Narrative Architect",
    bio: "Sees the bigger picture before it exists. Builds Chirantana Studio at the intersection of story and scale. Believes powerful narratives don't just engage, they move markets.",
    photo: maheshImg,
    position: "object-top" 
  },
  {
    name: "Srini",
    role: "Chief Business Officer",
    tagline: "Strategy & Expansion",
    bio: "Starts with people, builds with trust, and closes with clarity. Turns conversations into long-term partnerships. Sees growth not as numbers, but as relationships that compound.",
    photo: sriniImg,
    position: "object-top"
  },
  {
    name: "Ashok Nayak",
    role: "Chief Operating Officer",
    tagline: "Precision & Structure",
    bio: "Brings order to ambition and structure to creativity. Designs systems where ideas don't get stuck, they get delivered. Operates with one goal: consistency at scale.",
    photo: ashokImg,
    position: "object-top"
  },
];

const coreTeam = [
  { 
    name: "Darshan Achar", 
    role: "Creative Lead", 
    bio: "Shapes the visual language and creative direction of every cinematic project.", 
    photo: darshanImg,
    position: "object-top"
  },
  { 
    name: "Samarth Shridhar", 
    role: "Graphic Lead", 
    bio: "Translates complex strategies into intuitive and high-impact visual systems.", 
    photo: samarthImg,
    position: "object-top"
  },
  { 
    name: "Nithin", 
    role: "Production Lead", 
    bio: "Ensures the visual craft meets the narrative intent with technical precision.", 
    photo: nithinImg,
    position: "object-top"
  },
];

const additionalTeam = [
  { name: "Shashidhar Meti", role: "Editorial Head, Just Fact", photo: shashidharImg },
  { name: "Chaitanya P G", role: "Operations & Project Manager", photo: chaitanyaImg },
  { name: "Preethi", role: "Associate Creative Producer", photo: preethiImg },
  { name: "Raghu R", role: "Creative Content Writer", photo: raghuImg },
  { name: "Shreekantha H S", role: "Senior Video Editor", photo: shreekanthaImg },
  { name: "Agni Patil", role: "SEO Specialist", photo: agniImg },
  { name: "Santosh Naik", role: "Content Writer", photo: santoshImg },
];

export default function Team() {
  const [hoveredLeader, setHoveredLeader] = useState<number | null>(null);

  return (
    <section id="team" className="py-32 bg-brand-black text-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-28 text-center"
        >
          <span className="text-brand-red font-semibold tracking-[0.3em] text-xs uppercase mb-6 block">
            The People
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
            Behind <span className="italic text-brand-red">Chirantana</span>
          </h2>
          <p className="text-lg text-brand-white/30 font-light max-w-xl mx-auto">
            Behind every story is disciplined execution — and the people who make it unforgettable.
          </p>
        </motion.div>

        {/* ─── LEADERS ─── */}
        <div className="mb-40">
          {leaders.map((leader, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredLeader === index;

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: index * 0.15 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 mb-28 last:mb-0`}
                onMouseEnter={() => setHoveredLeader(index)}
                onMouseLeave={() => setHoveredLeader(null)}
              >
                {/* Photo Container */}
                <div className="relative flex-shrink-0 w-full md:w-[45%]">
                  <div className="relative overflow-hidden aspect-[2/3] max-w-[380px] mx-auto">
                    {/* Red accent frame */}
                    <motion.div
                      className={`absolute ${isEven ? '-right-3 -bottom-3' : '-left-3 -bottom-3'} w-full h-full border-2 border-brand-red/30 z-0`}
                      animate={{ opacity: isHovered ? 1 : 0.3 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Photo - using object-top and taller 2:3 ratio for best head visibility */}
                    <motion.div
                      className="relative z-10 w-full h-full overflow-hidden"
                      animate={{ scale: isHovered ? 1.02 : 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        className={`w-full h-full object-cover ${leader.position} grayscale hover:grayscale-0 transition-all duration-700`}
                        loading="lazy"
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                  <motion.div
                    className={`inline-block mb-4 ${isEven ? '' : 'md:ml-auto'}`}
                  >
                    <p className="text-brand-red text-[10px] font-bold uppercase tracking-[0.4em] mb-1">
                      {leader.role}
                    </p>
                    <div className={`h-px bg-brand-red/40 w-12 ${isEven ? '' : 'md:ml-auto'}`} />
                  </motion.div>

                  <h3 className="text-4xl md:text-5xl font-serif mb-3 leading-tight">
                    {leader.name}
                  </h3>

                  <p className="text-brand-red/70 text-sm font-light italic mb-6 tracking-wide">
                    {leader.tagline}
                  </p>

                  <p className={`text-gray-400 text-sm leading-[1.8] font-light max-w-md ${isEven ? '' : 'md:ml-auto'} mx-auto md:mx-0`}>
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── CORE TEAM ─── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-brand-red/40 to-transparent" />
            <h3 className="text-2xl font-serif text-brand-white/80 whitespace-nowrap">
              Core Team
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-brand-red/40 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-2xl bg-brand-gray/50">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.position} grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105`}
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  {/* Red line accent on hover */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-brand-red transition-all duration-700" />
                </div>

                {/* Info */}
                <div className="relative">
                  <h4 className="font-serif text-xl mb-1 group-hover:text-brand-red/90 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-brand-red/50 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── STUDIO SUPPORT ─── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-brand-red/20 to-transparent" />
            <h3 className="text-lg font-serif text-brand-white/50 whitespace-nowrap">
              Studio Support
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-brand-red/20 to-transparent" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {additionalTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group cursor-default text-center w-[160px]"
              >
                {/* Photo - circular with top-focused crop */}
                <div className="relative w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full border-2 border-white/5 group-hover:border-brand-red/40 transition-all duration-500">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-medium text-sm leading-tight mb-1 group-hover:text-brand-red/90 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-[9px] uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Closing Quote ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center pt-20 border-t border-brand-gray"
        >
          <p className="text-3xl md:text-4xl font-serif italic text-brand-white/40 select-none">
            "The company may be young. The experience is not."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
