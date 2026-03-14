export default function TrustAnchors() {
  return (
    <section className="py-12 border-y border-white/10 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-widest text-white/40 uppercase text-center mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Placeholders for logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="text-sm font-serif italic tracking-wider">
              [Selected Client Logo]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
