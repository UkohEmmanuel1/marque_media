"use client";

import { useInView } from "../../hooks/useInView";

export default function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-10 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 -translate-x-1/2 translate-y-1/2 pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-accent" />
              <p className="font-body text-xs tracking-[0.35em] uppercase text-accent">
                About Us
              </p>
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-text-primary mb-6">
              We Don&apos;t Just Create Content —{" "}
              <span className="text-accent">We Craft Experiences</span>
            </h2>

            <p className="font-body text-muted leading-relaxed mb-6">
              Marque Media is a premium media production agency based in Lagos, Nigeria. 
              We specialize in creating cinematic visual content that elevates brands, 
              tells compelling stories, and drives measurable results.
            </p>
            <p className="font-body text-muted leading-relaxed mb-10">
              Our team of filmmakers, photographers, and creative strategists bring a 
              unique blend of artistry and commercial acumen to every project. From 
              global campaigns to intimate brand stories, we approach each brief with 
              the same passion and precision.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { label: "Creativity", icon: "✦" },
                { label: "Strategy", icon: "◆" },
                { label: "Impact", icon: "●" },
              ].map((val) => (
                <div key={val.label} className="text-center md:text-left">
                  <span className="text-accent text-lg mb-2 block">{val.icon}</span>
                  <span className="font-display text-sm tracking-[0.15em] uppercase text-text-primary">
                    {val.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div
            className="relative transition-all duration-700 delay-200"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
            }}
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-bg-elevated via-bg-card to-accent/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto border border-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                      </svg>
                    </div>
                    <p className="font-display text-white/15 text-xs tracking-widest uppercase">Our Studio</p>
                  </div>
                </div>
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-bg-card border border-border-accent p-6 max-w-[200px]" style={{ animation: "float 5s ease-in-out infinite" }}>
                <span className="font-display font-bold text-3xl text-accent block">6+</span>
                <span className="font-body text-xs text-muted tracking-wider uppercase">Years Creating Stories</span>
              </div>

              {/* Offset border */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
