import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

import logo from '../logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-sm shadow-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Chirantana Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#films" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Films</a>
          <a href="#digital" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Digital</a>
          <a href="#public-affairs" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Public Affairs</a>
          <a href="#captures" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Captures</a>
          <a href="#work" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Work</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded-sm hover:bg-red-700 transition-colors">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-black z-50 flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <img src={logo} alt="Chirantana Logo" className="h-8 w-auto object-contain" />
              <button className="text-white" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-2xl font-serif">
              <a href="#films" onClick={() => setIsMobileMenuOpen(false)}>Films & Storytelling</a>
              <a href="#digital" onClick={() => setIsMobileMenuOpen(false)}>Brand & Digital</a>
              <a href="#public-affairs" onClick={() => setIsMobileMenuOpen(false)}>Public Affairs</a>
              <a href="#captures" onClick={() => setIsMobileMenuOpen(false)}>Signature Captures</a>
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Selected Work</a>
            </nav>
            <div className="mt-auto">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-brand-red text-white font-medium rounded-sm">
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
