export type PageType = 
  | 'home' 
  | 'about' 
  | 'skills' 
  | 'portfolio' 
  | 'services' 
  | 'contact' 
  | 'signin' 
  | 'signup';

export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Website Design' | 'Computer Projects' | 'Practice Projects';
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  impact: string;
  date: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Web Development' | 'Computer Skills';
  level: number; // percentage 0-100
  iconName: string;
  description: string;
  tags: string[];
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  gradient: string;
  popular?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface UserAccount {
  name: string;
  email: string;
  isLoggedIn: boolean;
  avatar?: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface TechArticle {
  id: string;
  title: string;
  url: string;
  sourceName: string;
  snippet: string;
  keyTakeaways: string[];
  publishedDate: string;
  category: string;
  readTime: string;
}

export interface TechResourcesResponse {
  success: boolean;
  grounded: boolean;
  topic: string;
  searchQuery: string;
  topicSummary: string;
  articles: TechArticle[];
  groundingChunks?: GroundingChunk[];
  searchQueries?: string[];
  source: string;
  error?: string;
}

