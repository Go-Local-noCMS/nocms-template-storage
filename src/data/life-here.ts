export interface LifeHereHighlight {
  heading: string;
  content: string;
  image?: string;
}

export interface LifeHereSection {
  slug: string;
  name: string;
  tag: string;
  description: string;
  heroImage: string;
  highlights: LifeHereHighlight[];
  features: string[];
}

export const lifeHereSections: LifeHereSection[] = [
  {
    slug: "activities",
    name: "Activities & Events",
    tag: "Stay Active",
    description: "From fitness classes and art workshops to live music and educational lectures, there is something for everyone every day.",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80",
    highlights: [
      {
        heading: "Fitness & Wellness",
        content: "Stay active with daily fitness classes tailored to all ability levels. Our wellness center features a heated pool, modern gym equipment, yoga studio, and walking paths through landscaped gardens. Personal trainers are available for one-on-one sessions.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      },
      {
        heading: "Arts & Creative Expression",
        content: "Explore your creative side in our dedicated art studio with painting, pottery, and crafting sessions led by local artists. Our residents have exhibited work in community galleries and participate in collaborative art projects throughout the year.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      },
      {
        heading: "Social Events & Entertainment",
        content: "From live jazz concerts and movie nights to themed dinner parties and holiday celebrations, our social calendar keeps every week exciting. Resident-led clubs include book groups, gardening, bridge, and a travel discussion circle.",
        image: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=800&q=80",
      },
      {
        heading: "Educational Programs",
        content: "Lifelong learning is a cornerstone of life here. We host guest lecturers, university partnerships, technology classes, and language conversation groups. Our library is stocked with the latest titles and offers quiet reading spaces.",
      },
    ],
    features: [
      "200+ monthly activities",
      "Heated pool & fitness center",
      "Art studio with supplies",
      "Library & reading room",
      "Movie theater",
      "Live entertainment weekly",
      "Gardening club & greenhouse",
      "Walking & nature trails",
    ],
  },
  {
    slug: "dining",
    name: "Dining & Nutrition",
    tag: "Culinary Excellence",
    description: "Chef-prepared meals with restaurant-style service, accommodating every dietary need with fresh, locally sourced ingredients.",
    heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80",
    highlights: [
      {
        heading: "Restaurant-Style Dining",
        content: "Our main dining room offers a warm, elegant atmosphere with table service for breakfast, lunch, and dinner. Menus change daily and feature seasonal ingredients sourced from local farms and purveyors. Residents choose from multiple entree options at each meal.",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
      },
      {
        heading: "Special Dietary Accommodations",
        content: "Our registered dietitian works with the culinary team to accommodate every dietary need — from diabetic-friendly and heart-healthy to vegetarian, gluten-free, and cultural preferences. Personalized meal plans ensure nutrition goals are met with delicious results.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      },
      {
        heading: "Bistro & Casual Options",
        content: "Beyond the main dining room, our community bistro offers light fare, fresh coffee, smoothies, and snacks throughout the day. It is a favorite gathering spot for catching up with neighbors or enjoying a quiet afternoon with a book.",
      },
      {
        heading: "Special Events & Celebrations",
        content: "Monthly themed dinners, holiday feasts, family dining nights, and cooking demonstrations bring residents and families together. Our private dining room is available for birthdays, anniversaries, and intimate family gatherings.",
      },
    ],
    features: [
      "Three chef-prepared meals daily",
      "Locally sourced ingredients",
      "Registered dietitian on staff",
      "Multiple dietary accommodations",
      "All-day bistro & coffee bar",
      "Private dining room available",
      "Monthly themed dinner events",
      "Room service when needed",
    ],
  },
  {
    slug: "amenities",
    name: "Amenities & Services",
    tag: "Everything You Need",
    description: "From salon services and a heated pool to concierge assistance and beautifully landscaped grounds — everything is under one roof.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    highlights: [
      {
        heading: "Wellness & Spa",
        content: "Our on-site salon and spa offers haircuts, styling, manicures, pedicures, and relaxation treatments. The heated swimming pool and hot tub provide year-round aquatic exercise and relaxation opportunities.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      },
      {
        heading: "Beautiful Grounds & Gardens",
        content: "Enjoy walking paths through meticulously maintained gardens, a resident greenhouse for gardening enthusiasts, covered patios with seating areas, and scenic views that change beautifully with every season.",
        image: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=800&q=80",
      },
      {
        heading: "Convenience Services",
        content: "Our concierge team handles transportation to medical appointments, shopping trips, and outings. Weekly housekeeping, laundry service, and on-site maintenance mean you never have to worry about the little things.",
      },
      {
        heading: "Technology & Connectivity",
        content: "Community-wide Wi-Fi, a computer center with tech support, video calling stations for staying connected with family, and an emergency response system in every apartment keep you connected and safe.",
      },
    ],
    features: [
      "On-site salon & spa",
      "Heated pool & hot tub",
      "Landscaped walking paths",
      "Resident greenhouse",
      "Concierge & transportation",
      "Weekly housekeeping",
      "Community-wide Wi-Fi",
      "24/7 emergency response",
    ],
  },
];
