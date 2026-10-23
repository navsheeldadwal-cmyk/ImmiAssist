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
  costType: 'Free' | 'Sliding Scale' | 'Medi-Cal / Low-Cost' | 'Free Consultations' | 'Covered by Insurance / Medi-Cal';
  whatToBring: string[];
  featured?: boolean;
  tags?: string[];
  facilityType?:
    | 'Hospital'
    | 'Medical Center'
    | 'Clinic'
    | 'Elementary School'
    | 'Middle School'
    | 'High School'
    | 'Daycare & Childcare'
    | 'School Boundary & Enrollment'
    | 'School District'
    | 'Adult School'
    | 'College'
    | 'Community Center'
    | 'Legal Aid';
  gradeLevels?: string;
  boundaryZone?: string;
  feederPattern?: string;
  boundaryMapUrl?: string;
}

export type RoadmapPeriod = 'First 30 Days' | 'Days 31-60' | 'Days 61-90';

export interface RoadmapStep {
  id: string;
  title: string;
  category: ResourceCategory;
  urgency: 'Week 1' | 'Week 2' | 'Month 1' | 'Month 2' | 'Month 3';
  period: RoadmapPeriod;
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
