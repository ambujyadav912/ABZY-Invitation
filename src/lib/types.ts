export type InvitationType = 
  | "Wedding" | "Engagement" | "Birthday" | "Anniversary" 
  | "Baby Shower" | "Housewarming" | "Graduation" | "Party" 
  | "Festival" | "Religious" | "Corporate" | "Other";

export type TemplateStyle = 
  | "royal" | "minimal" | "cinematic" | "modern"
  | "floral" | "luxury" | "traditional" | "elegant"
  | "fun" | "colorful" | "romantic" | "professional"
  | "premium" | "celebration" | "classic" | "poster" | "neon" | "arch";

export interface InvitationData {
  id: string;
  slug: string;
  status: "draft" | "preview" | "published" | "archived";
  
  // Details
  type: InvitationType;
  creatorName: string;
  recipientName: string; // The placeholder or actual name
  eventTitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  contact: string;
  message: string;
  photoUrl?: string; // Optional for now
  
  // Design
  template: TemplateStyle;
  
  createdAt: number;
}

export interface RequestData {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  invitationType: string;
  eventDate: string;
  venue: string;
  message: string;
  status: "New" | "Contacted" | "In Progress" | "Completed";
  createdAt: number;
}

export interface SettingsData {
  email: string;
  phone: string;
  instagram: string;
}
