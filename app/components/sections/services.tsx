"use client";

import { useInView } from "../../hooks/useInView";
import { SERVICES } from "../../lib/data";

export default function Services() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-10 bg-bg-card"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />

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
            <span className="inline-block w-8 h-px bg-sky-400" />
            <p className="font-body text-xs tracking-[0.35em] uppercase text-sky-400">
              What We Do
            </p>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-2xl">
            Services Built for{" "}
            <span className="text-sky-400">Bold Brands</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.num}
              className="group relative bg-bg border border-border p-7 md:p-8 transition-all duration-500 hover:border-border-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "700ms",
                transitionProperty: "opacity, transform",
              }}
            >
              {/* Accent top line on hover */}
              <div className="absolute top-0 left-0 w-0 h-px bg-sky-400 group-hover:w-full transition-all duration-500" />

              {/* Number */}
              <span className="font-mono text-xs text-sky-400/50 tracking-widest block mb-6">
                {service.num}
              </span>

              {/* Title */}
              <h3 className="font-display font-semibold text-xl text-text-primary mb-3 group-hover:text-sky-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-muted leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Tag */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-dark tracking-wider uppercase">
                  {service.tag}
                </span>
                <svg
                  className="w-4 h-4 text-muted-dark group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
