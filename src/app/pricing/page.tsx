import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { CTABanner } from "@/components/content/CTABanner";
import { unitSizes } from "@/data/unit-sizes";
import skinConfig from "@/skin.config";

export const metadata: Metadata = {
  title: `Pricing | ${skinConfig.brandName}`,
  description: `Transparent pricing for self-storage at ${skinConfig.brandName}. Month-to-month, no hidden fees.`,
};

export default function PricingPage() {
  return (
    <>
      <section
        data-nocms-component="pricing-hero"
        className="bg-primary py-16 lg:py-20 text-center text-white"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1
            data-role="heading"
            className="font-heading text-4xl sm:text-5xl font-bold leading-tight"
          >
            Honest, monthly pricing
          </h1>
          <p data-role="subheading" className="mt-4 text-lg text-white/85">
            Month-to-month leases. No long-term commitment. No hidden fees.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-text text-center mb-4">
            Sizes and starting prices
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            Starting prices vary by location and availability. Reserve online to lock in
            today&apos;s rate at the location nearest you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitSizes.map((size) => (
              <article
                key={size.id}
                className="bg-surface rounded-xl border border-text/10 p-6 flex flex-col"
              >
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-heading text-2xl font-bold text-text">
                    {size.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {size.sqft} sq ft
                  </span>
                </div>
                <p className="text-sm text-muted mb-4">{size.comparison}</p>
                <p className="text-sm text-text leading-relaxed mb-6">
                  {size.description}
                </p>
                {size.startingPrice && (
                  <p className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Starting at
                    </span>
                    <br />
                    <span className="font-heading text-3xl font-bold text-primary">
                      ${size.startingPrice}
                    </span>
                    <span className="text-sm text-muted"> / mo</span>
                  </p>
                )}
                <ul className="text-sm text-text space-y-1 mb-6">
                  {size.itemsThatFit.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/reserve-online"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                >
                  Reserve a {size.name}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-text mb-4">
            What&apos;s included
          </h2>
          <ul className="text-text leading-relaxed space-y-2">
            <li>Month-to-month rentals — cancel any time with 10 days&apos; notice.</li>
            <li>24/7 surveillance and gated access at every location.</li>
            <li>Online bill pay, autopay, and account access.</li>
            <li>No setup or admin fees beyond the first month and a small lock fee.</li>
          </ul>
        </div>
      </section>

      <CTABanner
        heading="Ready to reserve?"
        subheading="Lock in today's rate online — no payment due now."
        primaryCta={{ label: "Reserve online", href: "/reserve-online" }}
        phone={skinConfig.contactPhone}
      />
    </>
  );
}
