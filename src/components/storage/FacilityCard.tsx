import Link from "next/link";
import type { FacilityIndexEntry } from "@/types/Facility";

/**
 * Facility card for the /locations index. Pure presentation — receives the
 * slim FacilityIndexEntry as a prop.
 */
export function FacilityCard({ facility }: { facility: FacilityIndexEntry }) {
  return (
    <Link
      href={`/locations/${facility.slug}`}
      className="group block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:outline-none"
    >
      <h3 className="text-lg font-semibold tracking-tight">{facility.name}</h3>
      <p className="mt-1 text-sm text-zinc-600">
        {facility.city}, {facility.state}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-zinc-900 group-hover:underline">
        View details →
      </span>
    </Link>
  );
}
