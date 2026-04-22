export interface TeamMember {
  name: string;
  title: string;
  photo: string;
  bio: string;
  credentials?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "James Whitfield",
    title: "Executive Director",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Former hospital administrator passionate about creating communities where seniors thrive. James oversees all operations and resident experience, bringing 25 years of senior living leadership.",
    credentials: "MBA, Licensed Nursing Home Administrator",
  },
  {
    name: "Dr. Patricia Hernandez",
    title: "Medical Director",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    bio: "Board-certified geriatrician with 20+ years of experience in senior care. Dr. Hernandez leads our clinical programs, quality assurance, and staff training initiatives.",
    credentials: "MD, Board Certified Geriatrician",
  },
  {
    name: "Angela Moretti",
    title: "Director of Nursing",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    bio: "Registered nurse with expertise in memory care and chronic condition management. Angela ensures every resident receives compassionate, personalized care around the clock.",
    credentials: "RN, BSN, Certified Dementia Practitioner",
  },
  {
    name: "David Kim",
    title: "Life Enrichment Director",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Certified therapeutic recreation specialist who designs 200+ monthly activities promoting wellness, creativity, and social connection for residents of all ability levels.",
    credentials: "CTRS, Certified Activity Director",
  },
  {
    name: "Maria Gonzalez",
    title: "Director of Dining Services",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Culinary school graduate with a passion for senior nutrition. Maria leads our kitchen team in preparing restaurant-quality meals that accommodate dietary needs and delight the palate.",
    credentials: "Certified Dietary Manager",
  },
  {
    name: "Thomas Wright",
    title: "Director of Memory Care",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Specialized in Alzheimer's and dementia care for over 15 years. Thomas designs person-centered programs that promote dignity, engagement, and quality of life for memory care residents.",
    credentials: "MS Gerontology, Certified Dementia Practitioner",
  },
];
