import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { PricingCards } from "@/components/content/PricingCards";
import { CTABanner } from "@/components/content/CTABanner";
import { pricingPlans } from "@/data/pricing";
import { Check, X, ArrowRight, DollarSign } from "lucide-react";
import skinConfig from "@/skin.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Floor Plans | Senior Living",
  description: "Transparent pricing for independent living, assisted living, and memory care. No hidden fees.",
};

const comparisonFeatures = [
  { feature: "Private apartment", independent: true, assisted: true, memory: true },
  { feature: "Three meals daily", independent: true, assisted: true, memory: true },
  { feature: "Housekeeping & laundry", independent: true, assisted: true, memory: true },
  { feature: "Activities & events", independent: true, assisted: true, memory: true },
  { feature: "Fitness center & pool", independent: true, assisted: true, memory: true },
  { feature: "Transportation", independent: true, assisted: true, memory: true },
  { feature: "Personalized care plan", independent: false, assisted: true, memory: true },
  { feature: "Medication management", independent: false, assisted: true, memory: true },
  { feature: "Daily living assistance", independent: false, assisted: true, memory: true },
  { feature: "Health monitoring", independent: false, assisted: true, memory: true },
  { feature: "Secured neighborhood", independent: false, assisted: false, memory: true },
  { feature: "Dementia specialists", independent: false, assisted: false, memory: true },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        variant="simple"
        title="Transparent, Honest Pricing"
        subtitle="No hidden fees. No surprises. Just straightforward pricing so you can plan with confidence."
      />

      <PricingCards
        plans={pricingPlans.map((p) => ({
          name: p.name,
          price: p.startingPrice,
          period: p.period,
          description: `Starting at ${p.startingPrice}${p.period}`,
          features: p.features,
          featured: p.featured,
          ctaText: p.ctaText,
          ctaHref: p.ctaHref,
        }))}
        heading="Choose the Right Plan"
        subtitle="All plans include our full suite of amenities, dining, and programming."
      />

      <Divider />

      {/* Comparison Table */}
      <SectionWrapper bg="surface">
        <h2 className="font-heading text-3xl font-bold text-text text-center mb-10">
          Compare Care Levels
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto text-sm">
            <thead>
              <tr className="border-b border-text/10">
                <th className="text-left py-4 pr-4 font-semibold text-text">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-text">Independent</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">Assisted</th>
                <th className="text-center py-4 px-4 font-semibold text-text">Memory Care</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row) => (
                <tr key={row.feature} className="border-b border-text/5">
                  <td className="py-3 pr-4 text-text">{row.feature}</td>
                  <td className="py-3 px-4 text-center">
                    {row.independent ? (
                      <Check className="h-5 w-5 text-primary mx-auto" aria-label="Included" />
                    ) : (
                      <X className="h-5 w-5 text-muted/30 mx-auto" aria-label="Not included" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.assisted ? (
                      <Check className="h-5 w-5 text-primary mx-auto" aria-label="Included" />
                    ) : (
                      <X className="h-5 w-5 text-muted/30 mx-auto" aria-label="Not included" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.memory ? (
                      <Check className="h-5 w-5 text-primary mx-auto" aria-label="Included" />
                    ) : (
                      <X className="h-5 w-5 text-muted/30 mx-auto" aria-label="Not included" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Financial Help Callout */}
      <SectionWrapper bg="background">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <DollarSign className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-text mb-4">Need Financial Assistance?</h2>
          <p className="text-muted leading-relaxed mb-8">
            We offer resources on Medicaid, VA benefits, long-term care insurance, and other assistance programs
            to help make senior living affordable. Our financial counselors provide free consultations.
          </p>
          <a
            href="/resources/financial-help"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore Financial Resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Get a Personalized Quote"
        description="Every family's situation is unique. Contact us for a customized pricing plan tailored to your needs."
        primaryCta={{ label: "Request Quote", href: "/contact" }}
        phone={skinConfig.phone}
      />
    </>
  );
}
