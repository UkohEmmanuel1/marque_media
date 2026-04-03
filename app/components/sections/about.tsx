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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-400/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sky-400/5 -translate-x-1/2 translate-y-1/2 pointer-events-none blur-3xl" />

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
              <span className="inline-block w-8 h-px bg-sky-400" />
              <p className="font-body text-xs tracking-[0.35em] uppercase text-sky-400">
                About Us
              </p>
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-text-primary mb-6">
              Who We Are{" "}
            </h2>

            <p className="font-body text-muted leading-relaxed mb-6">
              Marque Media is a media subsidiary of Marque projection,
              specializing in creating high end media content for events, and
              working with top tier brands, we understand the nuances of
              creating visual content that tells your brand and event story to
              your target audience.
            </p>
            <p className="font-body text-muted leading-relaxed mb-10">
              Our process begins with a deep understanding of your project, and
              we create a strategic narrative which is executed by our world
              class media team to deliver a polished visual masterpiece.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { label: "Creativity", icon: "✦" },
                { label: "Strategy", icon: "◆" },
                { label: "Impact", icon: "●" },
              ].map((val) => (
                <div key={val.label} className="text-center md:text-left">
                  <span className="text-sky-400 text-lg mb-2 block">
                    {val.icon}
                  </span>
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
              <div className="relative aspect-[4/5] overflow-hidden group">
                {/* 1. The Background Image */}
                <img
                  src="/assets/02.JPG"
                  alt="Our Studio"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* 2. Dark Overlay (Ensures the camera icon and text stay readable) */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50" />

                {/* 3. The Camera Icon & Text Content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center space-y-4">
                    {/* Added backdrop-blur so the image slightly blurs behind the circle */}
                    <div className="w-20 h-20 mx-auto border border-white/30 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white/90"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                        />
                      </svg>
                    </div>
                    <p className="font-display text-white text-xs tracking-widest uppercase font-medium">
                      Our Portfolio
                    </p>
                  </div>
                </div>

                {/* 4. Bottom Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg to-transparent z-10" />
              </div>

              {/* Floating accent card */}
              <div
                className="absolute -bottom-6 -left-6 bg-bg-card border border-border-accent p-6 max-w-[200px]"
                style={{ animation: "float 5s ease-in-out infinite" }}
              >
                <span className="font-display font-bold text-3xl text-accent block">
                  6+
                </span>
                <span className="font-body text-xs text-muted tracking-wider uppercase">
                  Years Creating Stories
                </span>
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
