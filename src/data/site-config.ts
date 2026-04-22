export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "linkedin" | "x";
  href: string;
  label: string;
}

export const navigationLinks: NavLink[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Mission & History", href: "/about", description: "Our story and values" },
      { label: "Our Team", href: "/about/our-team", description: "Meet our compassionate staff" },
      { label: "Testimonials", href: "/#testimonials", description: "Hear from families" },
    ],
  },
  {
    label: "Living Options",
    href: "/living-options",
    children: [
      { label: "Overview & Comparison", href: "/living-options", description: "Find the right fit" },
      { label: "Independent Living", href: "/living-options/independent-living", description: "Active lifestyle with freedom" },
      { label: "Assisted Living", href: "/living-options/assisted-living", description: "Compassionate daily support" },
      { label: "Memory Care", href: "/living-options/memory-care", description: "Expert dementia care" },
      { label: "Respite Care", href: "/living-options/respite-care", description: "Short-term stays" },
      { label: "Floor Plans & Pricing", href: "/pricing", description: "Transparent pricing" },
    ],
  },
  {
    label: "Life Here",
    href: "/life-here",
    children: [
      { label: "Activities & Events", href: "/life-here", description: "Programs and socials" },
      { label: "Dining & Nutrition", href: "/life-here/dining", description: "Chef-prepared meals" },
      { label: "Amenities & Services", href: "/life-here/amenities", description: "Everything under one roof" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Resource Center", href: "/resources", description: "Guides and articles" },
      { label: "Blog & Guides", href: "/resources/blog", description: "Articles and expert advice" },
      { label: "Financial Help", href: "/resources/financial-help", description: "Costs and assistance" },
      { label: "FAQ", href: "/resources/faq", description: "Answers to common questions" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Living Options",
    links: [
      { label: "Living Options Overview", href: "/living-options" },
      { label: "Independent Living", href: "/living-options/independent-living" },
      { label: "Assisted Living", href: "/living-options/assisted-living" },
      { label: "Memory Care", href: "/living-options/memory-care" },
      { label: "Respite / Short-Term", href: "/living-options/respite-care" },
      { label: "Floor Plans & Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Life & Community",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Life Here", href: "/life-here" },
      { label: "Dining & Nutrition", href: "/life-here/dining" },
      { label: "Amenities", href: "/life-here/amenities" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource Center", href: "/resources" },
      { label: "Blog & Guides", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Financial Help", href: "/resources/financial-help" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { label: "Schedule a Tour", href: "/schedule-tour" },
      { label: "Contact Us", href: "/contact" },
      { label: "Request Pricing", href: "/pricing" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "facebook", href: "#", label: "Follow us on Facebook" },
  { platform: "instagram", href: "#", label: "Follow us on Instagram" },
  { platform: "youtube", href: "#", label: "Subscribe on YouTube" },
];
