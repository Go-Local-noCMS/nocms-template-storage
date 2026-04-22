import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { PhotoGrid } from "@/components/content/PhotoGrid";
import { CTABanner } from "@/components/content/CTABanner";
import { activities } from "@/data/activities";
import { lifeHereSections } from "@/data/life-here";
import { ArrowRight, Clock } from "lucide-react";
import skinConfig from "@/skin.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Here | Senior Living",
  description: "Discover the vibrant lifestyle, activities, dining, and amenities that make our senior living community special.",
};

const typicalDay = [
  { time: "7:00 AM", activity: "Early risers coffee & newspaper" },
  { time: "8:00 AM", activity: "Breakfast in the dining room" },
  { time: "9:00 AM", activity: "Morning fitness class or yoga" },
  { time: "10:30 AM", activity: "Group activity or outing" },
  { time: "12:00 PM", activity: "Lunch with friends" },
  { time: "1:30 PM", activity: "Art studio, book club, or garden" },
  { time: "3:00 PM", activity: "Afternoon social or entertainment" },
  { time: "5:30 PM", activity: "Dinner service" },
  { time: "7:00 PM", activity: "Movie night, games, or relaxation" },
];

export default function LifeHerePage() {
  return (
    <>
      <PageHero
        variant="simple"
        title="Life Here"
        subtitle="Every day is an opportunity for connection, growth, and joy. Discover the vibrant lifestyle waiting for you."
      />

      {/* Section Links */}
      <SectionWrapper bg="background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {lifeHereSections.map((section) => (
            <a
              key={section.slug}
              href={`/life-here/${section.slug}`}
              className="group relative rounded-xl overflow-hidden h-[320px] block shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={section.heroImage}
                alt={section.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-text/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-[1]">
                <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">{section.tag}</span>
                <h3 className="font-heading text-xl font-bold text-white mt-1 mb-2">{section.name}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{section.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white mt-3 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </SectionWrapper>

      {/* Activity Cards */}
      <SectionWrapper bg="surface">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text text-center mb-12">
          Popular Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((activity) => (
            <div key={activity.name} className="bg-background rounded-xl overflow-hidden border border-text/5 hover:shadow-md transition-shadow">
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{activity.category}</span>
                <h3 className="font-heading text-lg font-bold text-text mt-1 mb-2">{activity.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-3">{activity.description}</p>
                {activity.schedule && (
                  <p className="text-xs text-muted flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {activity.schedule}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Divider />

      {/* Typical Day Timeline */}
      <SectionWrapper bg="background">
        <h2 className="font-heading text-3xl font-bold text-text text-center mb-12">
          A Typical Day
        </h2>
        <div className="max-w-xl mx-auto space-y-0">
          {typicalDay.map((item, i) => (
            <div key={item.time} className="flex items-start gap-6 py-4">
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-primary shrink-0" />
                {i < typicalDay.length - 1 && <div className="w-px h-full bg-text/10 mt-1" />}
              </div>
              <div className="flex-1 pb-4">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">{item.time}</p>
                <p className="text-text text-sm mt-1">{item.activity}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <PhotoGrid />

      <CTABanner
        heading="Experience Life Here for Yourself"
        description="Schedule a tour and see why our residents say every day feels like home."
        phone={skinConfig.phone}
      />
    </>
  );
}
