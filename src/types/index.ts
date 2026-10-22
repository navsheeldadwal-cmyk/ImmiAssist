export type ResourceCategory = 'education' | 'health' | 'housing' | 'jobs' | 'legal';

export type IECounty = 'All' | 'San Bernardino County' | 'Riverside County' | 'Pomona Valley' | 'Coachella Valley';

export interface ResourceItem {
  id: string;
  name: string;
  category: ResourceCategory;
  county: IECounty;
  city: string;
  address: string;
  phone: string;
  website: string;
  description: string;
  keyBenefits: string[];
  languages: string[];
  costType: 'Free' | 'Sliding Scale' | 'Medi-Cal / Low-Cost' | 'Free Consultations';
  whatToBring: string[];
  featured?: boolean;
}

export interface RoadmapStep {
  id: string;
  title: string;
  category: ResourceCategory;
  urgency: 'Week 1' | 'Week 2' | 'Month 1';
  summary: string;
  keyRights: string;
  actionSteps: string[];
  requiredDocs: string[];
  helpfulLinks: { title: string; url: string }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedFollowUps?: string[];
}
