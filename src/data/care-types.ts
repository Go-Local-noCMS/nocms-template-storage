export interface CareTypeFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CareType {
  slug: string;
  name: string;
  tag: string;
  description: string;
  longDescription: string;
  features: CareTypeFeature[];
  amenities: string[];
  startingPrice: string;
  image: string;
  heroImage: string;
}

export const careTypes: CareType[] = [
  {
    slug: "independent-living",
    name: "Independent Living",
    tag: "Active Lifestyle",
    description: "Spacious apartments, vibrant social life, fitness programs, and the freedom to enjoy every day on your terms.",
    longDescription: "Our independent living community offers a maintenance-free lifestyle that lets you focus on what matters most — living well. Enjoy chef-prepared meals, a full calendar of activities, fitness classes, and a welcoming community of neighbors who quickly become friends.",
    features: [
      { icon: "home", title: "Spacious Floor Plans", description: "Choose from studio, one-, and two-bedroom apartments with modern finishes and full kitchens." },
      { icon: "users", title: "Social Programming", description: "200+ monthly activities including clubs, outings, lectures, and community events." },
      { icon: "heart", title: "Wellness Programs", description: "Fitness center, pool, yoga classes, walking trails, and personalized wellness plans." },
      { icon: "shield", title: "Peace of Mind", description: "24-hour security, emergency response systems, and on-site management." },
      { icon: "star", title: "Concierge Services", description: "Transportation, housekeeping, laundry, and maintenance handled for you." },
    ],
    amenities: [
      "Chef-prepared meals daily",
      "Fitness center & heated pool",
      "Beautifully landscaped gardens",
      "Library & reading room",
      "Art studio & workshop",
      "Weekly housekeeping",
      "Scheduled transportation",
      "Pet-friendly community",
    ],
    startingPrice: "$3,200",
    image: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=1600&q=80",
  },
  {
    slug: "assisted-living",
    name: "Assisted Living",
    tag: "Personalized Support",
    description: "Compassionate daily support, medication management, and health monitoring while honoring independence and dignity.",
    longDescription: "Our assisted living program provides the perfect balance of independence and support. Trained caregivers offer personalized assistance with daily activities while our nursing team manages medications and monitors health — all in a warm, home-like environment.",
    features: [
      { icon: "heart", title: "Personalized Care Plans", description: "Individualized care assessments and plans that evolve with changing needs." },
      { icon: "shield", title: "Medication Management", description: "Licensed nurses oversee all medications with electronic tracking and family notifications." },
      { icon: "users", title: "Daily Living Assistance", description: "Compassionate help with bathing, dressing, grooming, and mobility as needed." },
      { icon: "star", title: "Health Monitoring", description: "Regular wellness checks, vital sign monitoring, and coordination with physicians." },
      { icon: "check", title: "Family Communication", description: "Secure online portal for care updates, visit scheduling, and direct staff messaging." },
      { icon: "home", title: "Home-Like Environment", description: "Comfortable private apartments with personal furnishings and 24/7 care access." },
    ],
    amenities: [
      "Three chef-prepared meals daily",
      "Medication management",
      "24-hour nursing staff",
      "Personal emergency response",
      "Weekly housekeeping & laundry",
      "Physical therapy coordination",
      "Social activities & outings",
      "Family communication portal",
    ],
    startingPrice: "$4,500",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80",
  },
  {
    slug: "memory-care",
    name: "Memory Care",
    tag: "Specialized Care",
    description: "Expert dementia care in a secure, nurturing environment with structured activities and person-centered approaches.",
    longDescription: "Our memory care neighborhood provides specialized support for residents living with Alzheimer's disease and other forms of dementia. Our trained team uses evidence-based approaches in a secure, thoughtfully designed environment that promotes dignity, engagement, and quality of life.",
    features: [
      { icon: "shield", title: "Secure Environment", description: "Purpose-designed neighborhood with controlled access, safe wandering paths, and calming spaces." },
      { icon: "heart", title: "Person-Centered Care", description: "Each resident's life story, preferences, and abilities guide their personalized care approach." },
      { icon: "users", title: "Trained Specialists", description: "All staff receive specialized dementia training, including validation therapy and redirection techniques." },
      { icon: "star", title: "Cognitive Programs", description: "Evidence-based activities including music therapy, art therapy, reminiscence, and sensory stimulation." },
      { icon: "check", title: "Family Support", description: "Support groups, education sessions, and 24/7 access to care team for questions and updates." },
    ],
    amenities: [
      "Secured neighborhood with safe paths",
      "Specialized dementia activities",
      "24-hour memory care nursing",
      "Sensory stimulation rooms",
      "Music & art therapy programs",
      "Family support groups",
      "Personalized dining assistance",
      "Certified dementia practitioners",
    ],
    startingPrice: "$5,800",
    image: "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1600&q=80",
  },
  {
    slug: "respite-care",
    name: "Respite Care",
    tag: "Short-Term Stays",
    description: "Short-term stays providing professional care for your loved one while giving family caregivers time to recharge.",
    longDescription: "Our respite care program offers families a flexible solution when they need temporary support. Whether you are recovering from surgery, traveling, or simply need a break from caregiving, your loved one will enjoy the full community experience during their stay.",
    features: [
      { icon: "clock", title: "Flexible Stays", description: "Stay as short as one week or as long as three months, with arrival and departure on your schedule." },
      { icon: "heart", title: "Full Community Access", description: "Respite guests enjoy every amenity and activity, from dining to fitness to social events." },
      { icon: "shield", title: "Professional Care", description: "Same high-quality care team and medical oversight as our long-term residents receive." },
      { icon: "users", title: "Trial Experience", description: "A perfect way to experience community life before making a long-term decision." },
    ],
    amenities: [
      "Furnished private apartment",
      "Three meals daily",
      "All activities & amenities",
      "Medication management",
      "Housekeeping & laundry",
      "Transportation services",
    ],
    startingPrice: "$250",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=80",
  },
];
