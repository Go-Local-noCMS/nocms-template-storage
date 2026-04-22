import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TeamGrid } from "@/components/content/TeamGrid";
import { CTABanner } from "@/components/content/CTABanner";
import { teamMembers } from "@/data/team";
import skinConfig from "@/skin.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Senior Living",
  description: "Meet the compassionate, experienced professionals who make our senior living community exceptional.",
};

export default function OurTeamPage() {
  const mapped = teamMembers.map((m) => ({
    name: m.name,
    title: m.title,
    bio: m.bio,
    image: m.photo,
  }));

  return (
    <>
      <PageHero
        variant="simple"
        title="Meet Our Team"
        subtitle="Compassionate professionals dedicated to making every day exceptional for our residents."
      />

      <TeamGrid members={mapped} columns={3} heading="Leadership & Care Team" />

      {/* Credentials section */}
      <SectionWrapper bg="surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-text mb-6">Credentials & Training</h2>
          <p className="text-muted leading-relaxed mb-8">
            Our team holds industry-leading certifications and participates in ongoing training programs to
            ensure the highest quality of care. Key credentials across our staff include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            {teamMembers
              .filter((m) => m.credentials)
              .map((m) => (
                <div key={m.name} className="bg-background rounded-lg p-4 border border-text/5">
                  <p className="font-semibold text-text text-sm">{m.name}</p>
                  <p className="text-muted text-xs mt-1">{m.credentials}</p>
                </div>
              ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Join Our Team"
        description="We are always looking for compassionate individuals who share our mission of exceptional senior care."
        primaryCta={{ label: "View Open Positions", href: "/contact" }}
        phone={skinConfig.phone}
      />
    </>
  );
}
