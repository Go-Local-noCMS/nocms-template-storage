import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFacility, listFacilities } from "@/lib/facilities/loader";
import { getUnitGroups } from "@/lib/api/getUnitGroups";
import { UnitGroupCard } from "@/components/storage/UnitGroupCard";
import type { UnitGroup } from "@/types/UnitGroup";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export async function generateStaticParams(): Promise<Params[]> {
  const facilities = await listFacilities();
  return facilities.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const facility = await getFacility(slug);
  if (!facility) return { title: "Sizes not found" };
  return {
    title: `Available sizes — ${facility.name}`,
    description: `Reserve a storage unit at ${facility.name} in ${facility.address.city}, ${facility.address.state}.`,
  };
}

/** display_rules order: hide sold-out, group by unitType, hide vehicle/RV in self-storage. */
function applyDisplayRules(groups: UnitGroup[]): UnitGroup[] {
  return groups
    .filter((g) => g.availableUnitCount > 0)
    .filter((g) => !(g.types?.vehicleRv === true && g.types?.selfStorage !== true));
}

function groupByUnitType(groups: UnitGroup[]): Map<string, UnitGroup[]> {
  const out = new Map<string, UnitGroup[]>();
  for (const g of groups) {
    const list = out.get(g.unitType) ?? [];
    list.push(g);
    out.set(g.unitType, list);
  }
  return out;
}

export default async function UnitGroupsPage({ params }: Props) {
  const { slug } = await params;
  const facility = await getFacility(slug);
  if (!facility) notFound();

  let unitGroups: UnitGroup[];
  try {
    unitGroups = await getUnitGroups(facility.fms, facility.id);
  } catch (err) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Available sizes — {facility.name}</h1>
        <p role="alert" className="mt-4 text-red-700">
          We&apos;re having trouble loading availability right now. Please try again in a moment, or
          call {facility.phone ?? "us"} for help.
        </p>
        {process.env.NODE_ENV !== "production" && (
          <pre className="mt-4 whitespace-pre-wrap text-xs text-zinc-500">
            {(err as Error).message}
          </pre>
        )}
      </main>
    );
  }

  const visible = applyDisplayRules(unitGroups);

  if (visible.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Available sizes — {facility.name}</h1>
        <p className="mt-4 text-zinc-700">
          No units currently available at {facility.name}.{" "}
          {facility.phone && (
            <a href={`tel:${facility.phone.replace(/\s/g, "")}`} className="underline">
              Give us a call
            </a>
          )}{" "}
          and we&apos;ll let you know when something opens up.
        </p>
      </main>
    );
  }

  const grouped = groupByUnitType(visible);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Available sizes — {facility.name}</h1>
      <p className="mt-2 text-zinc-600">{facility.address.city}, {facility.address.state}</p>

      <div className="mt-10 space-y-12">
        {Array.from(grouped.entries()).map(([unitType, groups]) => (
          <section key={unitType} aria-labelledby={`type-${unitType}`}>
            <h2 id={`type-${unitType}`} className="text-xl font-semibold">{unitType}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groups.map((g) => (
                <li key={g.unitGroupUuid}>
                  <UnitGroupCard
                    group={g}
                    reserveHref={`/locations/${facility.slug}/reserve/${g.unitGroupUuid}`}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
