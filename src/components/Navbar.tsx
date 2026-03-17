import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Youtube, Linkedin } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-12">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="Chirantana Logo" className="h-8 w-auto object-contain" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Portfolio</a>
          <a href="#clients" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Clients</a>
          <a href="#team" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Team</a>
          <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-6 ml-auto">
          <div className="flex items-center gap-4 text-white/50 border-r border-white/10 pr-6 mr-2">
            <a href="https://www.instagram.com/chirantanastudio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.chirantanastudios.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Youtube size={18} />
            </a>
            <a href="https://www.linkedin.com/company/chirantana-studio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
          <a href="#contact" className="px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded-sm hover:bg-red-700 transition-all active:scale-95">
            Begin the Narrative
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white ml-auto" onClick={() => setIsMobileMenuOpen(true)}>
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
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
              <a href="#clients" onClick={() => setIsMobileMenuOpen(false)}>Clients</a>
              <a href="#team" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </nav>
            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex items-center gap-6 text-white/50 mb-8">
                <a href="https://www.instagram.com/chirantanastudio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.chirantanastudios.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="https://www.linkedin.com/company/chirantana-studio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-brand-red text-white font-medium rounded-sm active:scale-[0.98] transition-transform">
                Begin the Narrative
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
