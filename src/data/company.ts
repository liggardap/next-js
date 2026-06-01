import type { CompanyInfo } from "@/lib/types";

export const companyInfo: CompanyInfo = {
  name: "Sanur Ride Co.",
  tagline: "Explore Bali at Your Own Pace",
  founded: 2019,
  headquarters: "Sanur, Denpasar, Bali, Indonesia",
  phone: "+6236155588 99",
  email: "hello@sanurride.co",
  website: "www.liggar.site",
  address: "Jl. Danau Tamblingan No. 88, Sanur, Denpasar Selatan, Bali 80228",
  vision:
    "To become Bali's most trusted and customer-focused mobility partner, enabling travelers and residents to experience the island with freedom, comfort, and confidence.",
  mission: [
    "Provide safe and reliable rental vehicles for every customer.",
    "Deliver transparent pricing with no hidden fees.",
    "Offer excellent customer support throughout the rental journey.",
    "Maintain high vehicle quality and cleanliness standards.",
    "Promote responsible and sustainable tourism in Bali.",
  ],
  values: [
    {
      id: "reliability",
      title: "Reliability",
      description:
        "We keep our promises and ensure vehicles are ready when customers need them.",
      icon: "shield-check",
    },
    {
      id: "safety",
      title: "Safety",
      description:
        "Customer safety is prioritized through regular maintenance and responsible rental practices.",
      icon: "heart",
    },
    {
      id: "transparency",
      title: "Transparency",
      description:
        "Honest communication and clear pricing are fundamental to our business.",
      icon: "eye",
    },
    {
      id: "hospitality",
      title: "Hospitality",
      description:
        "We strive to deliver a warm and welcoming Balinese service experience.",
      icon: "hand-heart",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      description:
        "We support environmentally responsible tourism and encourage respectful travel practices.",
      icon: "leaf",
    },
  ],
  team: [
    {
      id: "made-wijaya",
      name: "Made Wijaya",
      role: "Founder & Operations Lead",
    },
    {
      id: "ketut-sari",
      name: "Ketut Sari",
      role: "Customer Experience Manager",
    },
    {
      id: "wayan-putra",
      name: "Wayan Putra",
      role: "Fleet & Maintenance Supervisor",
    },
    {
      id: "nyoman-dewi",
      name: "Nyoman Dewi",
      role: "Sales & Partnerships",
    },
  ],
};
