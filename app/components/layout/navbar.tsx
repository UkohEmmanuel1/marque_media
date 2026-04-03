"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS } from "../../lib/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Image 
  src="/assets/logo.png" 
  alt="logo" 
  width={100} 
  height={100}
  className="w-32 h-auto hover:opacity-80 pt-8 transition-opacity" 
/>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative font-body text-xs tracking-[0.25em] uppercase text-muted hover:text-text-primary transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 bg-text-primary text-bg font-display font-semibold text-xs tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-accent transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>

          <button
            className="md:hidden relative w-8 h-6 flex flex-col justify-between p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-full h-px bg-text-primary transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-[11px]" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-text-primary transition-all duration-200 ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-text-primary transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-[11px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-text-primary/30 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-bg flex flex-col pt-20 pb-10 px-8 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-6 mt-4">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display font-semibold text-2xl tracking-[0.12em] uppercase text-text-primary hover:text-accent transition-colors"
                onClick={handleLinkClick}
                style={{
                  animation: isMenuOpen
                    ? `fadeInUp 0.5s ease-out ${i * 80}ms forwards`
                    : "none",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <Link
              href="#contact"
              className="block w-full bg-text-primary text-bg text-center font-display font-semibold text-xs tracking-[0.2em] uppercase py-4 hover:bg-accent transition-colors"
              onClick={handleLinkClick}
            >
              Get in Touch
            </Link>
            <div className="flex gap-5 pt-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.abbr}
                  href={s.href}
                  className="font-display text-xs tracking-widest text-muted hover:text-accent transition-colors"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
