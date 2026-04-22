export interface PricingPlan {
  name: string;
  startingPrice: string;
  period: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
  ctaHref: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Independent Living",
    startingPrice: "$3,200",
    period: "/month",
    features: [
      "Spacious private apartment",
      "Three chef-prepared meals daily",
      "Weekly housekeeping & linen service",
      "200+ monthly activities & events",
      "Fitness center & heated pool access",
      "24-hour security & emergency response",
      "All utilities & basic cable included",
      "Scheduled transportation",
    ],
    ctaText: "Schedule a Tour",
    ctaHref: "/schedule-tour",
  },
  {
    name: "Assisted Living",
    startingPrice: "$4,500",
    period: "/month",
    features: [
      "Everything in Independent Living",
      "Personalized care plan",
      "Medication management",
      "Bathing & dressing assistance",
      "Health monitoring & assessments",
      "Physical therapy coordination",
      "Family communication portal",
      "Care plan reviews every 90 days",
    ],
    featured: true,
    ctaText: "Get Personalized Quote",
    ctaHref: "/contact",
  },
  {
    name: "Memory Care",
    startingPrice: "$5,800",
    period: "/month",
    features: [
      "Everything in Assisted Living",
      "Secured neighborhood",
      "Evidence-based memory programs",
      "Trained dementia care specialists",
      "Sensory stimulation activities",
      "Family support groups",
      "Cognitive engagement therapy",
      "Certified dementia practitioners",
    ],
    ctaText: "Learn More",
    ctaHref: "/living-options/memory-care",
  },
];
