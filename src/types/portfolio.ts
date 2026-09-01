export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  resumePdf: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  currentYear: string;
  cgpa: string;
  cgpaMax: string;
  semesterCoverage: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Full-Stack' | 'Application' | 'Database' | 'Networking' | 'Core CS' | 'Software Engineering' | 'AI';
  proficiency?: string;
  isPrimary?: boolean;
  iconName: string;
  description: string;
  relatedProjects?: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  featured: boolean;
  technologies: string[];
  features: string[];
  architectureOverview: string;
  architectureNodes?: { id: string; label: string; desc: string; type: 'client' | 'gateway' | 'service' | 'db' | 'network' }[];
  screenshots: {
    url: string;
    title?: string;
    caption: string;
    description?: string;
    technicalSignificance?: string;
    isPlaceholder?: boolean;
  }[];
  images?: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  docUrl?: string;
  apkUrl?: string;
  iosUrl?: string;
  isMajorProject?: boolean;
  webToMobile?: boolean;
  engineeringHighlights?: string[];
}

export interface CaseStudy {
  projectId: string;
  projectTitle: string;
  problem: string;
  research: string;
  architecture: string;
  implementation: string;
  challenges: string;
  solution: string;
  result: string;
  learnings: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  institution: string;
  location: string;
  rank: string;
  distinctionNote?: string;
  category: 'hackathon' | 'prototype' | 'certification' | 'presentation';
  description: string;
  certificatePlaceholder: string;
  tags: string[];
}

export interface PresentationItem {
  id: string;
  title: string;
  paperTitle?: string;
  event: string;
  institution: string;
  date: string;
  award: string;
  description: string;
  certificatePlaceholder: string;
  presentationLink: string;
}

export interface MetricItem {
  label: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  subtext: string;
  isVerified: boolean;
  iconName: string;
}

export interface LearningTopic {
  title: string;
  domain: string;
  status: 'Exploring' | 'Active Implementation' | 'Deep Dive';
  description: string;
  keyConcepts: string[];
}
