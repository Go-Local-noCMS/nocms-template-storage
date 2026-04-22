export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is the difference between independent living and assisted living?",
    answer: "Independent living is designed for active seniors who want a maintenance-free lifestyle with social activities and amenities. Assisted living provides additional daily support such as medication management, bathing, dressing, and meal preparation for those who need help with activities of daily living.",
    category: "General",
  },
  {
    question: "Can my loved one transition between care levels?",
    answer: "Absolutely. Our community offers a continuum of care, allowing residents to transition seamlessly between independent living, assisted living, and memory care as needs evolve. Our care team conducts regular assessments and works with families to adjust care plans proactively.",
    category: "General",
  },
  {
    question: "Are pets allowed in the community?",
    answer: "Yes! We are a pet-friendly community. We know that pets are family. We welcome cats and dogs with some size and breed considerations. Our grounds include pet-friendly walking paths and a designated pet relief area.",
    category: "General",
  },
  {
    question: "How much does senior living cost?",
    answer: "Costs vary based on the level of care, room type, and services needed. Independent living starts around $3,200/month, assisted living from $4,500/month, and memory care from $5,800/month. We offer transparent pricing with no hidden fees.",
    category: "Costs & Financial",
  },
  {
    question: "Does insurance or Medicare cover senior living costs?",
    answer: "Medicare generally does not cover long-term senior living costs. However, Medicaid may cover some assisted living expenses depending on your state. Long-term care insurance, VA benefits, and bridge loans are other options. Our financial counselors can help you explore all available resources.",
    category: "Costs & Financial",
  },
  {
    question: "Are there financial assistance programs available?",
    answer: "Yes, several programs may help offset costs including Medicaid waivers, Veterans Aid and Attendance benefits, long-term care insurance, and state-specific assistance programs. We also offer flexible payment plans. Our team will help identify programs you may qualify for.",
    category: "Costs & Financial",
  },
  {
    question: "What does a typical day look like for residents?",
    answer: "Every day is different and tailored to personal preferences. A typical day might include a morning fitness class, a chef-prepared breakfast, a group activity or outing, lunch with friends, an afternoon art workshop or lecture, dinner, and an evening social or entertainment event. Residents are free to participate as much or as little as they choose.",
    category: "Daily Life",
  },
  {
    question: "What activities and amenities are available?",
    answer: "We offer 200+ monthly activities including fitness classes, art workshops, live entertainment, educational lectures, gardening, book clubs, game nights, and excursions. Amenities include a fitness center, heated pool, salon and spa, library, theater room, art studio, and beautifully landscaped grounds.",
    category: "Daily Life",
  },
  {
    question: "What dining options are available?",
    answer: "Our award-winning dining program features three chef-prepared meals daily plus snacks. We accommodate dietary restrictions, allergies, and preferences including vegetarian, low-sodium, diabetic-friendly, and heart-healthy options. Our dining room offers restaurant-style service in a welcoming atmosphere.",
    category: "Daily Life",
  },
  {
    question: "Can I tour the community before making a decision?",
    answer: "Absolutely! We welcome and encourage tours seven days a week. During your visit, you will meet our staff, tour available floor plans, enjoy a complimentary meal, observe activities in action, and get a genuine feel for life in our community. Virtual tours are also available.",
    category: "Moving In",
  },
  {
    question: "What should I bring when moving in?",
    answer: "We encourage residents to bring personal furnishings, photos, and meaningful items to make their apartment feel like home. Apartments come with basic furnishings, but most families prefer to personalize the space. Our move-in coordinator will help plan every detail.",
    category: "Moving In",
  },
  {
    question: "How quickly can my loved one move in?",
    answer: "In most cases, we can accommodate a move-in within one to two weeks after completing the application and assessment. Emergency or urgent placements may be available even sooner. Our admissions team works closely with families to make the transition as smooth as possible.",
    category: "Moving In",
  },
];
