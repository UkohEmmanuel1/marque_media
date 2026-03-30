import type { ServiceItem, PortfolioItem, StatItem, ProcessStep, TestimonialItem } from "./types";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    num: "01",
    title: "Video Production",
    desc: "Cinematic storytelling from concept to final cut. We produce compelling video content that captures attention and drives results.",
    tag: "Film & Motion",
  },
  {
    num: "02",
    title: "Photography",
    desc: "High-end commercial photography that elevates your brand. Editorial, product, and lifestyle imagery crafted with precision.",
    tag: "Visual Art",
  },
  {
    num: "03",
    title: "Brand Strategy",
    desc: "Strategic visual identity creation that positions your brand for lasting impact and recognition in competitive markets.",
    tag: "Identity",
  },
  {
    num: "04",
    title: "Social Media",
    desc: "Scroll-stopping content designed for maximum engagement. From reels to campaigns, we create content that converts.",
    tag: "Digital",
  },
  {
    num: "05",
    title: "Post-Production",
    desc: "Color grading, VFX, and editing that transforms raw footage into polished masterpieces. Where the magic happens.",
    tag: "Finishing",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Zenith Fashion Film",
    category: "Video Production",
    gradient: "from-amber-900/50 via-amber-800/20 to-transparent",
    span: "md:col-span-2",
    minH: "min-h-[340px]",
  },
  {
    title: "Pulse Energy Rebrand",
    category: "Brand Strategy",
    gradient: "from-blue-900/50 via-blue-800/20 to-transparent",
  },
  {
    title: "Nova Beauty Campaign",
    category: "Photography",
    gradient: "from-rose-900/50 via-rose-800/20 to-transparent",
    minH: "min-h-[380px]",
  },
  {
    title: "Horizon Documentary",
    category: "Documentary",
    gradient: "from-emerald-900/50 via-emerald-800/20 to-transparent",
  },
  {
    title: "Apex Sports Media",
    category: "Social Media",
    gradient: "from-orange-900/50 via-orange-800/20 to-transparent",
  },
  {
    title: "Eclipse Music Video",
    category: "Music Video",
    gradient: "from-purple-900/50 via-purple-800/20 to-transparent",
    span: "md:col-span-2",
    minH: "min-h-[340px]",
  },
];

export const STATS: StatItem[] = [
  { value: "200+", label: "Projects Delivered", numericValue: 200 },
  { value: "85+", label: "Happy Clients", numericValue: 85 },
  { value: "12", label: "Industry Awards", numericValue: 12 },
  { value: "6", label: "Years of Excellence", numericValue: 6 },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your vision, goals, and audience to understand the story that needs to be told.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We craft a tailored creative plan, defining the visual direction, timeline, and deliverables.",
  },
  {
    num: "03",
    title: "Production",
    desc: "Our team brings the vision to life with world-class equipment, talent, and creative direction.",
  },
  {
    num: "04",
    title: "Delivery",
    desc: "We polish, refine, and deliver assets that exceed expectations — on time, every time.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Marque Media transformed our brand identity with a campaign that tripled our engagement. Their creative vision is truly world-class.",
    name: "Sarah Chen",
    role: "CEO",
    company: "Zenith Fashion",
  },
  {
    quote: "Working with Marque was a game-changer. They captured the essence of our brand in ways we never imagined possible.",
    name: "James Okafor",
    role: "Founder",
    company: "Pulse Energy",
  },
  {
    quote: "The quality of their video production is unmatched. Every frame tells a story, and the results speak for themselves.",
    name: "Maya Rodriguez",
    role: "CMO",
    company: "Nova Beauty",
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", abbr: "IG" },
  { label: "Twitter", href: "#", abbr: "TW" },
  { label: "YouTube", href: "#", abbr: "YT" },
  { label: "LinkedIn", href: "#", abbr: "LI" },
];
