export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  tag: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  gradient: string;
  span?: string;
  minH?: string;
}

export interface StatItem {
  value: string;
  label: string;
  numericValue: number;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}