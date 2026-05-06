import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFacility, listFacilities } from "@/lib/facilities/loader";
import { ReservationForm } from "@/components/storage/ReservationForm";

type Params = { slug: string; unitGroupUuid: string };
type Props = { params: Promise<Params> };

/**
 * Reserve page is per-facility-per-unit-group. With `output: "export"` static
 * export we must pre-render every combination at build time. Until real unit
 * inventory is loaded for a facility, we emit a placeholder route so the build
 * succeeds. Production scaffolds either drop `output: "export"` or back-fill
 * unit-group params from FMS data.
 */
export async function generateStaticParams(): Promise<Params[]> {
  const facilities = await listFacilities();
  if (facilities.length === 0) {
    return [{ slug: "_placeholder", unitGroupUuid: "_placeholder" }];
  }
  return facilities.map((f) => ({
    slug: f.slug,
    unitGroupUuid: "_placeholder",
  }));
}

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
  if (slug === "_placeholder" || unitGroupUuid === "_placeholder") {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Reservation</h1>
        <p className="mt-4 text-zinc-600">
          Pick a unit on a location page to start a reservation.
        </p>
      </main>
    );
  }
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
          facilityUuid={facility.id}
          unitGroupUuid={unitGroupUuid}
        />
      </div>
    </main>
  );
}
