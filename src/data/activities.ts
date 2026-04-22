export interface Activity {
  name: string;
  category: string;
  image: string;
  description: string;
  schedule?: string;
}

export const activities: Activity[] = [
  {
    name: "Morning Yoga & Stretch",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    description: "Gentle yoga and stretching classes designed for all ability levels. Improve flexibility, balance, and mindfulness in a supportive group setting.",
    schedule: "Monday, Wednesday, Friday — 9:00 AM",
  },
  {
    name: "Book Club",
    category: "Social",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    description: "Join fellow book lovers for lively discussions of fiction and nonfiction titles chosen by members each month. Light refreshments provided.",
    schedule: "Every other Thursday — 2:00 PM",
  },
  {
    name: "Garden Club",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    description: "Tend our community gardens and greenhouse year-round. Plant seasonal flowers, grow vegetables, and learn from guest horticulturalists.",
    schedule: "Tuesday & Saturday — 10:00 AM",
  },
  {
    name: "Art Studio Open Hours",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    description: "Explore painting, watercolors, pottery, and mixed media in our fully equipped art studio. Guided classes and open studio time available.",
    schedule: "Daily — 1:00 PM to 4:00 PM",
  },
  {
    name: "Game Nights",
    category: "Social",
    image: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=600&q=80",
    description: "Classic card games, board games, trivia, bingo, and more. A favorite evening tradition that brings neighbors together for laughs and friendly competition.",
    schedule: "Wednesday & Friday — 7:00 PM",
  },
  {
    name: "Live Music & Performances",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    description: "Enjoy live concerts, jazz ensembles, solo performers, and seasonal shows. Our theater hosts weekly entertainment that ranges from classical music to comedy acts.",
    schedule: "Saturday — 3:00 PM",
  },
];
