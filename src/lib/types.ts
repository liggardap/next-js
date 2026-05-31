export type VehicleCategory =
  | "scooter"
  | "premium-scooter"
  | "economy-car"
  | "suv-mpv"
  | "premium-car";

export type Vehicle = {
  id: string;
  name: string;
  category: VehicleCategory;
  transmission: "automatic" | "manual";
  seats: number;
  image: string;
  gallery: string[];
  description: string;
  dailyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  features: string[];
  isFeatured: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  country: string;
  rating: number;
  review: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
};

export type CoreValue = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image?: string;
};

export type CompanyInfo = {
  name: string;
  tagline: string;
  founded: number;
  headquarters: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  vision: string;
  mission: string[];
  values: CoreValue[];
  team: TeamMember[];
};
