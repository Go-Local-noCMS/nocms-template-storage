import type { Metadata } from "next";
import { listFacilities } from "@/lib/facilities/loader";
import { sampleFacilityIndex } from "@/data/facilities";
import { FacilityCards } from "@/components/facility/FacilityCards";
import { CTABanner } from "@/components/content/CTABanner";
import skinConfig from "@/skin.config";

export const metadata: Metadata = {
  title: `Locations | ${skinConfig.brandName}`,
  description: `Find a ${skinConfig.brandName} self-storage location near you.`,
};

export default async function LocationsIndexPage() {
  const live = await listFacilities();
  const facilities = live.length > 0 ? live : sampleFacilityIndex;
  const states = new Set(facilities.map((f) => f.state));
  const groupByState = facilities.length > 6 && states.size >= 2;

  return (
    <>
      <section
        data-nocms-component="locations-hero"
        className="bg-primary py-16 lg:py-20 text-center text-white"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1
            data-role="heading"
            className="font-heading text-4xl sm:text-5xl font-bold leading-tight"
          >
            Our locations
          </h1>
          <p data-role="subheading" className="mt-4 text-lg text-white/85">
            {facilities.length} {facilities.length === 1 ? "facility" : "facilities"} ready to store your stuff.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {groupByState ? (
            <div className="space-y-12">
              {Array.from(states)
                .sort()
                .map((state) => {
                  const inState = facilities.filter((f) => f.state === state);
                  return (
                    <FacilityCards
                      key={state}
                      heading={state}
                      facilities={inState}
                    />
                  );
                })}
            </div>
          ) : (
            <FacilityCards facilities={facilities} />
          )}
        </div>
      </section>

      <CTABanner
        heading="Don't see a location near you?"
        subheading="Call us — we may have an opening at a nearby facility, or we can recommend partners."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        phone={skinConfig.contactPhone}
      />
    </>
  );
}
