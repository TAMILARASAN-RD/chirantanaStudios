import logo from '../logo.png';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Chirantana Logo" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              A premium storytelling and creative communications studio. We engineer perception through cinematic craft and strategic rigor.
            </p>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-6">Pillars</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#films" className="hover:text-white transition-colors">Films & Visual Storytelling</a></li>
              <li><a href="#digital" className="hover:text-white transition-colors">Brand & Digital Amplification</a></li>
              <li><a href="#public-affairs" className="hover:text-white transition-colors">Public Affairs</a></li>
              <li><a href="#captures" className="hover:text-white transition-colors">Signature Captures</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vimeo</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Chirantana Studios. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
