import { Heart, Shield, Users, Star, Clock, Award, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { StatsBar } from "@/components/content/StatsBar";
import { TeamGrid } from "@/components/content/TeamGrid";
import { CTABanner } from "@/components/content/CTABanner";
import { teamMembers } from "@/data/team";
import skinConfig from "@/skin.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Senior Living",
  description: "Learn about our mission, values, history, and the dedicated team behind our senior living community.",
};

const values = [
  { icon: Heart, title: "Compassion", description: "Every interaction is guided by empathy, kindness, and a genuine desire to improve lives." },
  { icon: Shield, title: "Integrity", description: "We do what is right — for our residents, their families, and our team — even when no one is watching." },
  { icon: Users, title: "Community", description: "We foster belonging and meaningful connections between residents, families, and staff." },
  { icon: Star, title: "Excellence", description: "We pursue the highest standards in care, services, and programming every single day." },
  { icon: Clock, title: "Dignity", description: "We honor each resident's individuality, preferences, history, and right to make choices." },
  { icon: Award, title: "Innovation", description: "We embrace new approaches to senior care and continuously improve our programs." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="simple"
        title="About Our Community"
        subtitle="For over 20 years, we have been creating a place where seniors do not just live — they thrive."
      />

      {/* Mission */}
      <SectionWrapper bg="background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-6">Our Mission</h2>
          <p className="text-lg text-muted leading-relaxed">
            To create vibrant, compassionate communities where older adults enjoy a fulfilling lifestyle,
            receive exceptional care, and are treated with the dignity and respect they deserve. We believe
            every senior deserves a place that feels like home — and a life that feels rich, connected, and purposeful.
          </p>
        </div>
      </SectionWrapper>

      <Divider />

      {/* Values Grid */}
      <SectionWrapper bg="surface">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-background rounded-xl p-8 border border-text/5 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <value.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-text mb-2">{value.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* History */}
      <SectionWrapper bg="background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text text-center mb-10">Our Story</h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Founded over two decades ago by a family who saw a need for better senior care in the community,
              {" "}{skinConfig.brandName} has grown from a single residence to a network of communities serving
              hundreds of families across the region.
            </p>
            <p>
              Our founders believed that aging should not mean giving up the things that make life meaningful —
              friendships, activities, independence, and joy. That belief remains at the heart of everything we do,
              from the programs we design to the staff we hire to the communities we build.
            </p>
            <p>
              Today, we are proud to be recognized as a leader in senior living, with industry-leading satisfaction
              scores, award-winning care programs, and a team of dedicated professionals who treat every resident
              like family.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <StatsBar />

      {/* Team Preview */}
      <TeamGrid
        members={teamMembers.slice(0, 4).map((m) => ({
          name: m.name,
          title: m.title,
          bio: m.bio,
          image: m.photo,
        }))}
        heading="Our Leadership"
      />

      <SectionWrapper bg="background">
        <div className="text-center">
          <a
            href="/about/our-team"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Meet the Full Team <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Come See for Yourself"
        description="Schedule a tour and discover what makes our community special."
        phone={skinConfig.phone}
      />
    </>
  );
}
