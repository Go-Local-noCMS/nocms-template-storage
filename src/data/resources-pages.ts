export interface ResourcePageSection {
  heading: string;
  content: string;
}

export interface ResourcePage {
  slug: string;
  name: string;
  tag: string;
  description: string;
  type: "faq" | "guide" | "financial";
  heroImage?: string;
  sections: ResourcePageSection[];
}

export const resourcePages: ResourcePage[] = [
  {
    slug: "faq",
    name: "Frequently Asked Questions",
    tag: "FAQ",
    description: "Answers to the most common questions families have about senior living, care options, costs, and the transition process.",
    type: "faq",
    sections: [
      {
        heading: "About Our Community",
        content: "Our community has been serving seniors and their families for over 20 years. We offer a full continuum of care including independent living, assisted living, memory care, and respite care. Our campus-style setting provides a safe, welcoming environment where residents can thrive at every stage of life.",
      },
      {
        heading: "Getting Started",
        content: "The first step is scheduling a personal tour. During your visit, you will meet our staff, see available floor plans, enjoy a complimentary meal, and get a real feel for daily life here. We also offer virtual tours for families who cannot visit in person. After your tour, our admissions team will guide you through assessments, paperwork, and move-in logistics.",
      },
      {
        heading: "Care & Support",
        content: "We develop individualized care plans for each resident based on comprehensive assessments. Plans are reviewed regularly and adjusted as needs change. Our 24-hour nursing staff provides medication management, health monitoring, and coordination with outside physicians. We believe in honoring each resident's independence while ensuring their safety and well-being.",
      },
    ],
  },
  {
    slug: "financial-help",
    name: "Financial Help & Resources",
    tag: "Financial",
    description: "A comprehensive guide to understanding senior living costs, insurance coverage, VA benefits, and financial assistance programs.",
    type: "financial",
    sections: [
      {
        heading: "Understanding Senior Living Costs",
        content: "Senior living costs vary based on the level of care, apartment size, and geographic location. Our pricing is all-inclusive with no hidden fees. Independent living starts at approximately $3,200/month, assisted living at $4,500/month, and memory care at $5,800/month. These costs cover housing, meals, activities, utilities, housekeeping, and care services.",
      },
      {
        heading: "Insurance & Medicare",
        content: "Medicare typically does not cover long-term senior living costs but may cover short-term skilled nursing after a qualifying hospital stay. Medicaid may cover some assisted living and memory care costs through waiver programs, depending on your state. Long-term care insurance policies often cover a significant portion of assisted living and memory care expenses. Contact your insurance provider or our financial counselor for specifics.",
      },
      {
        heading: "Veterans Benefits",
        content: "The VA Aid and Attendance benefit can provide up to $2,431/month for qualifying veterans or surviving spouses to help cover senior living costs. Eligibility is based on service history, age or disability, and financial need. Our team can help connect you with VA benefit specialists to explore your options.",
      },
      {
        heading: "Additional Financial Resources",
        content: "Other options include bridge loans, life insurance conversions, home equity, reverse mortgages, and state-specific assistance programs. Many families combine multiple funding sources to cover costs. Our financial counselors offer free consultations to help you create a personalized funding plan.",
      },
    ],
  },
];
