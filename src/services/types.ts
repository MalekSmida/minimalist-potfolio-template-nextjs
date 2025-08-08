/**
 * Type definitions for portfolio data structures
 */

// Site Configuration Types
export interface Author {
  name: string;
  url: string;
}

export interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface OpenGraph {
  url: string;
  type: string;
  title: string;
  description: string;
  siteName: string;
  locale: string;
  images: OpenGraphImage[];
}

export interface Twitter {
  card: string;
  title: string;
  description: string;
  creator: string;
  images: string[];
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  authors: Author[];
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
    };
  };
  openGraph: OpenGraph;
  twitter: Twitter;
  alternates: {
    canonical: string;
  };
  verification: {
    google: string;
  };
  other: {
    'application-name': string;
  };
}

export interface ManifestIcon {
  src: string;
  sizes: string;
  type: string;
}

export interface Manifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: 'browser' | 'fullscreen' | 'standalone' | 'minimal-ui';
  background_color: string;
  theme_color: string;
  icons: ManifestIcon[];
}

export interface Robots {
  rules: {
    userAgent: string;
    allow: string;
  };
  sitemap: string;
}

export interface SitemapItem {
  url: string;
  lastModified: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface SiteConfigData {
  metaDataData: MetaData;
  manifestData: Manifest;
  robotsData: Robots;
  sitemapData: SitemapItem[];
}

// Skills Section Types
export interface Skill {
  localPath: string;
  label: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
}

export interface SkillCategory {
  title: string;
  skillList: Skill[];
}

export type SkillsData = SkillCategory[];

// Career Section Types
export interface Experience {
  _id: string;
  contractType: string;
  company?: string;
  dates: string;
  position: string;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  summary: string;
  contributions: string[];
}

export interface CareerData {
  descriptionList: string[];
  experienceList: Experience[];
}

// About Section Types
export interface AboutData {
  title: string;
  aboutList: string[];
}

// Contact Section Types
export interface ContactData {
  email?: string;
  address?: string;
  phone?: string;
  googleMapsLink?: string;
  linkedinProfile?: string;
  githubProfile?: string;
  githubRepository?: string;
}

export interface HomeData {
  name?: string;
  jobTitle?: string;
  description?: string;
  yearsOfExperience?: string;
  about?: AboutData[];
  skills?: SkillsData;
}

export interface Service {
  _id: string;
  name: string;
  prices?: string[];
  tasks: string[];
  achievements: Array<{
    title: string;
    achievementList: string[];
  }>;
}

export interface ConsultingData {
  descriptionList?: string[];
  serviceList?: Service[];
}
