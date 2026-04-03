import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, SERVICES } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-bg-card border-t border-border">
      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display font-bold text-lg tracking-[0.2em] uppercase text-text-primary hover:text-sky-400 transition-colors duration-300"
            >
              Marque Media
            </Link>
            <p className="font-body text-sm text-muted leading-relaxed mt-4 max-w-xs">
              Premium media production agency crafting visual stories that captivate and inspire.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.abbr}
                  href={s.href}
                  className="w-9 h-9 border border-border hover:border-sky-400 flex items-center justify-center transition-all duration-300 group"
                  aria-label={s.label}
                >
                  <span className="font-mono text-xs text-muted group-hover:text-sky-400 transition-colors">
                    {s.abbr}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-[0.25em] uppercase text-text-primary mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-muted hover:text-sky-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-[0.25em] uppercase text-text-primary mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <span className="font-body text-sm text-muted hover:text-sky-400 transition-colors duration-200 cursor-pointer">
                    {s.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-xs tracking-[0.25em] uppercase text-text-primary mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-sm text-muted">hello@marquemedia.co</li>
              <li className="font-body text-sm text-muted">+234 800 MARQUE</li>
              <li className="font-body text-sm text-muted">Lagos, Nigeria</li>
            </ul>
            <Link
              href="#contact"
              className="inline-block mt-6 bg-text-primary text-bg font-display font-semibold text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-sky-400 transition-colors duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-dark">
            © {new Date().getFullYear()} Marque Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-dark hover:text-muted transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-muted-dark hover:text-muted transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
