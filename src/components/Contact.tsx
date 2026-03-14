import { useState } from 'react';

export default function Contact() {
  const [service, setService] = useState('films');

  return (
    <section id="contact" className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-4 block">
              Initiate a Mandate
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Let's discuss your<br />
              <span className="italic text-white/70">next project.</span>
            </h2>
            <p className="text-lg text-white/60 font-light mb-12 max-w-md">
              Select your area of interest below. For confidential political inquiries, please use the direct WhatsApp channel.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white/40 uppercase tracking-wider font-semibold text-xs mb-2">Direct Contact</h4>
                <p className="text-xl font-serif hover:text-brand-red transition-colors cursor-pointer">hello@chirantanastudios.com</p>
              </div>
              <div>
                <h4 className="text-white/40 uppercase tracking-wider font-semibold text-xs mb-2">Confidential Channel</h4>
                <a href="#" className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 transition-colors font-medium">
                  Message via WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-3">Area of Interest</label>
                <div className="grid grid-cols-2 gap-3">
                  {['films', 'digital', 'political', 'captures'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setService(type)}
                      className={`py-3 px-4 text-sm font-medium rounded-sm border transition-colors ${
                        service === type 
                          ? 'bg-brand-red border-brand-red text-white' 
                          : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {type === 'films' && 'Films & Visuals'}
                      {type === 'digital' && 'Brand & Digital'}
                      {type === 'political' && 'Public Affairs'}
                      {type === 'captures' && 'Signature Captures'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Organization</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20" placeholder="Company Name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Project Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-white/20 resize-none" placeholder="Briefly describe your objectives..." />
              </div>

              <button type="submit" className="w-full py-4 bg-white text-brand-black font-medium rounded-sm hover:bg-gray-200 transition-colors mt-4">
                Submit Inquiry
              </button>
              
              {service === 'political' && (
                <p className="text-xs text-white/40 text-center mt-4">
                  All inquiries are treated with strict confidentiality.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
