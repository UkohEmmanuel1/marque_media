"use client";

import { useInView } from "../../hooks/useInView";
import { PROCESS_STEPS } from "../../lib/data";

export default function Process() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-10 bg-bg-card overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-border/30 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-16 md:mb-20 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent">
              How We Work
            </p>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Our <span className="text-accent">Process</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className="relative group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 150 + 200}ms`,
                transitionDuration: "700ms",
                transitionProperty: "opacity, transform",
              }}
            >
              {/* Connector line — desktop */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+30px)] w-[calc(100%-20px)] h-px">
                  <div
                    className="h-full bg-gradient-to-r from-accent/40 to-accent/10"
                    style={{
                      transform: inView ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transitionDelay: `${i * 200 + 500}ms`,
                      transitionDuration: "800ms",
                      transitionProperty: "transform",
                    }}
                  />
                </div>
              )}

              {/* Number circle */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 border border-border group-hover:border-accent rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/10">
                <span className="font-display font-bold text-lg text-muted group-hover:text-accent transition-colors duration-300">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display font-semibold text-lg text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
