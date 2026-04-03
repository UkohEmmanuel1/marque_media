"use client";

import { useState } from "react";
import { useInView } from "../../hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", projectType: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-10 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-card via-bg to-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — CTA */}
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
                Get in Touch
              </p>
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
              Let&apos;s Create Something{" "}
              <span className="text-sky-400">Extraordinary</span>
            </h2>

            <p className="font-body text-muted leading-relaxed mb-12 max-w-md">
              Ready to elevate your brand with premium media content? 
              Tell us about your vision and let&apos;s bring it to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: "✉", label: "Email", value: "hello@marquemedia.co" },
                { icon: "☎", label: "Phone", value: "+234 800 MARQUE" },
                { icon: "◎", label: "Location", value: "Lagos, Nigeria" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-border group-hover:border-sky-400 flex items-center justify-center transition-colors duration-300">
                    <span className="text-sky-400 text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted tracking-wider uppercase">{item.label}</p>
                    <p className="font-body text-sm text-text-primary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="transition-all duration-700 delay-200"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="group">
                <label className="block font-body text-xs text-muted tracking-wider uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-sky-400 text-text-primary font-body text-sm py-3 outline-none transition-colors duration-300 placeholder:text-muted-dark"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block font-body text-xs text-muted tracking-wider uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-sky-400 text-text-primary font-body text-sm py-3 outline-none transition-colors duration-300 placeholder:text-muted-dark"
                  placeholder="john@example.com"
                />
              </div>

              {/* Project Type */}
              <div className="group">
                <label className="block font-body text-xs text-muted tracking-wider uppercase mb-2">
                  Project Type
                </label>
                <select
                  required
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-sky-400 text-text-primary font-body text-sm py-3 outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="" className="bg-bg-card text-muted">Select a service</option>
                  <option value="video" className="bg-bg-card">Video Production</option>
                  <option value="photo" className="bg-bg-card">Photography</option>
                  <option value="brand" className="bg-bg-card">Brand Strategy</option>
                  <option value="social" className="bg-bg-card">Social Media</option>
                  <option value="post" className="bg-bg-card">Post-Production</option>
                  <option value="other" className="bg-bg-card">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block font-body text-xs text-muted tracking-wider uppercase mb-2">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-sky-400 text-text-primary font-body text-sm py-3 outline-none transition-colors duration-300 resize-none placeholder:text-muted-dark"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-text-primary text-bg font-display font-semibold text-xs tracking-[0.2em] uppercase py-4 mt-4 hover:bg-sky-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className={`inline-flex items-center gap-2 transition-transform duration-300 ${isSubmitting ? "-translate-y-10" : ""}`}>
                  Send Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-5 h-5 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                  </span>
                )}
              </button>

              {/* Success message */}
              {isSubmitted && (
                <div className="text-center py-3 text-sky-400 font-body text-sm" style={{ animation: "fadeInUp 0.5s ease-out" }}>
                  ✓ Message sent successfully! We&apos;ll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
