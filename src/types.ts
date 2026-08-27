export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  website?: string;
  devto?: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  subtext: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  fullDescription: string;
  category: 'Full-Stack' | 'AI & ML' | 'Cloud & Systems' | 'Developer Tools' | 'Frontend';
  tags: string[];
  featured: boolean;
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  demoAvailable?: boolean;
  architectureHighlights: string[];
  keyFeatures: string[];
  techStack: string[];
  iconName: string;
  colorGradient: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 - 100
  experienceYears: string;
  highlight?: boolean;
  keywords: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  likes: number;
  featured?: boolean;
  content: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
  createdAt: string;
  read?: boolean;
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  shortBio: string;
  fullBioParagraphs: string[];
  location: string;
  email: string;
  availability: {
    status: 'Available' | 'Selective' | 'Booked';
    message: string;
    targetRoles: string[];
  };
  socials: SocialLinks;
  metrics: MetricHighlight[];
  terminalCommands: Record<string, string>;
}
