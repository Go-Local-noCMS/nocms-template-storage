import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFacility, listFacilities } from "@/lib/facilities/loader";
import { ReservationForm } from "@/components/storage/ReservationForm";

type Params = { slug: string; unitGroupUuid: string };
type Props = { params: Promise<Params> };

/**
 * Reserve page is per-facility-per-unit-group. We pre-render the facility
 * dimension at build time (we know the facilities); the unitGroupUuid dimension
 * is rendered on-demand because units come and go and pre-rendering every
 * combination is wasteful.
 */
export async function generateStaticParams(): Promise<Pick<Params, "slug">[]> {
  const facilities = await listFacilities();
  return facilities.map((f) => ({ slug: f.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const facility = await getFacility(slug);
  if (!facility) return { title: "Reserve" };
  return {
    title: `Reserve at ${facility.name}`,
    description: `Reserve your storage unit at ${facility.name} in ${facility.address.city}, ${facility.address.state}.`,
    robots: { index: false, follow: true },
  };
}

export default async function ReservePage({ params }: Props) {
  const { slug, unitGroupUuid } = await params;
  const facility = await getFacility(slug);
  if (!facility) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Reserve your unit</h1>
      <p className="mt-2 text-zinc-600">
        At <strong>{facility.name}</strong> ({facility.address.city}, {facility.address.state})
      </p>
      <p className="mt-1 text-sm text-zinc-500">
        We&apos;ll hold the unit while you complete move-in. No payment due now.
      </p>

      <div className="mt-8">
        <ReservationForm
          fms={facility.fms}
          facilityUuid={facility.id}
          unitGroupUuid={unitGroupUuid}
        />
      </div>
    </main>
  );
}
