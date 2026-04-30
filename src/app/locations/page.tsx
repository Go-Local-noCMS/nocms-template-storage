import { listFacilities } from "@/lib/facilities/loader";
import { FacilityCard } from "@/components/storage/FacilityCard";

export const metadata = {
  title: "Locations",
  description: "Find a self-storage facility near you.",
};

export default async function LocationsIndexPage() {
  const facilities = await listFacilities();

  if (facilities.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Locations</h1>
        <p className="mt-4 text-zinc-600">
          No locations configured yet. Once your facility data is loaded, your locations will
          appear here.
        </p>
      </main>
    );
  }

  // Group by state when there are >6 facilities across ≥2 states (per facilities skill).
  const states = new Set(facilities.map((f) => f.state));
  const groupByState = facilities.length > 6 && states.size >= 2;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Locations</h1>
      <p className="mt-2 text-zinc-600">
        {facilities.length} {facilities.length === 1 ? "facility" : "facilities"}.
      </p>

      {groupByState ? (
        <div className="mt-10 space-y-12">
          {Array.from(states)
            .sort()
            .map((state) => {
              const inState = facilities.filter((f) => f.state === state);
              return (
                <section key={state} aria-labelledby={`state-${state}`}>
                  <h2 id={`state-${state}`} className="text-xl font-semibold">
                    {state}
                  </h2>
                  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {inState.map((facility) => (
                      <li key={facility.slug}>
                        <FacilityCard facility={facility} />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
        </div>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <li key={facility.slug}>
              <FacilityCard facility={facility} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
