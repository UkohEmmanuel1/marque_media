"use client";

import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";
import { STATS } from "../../lib/data";

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary tabular-nums">
      {count}
      <span className="text-sky-400">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 px-5 md:px-10 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg-card to-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400/5 via-transparent to-sky-400/5" />

      {/* Top & bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 150}ms`,
                transitionDuration: "700ms",
                transitionProperty: "opacity, transform",
              }}
            >
              <AnimatedCounter
                target={stat.numericValue}
                suffix={stat.value.replace(/\d/g, "")}
                inView={inView}
              />
              <span className="block mt-2 font-body text-xs md:text-sm text-muted tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
