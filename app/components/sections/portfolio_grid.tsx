"use client";

import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { PORTFOLIO_ITEMS } from "../../lib/data";

const CATEGORIES = ["All", "Video Production", "Photography", "Brand Strategy", "Social Media", "Documentary", "Music Video"];

export default function PortfolioSection() {
  const { ref, inView } = useInView(0.05);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-5 md:px-10" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-card/50 to-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="mb-12 md:mb-16 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-accent" />
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent">
              Our Work
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
              Selected <span className="text-accent">Projects</span>
            </h2>
          </div>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-accent text-bg border-accent"
                  : "bg-transparent text-muted border-border hover:border-accent/50 hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden cursor-pointer ${item.span || ""} ${item.minH || "min-h-[280px]"}`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.95)",
                transitionDelay: `${i * 80 + 200}ms`,
                transitionDuration: "600ms",
                transitionProperty: "opacity, transform",
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} bg-bg-card`} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-24 h-24 border border-white/10 rounded-full" />
                <div className="absolute bottom-10 left-10 w-16 h-16 border border-white/5" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block font-mono text-xs text-accent/70 tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </span>
                  <h3 className="font-display font-semibold text-lg md:text-xl text-text-primary group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-0 rotate-45">
                  <svg className="w-4 h-4 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 text-center transition-all duration-700 delay-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors duration-300 group"
          >
            <span>View All Projects</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}