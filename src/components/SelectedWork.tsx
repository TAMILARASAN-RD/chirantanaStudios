import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Event2Sequence from './Event2Sequence';
import SingerSequence from './SingerSequence';
import Singer2Sequence from './Singer2Sequence';
import ArtSequence from './ArtSequence';

const categories = ["All", "Corporate Film", "Documentary", "Ad Campaign", "Public Affairs"];

const projects = [
  { title: "Global Tech Summit", category: "Corporate Film", span: "md:col-span-8", sequenceType: 'art' },
  { title: "The Artisan's Way", category: "Documentary", span: "md:col-span-4", sequenceType: 'singer' },
  { title: "Urban Mobility", category: "Ad Campaign", span: "md:col-span-4", sequenceType: 'singer2' },
  { title: "State Elections '24", category: "Public Affairs", span: "md:col-span-8", sequenceType: 'event' },
];

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-brand-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
              Stories in Motion
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black">Selected Work</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest font-bold pb-2 border-b-2 transition-all ${
                  activeCategory === cat 
                    ? "border-brand-red text-brand-black" 
                    : "border-transparent text-black/40 hover:text-black/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`${project.span} group cursor-pointer relative`}
              >
                <div className="relative aspect-[16/9] md:aspect-auto md:h-[400px] bg-black/5 overflow-hidden mb-4 rounded-sm">
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-center p-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-brand-red text-white text-xs uppercase tracking-widest font-bold rounded-sm shadow-xl shadow-brand-red/20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      View Case Study
                    </motion.button>
                  </div>
                  
                  {project.sequenceType === 'event' ? (
                    <Event2Sequence />
                  ) : project.sequenceType === 'singer' ? (
                    <SingerSequence />
                  ) : project.sequenceType === 'singer2' ? (
                    <Singer2Sequence />
                  ) : project.sequenceType === 'art' ? (
                    <ArtSequence />
                  ) : (
                    <div className="absolute inset-0 bg-black/5 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-brand-black">{project.title}</h3>
                  <span className="text-xs font-semibold tracking-wider text-black/40 uppercase">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
