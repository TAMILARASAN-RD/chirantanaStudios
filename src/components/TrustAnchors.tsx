export default function TrustAnchors() {
  const segments = [
    { title: "Corporate Brands", sub: "Growth-focused Enterprises" },
    { title: "Founders & Startups", sub: "HNI Networks & Visionaries" },
    { title: "Political Leaders", sub: "Public Representatives" }
  ];

  return (
    <section id="clients" className="py-24 border-y border-white/5 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-brand-red uppercase mb-4">
            The Company We Keep
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Built for those who build the future</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {segments.map((s, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-sm hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-serif text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/40 font-light">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-opacity duration-700">
          {/* Placeholders for logos */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-sm font-serif italic tracking-wider text-white">
              [Selected Client Logo]
            </div>
          ))}
        </div>

        <p className="text-center mt-20 text-white/40 font-light italic text-sm max-w-2xl mx-auto leading-relaxed">
          "Our partnerships are long term. Because narrative building is not a one-campaign activity."
        </p>
      </div>
    </section>
  );
}
