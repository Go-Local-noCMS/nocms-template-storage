export interface Community {
  name: string;
  city: string;
  state: string;
  phone: string;
  careTypes: string[];
  image: string;
  description: string;
}

export const communities: Community[] = [
  {
    name: "Riverside Campus",
    city: "Portland",
    state: "OR",
    phone: "(503) 555-0100",
    careTypes: ["independent-living", "assisted-living", "memory-care"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    description: "Our flagship community nestled along the Willamette River, featuring 150 apartments, lush gardens, and a full continuum of care.",
  },
  {
    name: "Mountain View",
    city: "Bend",
    state: "OR",
    phone: "(541) 555-0200",
    careTypes: ["independent-living", "assisted-living"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    description: "A boutique community surrounded by the Cascade Mountains, offering an active lifestyle with panoramic views and outdoor recreation.",
  },
  {
    name: "Garden Terrace",
    city: "Seattle",
    state: "WA",
    phone: "(206) 555-0300",
    careTypes: ["assisted-living", "memory-care"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    description: "A specialized care community in the heart of Capitol Hill, known for its memory care excellence and urban walkability.",
  },
  {
    name: "Lakewood Estates",
    city: "Lake Oswego",
    state: "OR",
    phone: "(503) 555-0400",
    careTypes: ["independent-living", "respite-care"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    description: "A vibrant independent living community on the shores of Oswego Lake, perfect for active adults who love waterfront living.",
  },
];
