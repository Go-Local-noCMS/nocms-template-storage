import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFacility, listFacilities } from "@/lib/facilities/loader";
import { sampleFacilities } from "@/data/facilities";
import { ReservationForm } from "@/components/storage/ReservationForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Facility } from "@/types/Facility";

type Params = { slug: string; unitGroupUuid: string };
type Props = { params: Promise<Params> };

async function loadFacility(slug: string): Promise<Facility | null> {
  const live = await getFacility(slug);
  if (live) return live;
  return sampleFacilities.find((f) => f.slug === slug) ?? null;
}

/**
 * Reserve page is per-facility-per-unit-group. With `output: "export"` we must
 * pre-render every combination at build time. Until real unit inventory is
 * loaded, we emit a placeholder per-facility route so the build succeeds.
 */
export async function generateStaticParams(): Promise<Params[]> {
  const live = await listFacilities();
  if (live.length > 0) {
    return live.map((f) => ({ slug: f.slug, unitGroupUuid: "_placeholder" }));
  }
  if (sampleFacilities.length > 0) {
    return sampleFacilities.map((f) => ({
      slug: f.slug,
      unitGroupUuid: "_placeholder",
    }));
  }
  return [{ slug: "_placeholder", unitGroupUuid: "_placeholder" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "_placeholder") return { title: "Reserve" };
  const facility = await loadFacility(slug);
  if (!facility) return { title: "Reserve" };
  return {
    title: `Reserve at ${facility.name}`,
    description: `Reserve your storage unit at ${facility.name} in ${facility.address.city}, ${facility.address.state}.`,
    robots: { index: false, follow: true },
  };
}

export default async function ReservePage({ params }: Props) {
  const { slug, unitGroupUuid } = await params;

  if (slug === "_placeholder" || unitGroupUuid === "_placeholder") {
    return (
      <section
        data-nocms-component="reserve-placeholder"
        className="mx-auto max-w-2xl px-6 py-16"
      >
        <h1
          data-role="heading"
          className="font-heading text-3xl font-bold text-text"
        >
          Start your reservation
        </h1>
        <p data-role="subheading" className="mt-4 text-muted">
          Pick a unit on a location&apos;s available-units page to begin.
        </p>
      </section>
    );
  }

  const facility = await loadFacility(slug);
  if (!facility) notFound();

  return (
    <>
      <section
        data-nocms-component="reserve-header"
        className="bg-surface py-10 lg:py-12"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations" },
              { label: facility.name, href: `/locations/${facility.slug}` },
              { label: "Available units", href: `/locations/${facility.slug}/unit-groups` },
              { label: "Reserve" },
            ]}
            className="mb-6"
          />
          <h1
            data-role="heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text"
          >
            Reserve your unit
          </h1>
          <p data-role="subheading" className="mt-2 text-muted">
            At <strong>{facility.name}</strong> ({facility.address.city},{" "}
            {facility.address.state}). No payment due now — we&apos;ll hold the unit while you
            finish move-in.
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ReservationForm
            facilityUuid={facility.id}
            unitGroupUuid={unitGroupUuid}
          />
        </div>
      </section>
    </>
  );
}
