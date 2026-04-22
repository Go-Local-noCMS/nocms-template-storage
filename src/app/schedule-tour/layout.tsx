import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Tour | Senior Living",
  description: "Book a personal tour of our senior living community. See our apartments, amenities, and meet our team.",
};

export default function ScheduleTourLayout({ children }: { children: React.ReactNode }) {
  return children;
}
