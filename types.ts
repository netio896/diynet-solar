export interface BilingualText {
  zh: string;
  en: string;
}

export interface NavItem {
  label: BilingualText;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: BilingualText;
  points: BilingualText[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: BilingualText;
  details: {
    capacity: string;
    duration: string;
    purpose: BilingualText;
  };
  image: string;
}

export interface WorkflowStep {
  step: number;
  title: BilingualText;
  description: BilingualText;
}

export interface WhyUsPoint {
  title: BilingualText;
  description: BilingualText;
}

export interface FormData {
  name: string;
  contact: string;
  city: string;
  serviceType: string;
  propertyType: string;
  notes: string;
}