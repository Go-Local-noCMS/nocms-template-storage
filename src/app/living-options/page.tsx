import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { CareCards } from "@/components/content/CareCards";
import { CTABanner } from "@/components/content/CTABanner";
import { careTypes } from "@/data/care-types";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import skinConfig from "@/skin.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Options | Senior Living",
  description: "Explore our full range of senior living options including independent living, assisted living, memory care, and respite care.",
};

const comparisonRows = [
  { feature: "Best for", independent: "Active, self-sufficient seniors", assisted: "Seniors needing daily support", memory: "Those with Alzheimer's/dementia", respite: "Short-term needs" },
  { feature: "Starting price", independent: "$3,200/mo", assisted: "$4,500/mo", memory: "$5,800/mo", respite: "$250/day" },
  { feature: "Meals included", independent: "3 daily", assisted: "3 daily", memory: "3 daily + snacks", respite: "3 daily" },
  { feature: "Care staff", independent: "On-call", assisted: "24-hour", memory: "24-hour specialized", respite: "24-hour" },
  { feature: "Activities", independent: "200+/month", assisted: "200+/month", memory: "Specialized programs", respite: "Full access" },
];

export default function LivingOptionsPage() {
  return (
    <>
      <PageHero
        variant="simple"
        title="Find the Right Living Option"
        subtitle="Whether you value independence, need daily support, or require specialized care, we have a home for you."
      />

      <CareCards
        heading="Our Living Options"
        careTypes={careTypes.map((ct) => ({
          slug: ct.slug,
          tag: ct.tag,
          title: ct.name,
          description: ct.description,
          image: ct.image,
        }))}
      />

      <Divider />

      {/* Comparison Table */}
      <SectionWrapper bg="surface">
        <h2 className="font-heading text-3xl font-bold text-text text-center mb-10">
          Compare Living Options
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto text-sm">
            <thead>
              <tr className="border-b border-text/10">
                <th className="text-left py-4 pr-4 font-semibold text-text min-w-[140px]">Feature</th>
                <th className="text-center py-4 px-3 font-semibold text-text min-w-[120px]">Independent</th>
                <th className="text-center py-4 px-3 font-semibold text-primary min-w-[120px]">Assisted</th>
                <th className="text-center py-4 px-3 font-semibold text-text min-w-[120px]">Memory Care</th>
                <th className="text-center py-4 px-3 font-semibold text-text min-w-[120px]">Respite</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-text/5">
                  <td className="py-3 pr-4 font-medium text-text">{row.feature}</td>
                  <td className="py-3 px-3 text-center text-muted text-xs">{row.independent}</td>
                  <td className="py-3 px-3 text-center text-muted text-xs">{row.assisted}</td>
                  <td className="py-3 px-3 text-center text-muted text-xs">{row.memory}</td>
                  <td className="py-3 px-3 text-center text-muted text-xs">{row.respite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Not Sure CTA */}
      <SectionWrapper bg="background">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-text mb-4">Not Sure Which Option Is Right?</h2>
          <p className="text-muted leading-relaxed mb-8">
            That is completely normal. Our team can help assess your loved one's needs and recommend the best fit.
            Schedule a personal consultation — there is no obligation.
          </p>
          <a
            href="/schedule-tour"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Schedule a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="See Our Community in Person"
        description="Nothing compares to experiencing our community firsthand."
        phone={skinConfig.phone}
      />
    </>
  );
}
