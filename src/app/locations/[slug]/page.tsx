import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFacility, listFacilities } from "@/lib/facilities/loader";
import { sampleFacilities } from "@/data/facilities";
import type { Facility } from "@/types/Facility";
import { FacilityHours } from "@/components/facility/FacilityHours";
import { FacilityFeatures } from "@/components/facility/FacilityFeatures";
import { FacilityContactInfo } from "@/components/facility/FacilityContactInfo";
import { FacilityGallery } from "@/components/facility/FacilityGallery";
import { CTABanner } from "@/components/content/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type Params = { slug: string };
type Props = { params: Promise<Params> };

async function loadFacility(slug: string): Promise<Facility | null> {
  const live = await getFacility(slug);
  if (live) return live;
  return sampleFacilities.find((f) => f.slug === slug) ?? null;
}

export async function generateStaticParams(): Promise<Params[]> {
  const live = await listFacilities();
  if (live.length > 0) return live.map((f) => ({ slug: f.slug }));
  if (sampleFacilities.length > 0) return sampleFacilities.map((f) => ({ slug: f.slug }));
  return [{ slug: "_placeholder" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "_placeholder") return { title: "Location" };
  const facility = await loadFacility(slug);
  if (!facility) return { title: "Location not found" };
  return {
    title: `${facility.name} — ${facility.address.city}, ${facility.address.state}`,
    description: `Self-storage at ${facility.address.line1}, ${facility.address.city}.${
      facility.phone ? ` Call ${facility.phone}.` : ""
    }`,
  };
}

const SAMPLE_GALLERY = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", alt: "Storage facility exterior" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Storage unit interior" },
  { src: "https://images.unsplash.com/photo-1594819047050-99defe213a55?w=1200&q=80", alt: "Drive-up storage units" },
];

export default async function FacilityDetailPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_placeholder") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Locations</h1>
        <p className="mt-4 text-zinc-600">
          No locations are configured yet. Once your facility data is loaded, location pages
          will appear here.
        </p>
      </main>
    );
  }
  const facility = await loadFacility(slug);
  if (!facility) notFound();

  const features = facility.amenities.map((name) => ({ name }));

  return (
    <>
      <section
        data-nocms-component="facility-header"
        className="bg-surface py-10 lg:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Locations", href: "/locations" }, { label: facility.name }]}
            className="mb-6"
          />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1
                data-role="heading"
                className="font-heading text-4xl lg:text-5xl font-bold text-text leading-tight"
              >
                {facility.name}
              </h1>
              <p data-role="subheading" className="mt-3 text-lg text-muted">
                {facility.address.city}, {facility.address.state}
              </p>
            </div>
            <a
              href={`/locations/${facility.slug}/unit-groups`}
              data-role="cta"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold px-6 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
            >
              See available units
            </a>
          </div>
          <div className="mt-6">
            <FacilityContactInfo facility={facility} />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FacilityGallery
            images={SAMPLE_GALLERY}
            facilityName={facility.name}
            heading="Inside the facility"
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {features.length > 0 && (
                <FacilityFeatures
                  features={features}
                  content={"## Facility features"}
                />
              )}
            </div>
            <div>
              <FacilityHours hours={facility.hours} />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Reserve a unit at ${facility.name}`}
        subheading="Lock in today's rate online — no payment due now."
        primaryCta={{ label: "See available units", href: `/locations/${facility.slug}/unit-groups` }}
        phone={facility.phone ?? undefined}
      />
    </>
  );
}
