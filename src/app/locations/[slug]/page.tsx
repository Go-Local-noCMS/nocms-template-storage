import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getFacility, listFacilities } from "@/lib/facilities/loader";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export async function generateStaticParams(): Promise<Params[]> {
  const facilities = await listFacilities();
  return facilities.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const facility = await getFacility(slug);
  if (!facility) return { title: "Location not found" };
  return {
    title: `${facility.name} — ${facility.address.city}, ${facility.address.state}`,
    description: `Self-storage at ${facility.address.line1}, ${facility.address.city}.${
      facility.phone ? ` Call ${facility.phone}.` : ""
    }`,
  };
}

const DAY_LABELS: Record<string, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

export default async function FacilityDetailPage({ params }: Props) {
  const { slug } = await params;
  const facility = await getFacility(slug);
  if (!facility) notFound();

  const mapHref =
    facility.coords
      ? `https://www.google.com/maps/search/?api=1&query=${facility.coords.lat},${facility.coords.lng}`
      : null;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">{facility.name}</h1>
        <p className="mt-2 text-zinc-600">
          {facility.address.city}, {facility.address.state}
        </p>
      </header>

      <section aria-labelledby="address" className="mb-10">
        <h2 id="address" className="text-lg font-semibold">Address</h2>
        <address className="mt-2 not-italic text-zinc-700">
          <p>{facility.address.line1}</p>
          {facility.address.line2 && <p>{facility.address.line2}</p>}
          <p>
            {facility.address.city}, {facility.address.state} {facility.address.zip}
          </p>
        </address>
        {mapHref && (
          <a
            href={mapHref}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-medium text-zinc-900 underline"
          >
            Get directions →
          </a>
        )}
      </section>

      <section aria-labelledby="contact" className="mb-10">
        <h2 id="contact" className="text-lg font-semibold">Contact</h2>
        <ul className="mt-2 space-y-1 text-zinc-700">
          {facility.phone && (
            <li>
              <a href={`tel:${facility.phone.replace(/\s/g, "")}`} className="underline">
                {facility.phone}
              </a>
            </li>
          )}
          {facility.email && (
            <li>
              <a href={`mailto:${facility.email}`} className="underline">
                {facility.email}
              </a>
            </li>
          )}
        </ul>
      </section>

      {facility.hours.length > 0 && (
        <section aria-labelledby="hours" className="mb-10">
          <h2 id="hours" className="text-lg font-semibold">Hours</h2>
          <dl className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:max-w-md">
            {facility.hours.map((h) => (
              <div key={h.day} className="contents">
                <dt className="text-zinc-600">{DAY_LABELS[h.day] ?? h.day}</dt>
                <dd>
                  {h.isOpen && h.openTime && h.closeTime ? `${h.openTime} – ${h.closeTime}` : "Closed"}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {facility.amenities.length > 0 && (
        <section aria-labelledby="amenities" className="mb-10">
          <h2 id="amenities" className="text-lg font-semibold">Amenities</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {facility.amenities.map((a) => (
              <li key={a} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
                {a}
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link
        href={`/locations/${facility.slug}/unit-groups`}
        className="inline-block rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:outline-none"
      >
        See available sizes
      </Link>
    </main>
  );
}
