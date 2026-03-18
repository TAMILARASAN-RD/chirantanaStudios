import { motion } from 'motion/react';

import photoshootImg from '../3 images/Photoshoot.jpg';
import eventCoverageImg from '../3 images/event coverage.jpg';
import weddingCinematographyImg from '../3 images/wedding cinematography.jpg';

const captures = [
  { title: "Photoshoots", desc: "Editorial, fashion, and corporate portraits.", image: photoshootImg },
  { title: "Event Coverage", desc: "Discreet, high-end documentation of significant moments.", image: eventCoverageImg },
  { title: "Wedding Cinematography", desc: "Emotional, cinematic storytelling for premium celebrations.", image: weddingCinematographyImg },
];

export default function Pillar4() {
  return (
    <section id="captures" className="py-32 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
            Pillar IV
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Signature <span className="italic text-white/70">Captures</span>
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl leading-relaxed mx-auto md:mx-0">
            A distinct sub-world of Chirantana Studio dedicated to personal milestones, high-end events, and editorial photography. Warmer, more emotional, yet retaining our signature cinematic polish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {captures.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-brand-black mb-6 relative overflow-hidden rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <a href="#contact" className="text-sm font-medium text-white hover:text-brand-red transition-colors">
                    View Portfolio →
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
              <p className="text-white/60 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
