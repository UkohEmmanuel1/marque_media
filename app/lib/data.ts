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
    title: "Press Coverage",
    desc: "We leverage our robust network of TVs, Radio, and other digital media platforms to keep your brand and event story treding.",
    tag: "Film & Motion",
  },
  {
    num: "02",
    title: "Media Activation",
    desc: "Scripting and executing a two minute video triller that tells your brand story in the most appealing way to your target audience.",
    tag: "Visual Art",
  },
  {
    num: "03",
    title: "Event Coverage",
    desc: "We help to create post event memories from your events by capturing and creating lasting memories from yourevents.",
    tag: "Identity",
  },
  {
    num: "04",
    title: "Event Structuring and Management",
    desc: "We go beyond coverage to help you structure your event to meet its objectives.",
    tag: "Digital",
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
