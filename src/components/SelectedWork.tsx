import { motion } from 'motion/react';
import Event2Sequence from './Event2Sequence';
import SingerSequence from './SingerSequence';
import Singer2Sequence from './Singer2Sequence';
import ArtSequence from './ArtSequence';

const projects = [
  { title: "Global Tech Summit", category: "Corporate Film", span: "md:col-span-8", sequenceType: 'art' },
  { title: "The Artisan's Way", category: "Documentary", span: "md:col-span-4", sequenceType: 'singer' },
  { title: "Urban Mobility", category: "Ad Campaign", span: "md:col-span-4", sequenceType: 'singer2' },
  { title: "State Elections '24", category: "Public Affairs", span: "md:col-span-8", sequenceType: 'event' },
];

export default function SelectedWork() {
  return (
    <section id="portfolio" className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
              Proof of Craft
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">Selected Work</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            View Full Archive <span className="text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${project.span} group cursor-pointer`}
            >
              <div className="relative aspect-[16/9] md:aspect-auto md:h-[400px] bg-brand-gray overflow-hidden mb-4 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {project.sequenceType === 'event' ? (
                  <Event2Sequence />
                ) : project.sequenceType === 'singer' ? (
                  <SingerSequence />
                ) : project.sequenceType === 'singer2' ? (
                  <Singer2Sequence />
                ) : project.sequenceType === 'art' ? (
                  <ArtSequence />
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif italic text-xl z-0">
                      [Project Still]
                    </div>
                    {/* Image placeholder */}
                    <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </>
                )}
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
