export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'renovation' | 'luxury-estates';
  categoryLabel: string;
  completionYear: string;
  badge: string;
  location: string;
  sqft: string;
  duration: string;
  description: string;
  coverImage: string;
  gallery: string[];
  architecturalHighlights: string[];
  materials: string[];
  client: string;
  featured?: boolean;
}

export interface ServiceExpertise {
  id: string;
  icon: 'home' | 'building' | 'renovate' | 'blueprint' | 'sparkles' | 'shield' | 'truck' | 'wrench' | 'zap' | 'layers';
  title: string;
  tagline: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  keyUpgrades: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
  rating: number;
  avatar: string;
  year: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  durationEstimate: string;
}

