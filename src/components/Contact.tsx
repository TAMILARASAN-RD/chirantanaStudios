import { useState } from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Ready to Build Something<br />
              <span className="italic text-white/70">That Lasts?</span>
            </h2>
            <p className="text-lg text-white/60 font-light mb-12 max-w-md leading-relaxed">
              If you are ready to stop executing randomly and start building intentionally, let us talk.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-white/40 uppercase tracking-widest font-bold text-[10px] mb-3">Direct Inquiry</h4>
                <p className="text-xl md:text-2xl font-serif hover:text-brand-red transition-colors cursor-pointer border-b border-white/10 pb-2 inline-block">hello@chirantanastudios.com</p>
              </div>
              <div>
                <h4 className="text-white/40 uppercase tracking-widest font-bold text-[10px] mb-3">Confidential Channel</h4>
                <a href="#" className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 transition-colors font-medium text-lg">
                  Direct via WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-md">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-red transition-colors">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-white/10" placeholder="Your Full Name" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-red transition-colors">Organization</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-white/10" placeholder="Brand / Company" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-red transition-colors">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-white/10" placeholder="john@example.com" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-red transition-colors">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-white/10" placeholder="+91 XXX XXX XXXX" />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-red transition-colors">What are you building?</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-white/10" placeholder="Feature film, political campaign, luxury brand..." />
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-brand-red transition-colors">What challenge are you facing?</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-brand-red transition-all placeholder:text-white/10 resize-none" placeholder="Visibility, trust, narrative clarity..." />
              </div>

              <button type="submit" className="w-full py-5 bg-brand-red text-white font-bold uppercase tracking-[0.2em] text-xs rounded-sm hover:bg-red-700 transition-all active:scale-[0.98] shadow-xl shadow-brand-red/20 mt-4">
                Begin the Narrative
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
