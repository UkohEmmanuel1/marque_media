"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "../../hooks/useInView";
import { TESTIMONIALS } from "../../lib/data";

export default function Testimonials() {
  const { ref, inView } = useInView(0.15);
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [inView, next]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-10 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-card/30 to-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent">
              Testimonials
            </p>
            <span className="inline-block w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative transition-all duration-700 delay-200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Quote mark */}
          <div className="absolute -top-6 left-6 md:left-10">
            <span className="font-display text-7xl md:text-8xl text-accent/15 leading-none select-none">&ldquo;</span>
          </div>

          <div className="bg-bg-card border border-border p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Accent corner */}
            <div className="absolute top-0 left-0 w-16 h-px bg-accent" />
            <div className="absolute top-0 left-0 w-px h-16 bg-accent" />

            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{
                  display: active === i ? "block" : "none",
                  animation: active === i ? "fadeIn 0.5s ease-out" : "none",
                }}
              >
                <blockquote className="font-body text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed mb-8 md:mb-10">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent-dark/30 flex items-center justify-center">
                    <span className="font-display font-bold text-sm text-text-primary">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-text-primary">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-muted tracking-wider">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  active === i
                    ? "w-8 h-2 bg-accent"
                    : "w-2 h-2 bg-muted-dark hover:bg-muted"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
