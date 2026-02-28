export type SectionId =
  | 'home'
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'publications'
  | 'contact';

export interface NavigationItem {
  id: SectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'email' | 'github' | 'linkedin';
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  duration?: string;
  summary?: string;
  highlights?: string[];
}

export interface ExperienceEntry {
  organization: string;
  employmentType?: string;
  duration: string;
  location: string;
  summary?: string;
  roles: ExperienceRole[];
  highlights?: string[];
  skills?: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  details: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectCaseStudy {
  title: string;
  kind: 'private-case-study' | 'public-profile';
  summary: string;
  highlights: string[];
  stack: string[];
  imageSrc: string;
  imageAlt: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export interface PublicationEntry {
  title: string;
  status: string;
  description: string;
  tags: string[];
}

export interface PortfolioProfile {
  displayName: string;
  role: string;
  organization: string;
  heroEyebrow: string;
  headline: string;
  summary: string;
  experienceSummary: string;
  heroFocusAreas: string[];
  email: string;
  github: string;
  linkedin: string;
  resumeHref: string;
  profileImageSrc: string;
  profileImageAlt: string;
  heroStats: HeroStat[];
  experienceMetrics: HeroStat[];
  techBadges: string[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skillGroups: SkillGroup[];
  projects: ProjectCaseStudy[];
  publications: PublicationEntry[];
  socialLinks: SocialLink[];
}
