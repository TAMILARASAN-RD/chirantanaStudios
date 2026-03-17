import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Event2Sequence from './Event2Sequence';

const narrativeLines = [
  "You have a product.",
  "You have ambition.",
  "You have campaigns running.",
  "But something is not connecting.",
  "It is not visibility you lack.",
  "It is narrative clarity.",
  "Welcome to Chirantana.",
  "In Sanskrit, Chirantana means eternal. Timeless. Everlasting.",
  "Campaigns come and go.",
  "Trends rise and fall.",
  "Algorithms change.",
  "Stories remain.",
  "We do not create content for the moment.",
  "We build stories that become identity."
];

export default function IntroNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="about" ref={containerRef} className="relative h-[500vh] bg-brand-white">
      {/* Background Sequence - Sticky */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-100">
           <Event2Sequence />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 overflow-hidden">
          <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
            {narrativeLines.map((line, index) => {
              const step = 1 / narrativeLines.length;
              const center = (index + 0.5) * step;

              // Opacity: 1 at center, 0.5 at siblings' centers, 0 beyond that
              const opacity = useTransform(
                scrollYProgress,
                [center - 1.5 * step, center - step, center, center + step, center + 1.5 * step],
                [0, 0.5, 1, 0.5, 0]
              );

              // Scale: Slight zoom-in as it hits center
              const scale = useTransform(
                scrollYProgress,
                [center - step, center, center + step],
                [0.85, 1.15, 0.85]
              );

              // Y translation: Large movement for faster transition
              const y = useTransform(
                scrollYProgress,
                [center - step, center, center + step],
                [350, 0, -350]
              );

              const isSpecial = line.includes("Chirantana") || line.includes("identity") || line.includes("Stories remain");

              return (
                <motion.div
                  key={index}
                  style={{ opacity, scale, y }}
                  className="absolute inset-0 flex items-center justify-center p-4 text-center pointer-events-none"
                >
                  <p className={`text-3xl md:text-5xl lg:text-7xl font-serif leading-tight ${
                    isSpecial ? "text-white italic" : "text-white"
                  }`}>
                    {line}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button at the end */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]),
              scale: useTransform(scrollYProgress, [0.95, 1], [0.9, 1]),
              pointerEvents: useTransform(scrollYProgress, (p) => p > 0.95 ? "auto" : "none") as any
            }}
            className="absolute bottom-20"
          >
            <a href="#how-we-think" className="px-10 py-4 bg-brand-red text-white font-semibold rounded-sm hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-brand-red/20 uppercase tracking-widest text-sm">
              See How We Think
            </a>
          </motion.div>

          {/* Scroll Progress Indicator (Left side) */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
            {narrativeLines.map((_, i) => (
              <motion.div
                key={i}
                style={{
                  height: useTransform(
                    scrollYProgress,
                    [i / narrativeLines.length, (i + 0.5) / narrativeLines.length, (i + 1) / narrativeLines.length],
                    [4, 24, 4]
                  ),
                  backgroundColor: useTransform(
                    scrollYProgress,
                    [i / narrativeLines.length, (i + 0.5) / narrativeLines.length, (i + 1) / narrativeLines.length],
                    ["rgba(255,255,255,0.1)", "rgba(237,33,39,1)", "rgba(255,255,255,0.1)"]
                  )
                }}
                className="w-1 rounded-full transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
