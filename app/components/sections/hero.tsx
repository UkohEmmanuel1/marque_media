import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pt-20 pb-12 md:pb-16 px-5 md:px-10 overflow-hidden noise"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-bg to-bg" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent/5 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 md:right-10 w-52 h-52 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-accent/8 translate-x-1/4 md:translate-x-0 pointer-events-none" style={{ animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute top-32 right-16 md:right-32 w-28 h-28 md:w-44 md:h-44 rounded-full border border-accent/15 pointer-events-none" style={{ animation: "float 8s ease-in-out infinite 1s" }} />
      <div className="absolute bottom-1/3 right-8 md:right-20 w-3 h-3 rounded-full bg-accent/50 pointer-events-none" style={{ animation: "pulseGlow 3s ease-in-out infinite" }} />
      <div className="absolute top-1/2 left-8 md:left-16 w-1.5 h-1.5 rounded-full bg-accent/40 pointer-events-none" style={{ animation: "pulseGlow 4s ease-in-out infinite 1.5s" }} />
      <div className="absolute top-20 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block pointer-events-none" />

      {/* Vertical rule */}
      <div className="absolute top-0 right-[42%] h-full w-px bg-border/60 hidden lg:block pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-0 items-end">
          <div className="stagger">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="inline-block w-8 h-px bg-accent" />
              <p className="font-body text-xs tracking-[0.35em] uppercase text-accent">
                Film · Photo · Brand
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold leading-[0.9] tracking-tight text-text-primary overflow-hidden">
              <span className="block text-[clamp(3.5rem,13vw,9.5rem)]">MARQUE</span>
              <span
                className="block text-[clamp(3.5rem,13vw,9.5rem)]"
                style={{ WebkitTextStroke: "2px #C8883A", color: "transparent" }}
              >
                MEDIA
              </span>
            </h1>

            {/* Subline */}
            <p className="mt-6 md:mt-8 font-body text-sm md:text-base text-muted max-w-md leading-relaxed">
              We craft visual stories that captivate, inspire, and drive results. 
              Premium media production for brands that demand excellence.
            </p>

            {/* CTAs */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center bg-text-primary text-bg font-display font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-accent transition-colors duration-300"
              >
                View Our Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-text-primary font-display font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Visual Element — Desktop */}
          <div className="hidden lg:block relative w-56 xl:w-64 self-end">
            <div className="relative aspect-[2/3] bg-gradient-to-t from-accent/30 via-bg-card to-bg-elevated overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 border border-accent/30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" /></svg>
                  </div>
                  <span className="font-display text-white/25 text-xs tracking-widest uppercase">Showreel</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-display text-white/60 text-xs tracking-widest">EST. 2019</p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/30 -z-10" />
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 md:mt-16 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-8 md:gap-14">
            {[
              { value: "200+", label: "Projects" },
              { value: "85+", label: "Clients" },
              { value: "12", label: "Awards" },
              { value: "2019", label: "Est." },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary tabular-nums">
                  {stat.value}
                </span>
                <span className="font-body text-xs text-muted tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-5 md:right-10 hidden md:flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-text-primary rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-text-primary/30 overflow-hidden">
          <div className="w-full h-4 bg-accent" style={{ animation: "scrollBar 1.8s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}