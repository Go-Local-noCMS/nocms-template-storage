import * as React from "react";
import {
  ArrowRight,
  Building2,
  Car,
  Snowflake,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/**
 * Grid of unit-type categories (climate-controlled, drive-up, vehicle, etc.).
 * Source: storage-theme-payload `src/blocks/StorageTypes` — the upstream's
 * Layout-2 file is missing from the scratch repo so this is a fresh
 * implementation per the brief: section heading + grid of cards. Each card
 * has icon, label, blurb, and optional CTA.
 *
 * Editor contract: section heading carries `data-role="heading"`. Card titles
 * are data-derived; the section CTA (if provided) carries `data-role="cta"`.
 */

export type StorageTypeIconKey =
  | "climate"
  | "drive-up"
  | "vehicle"
  | "indoor"
  | "warehouse";

const iconRegistry: Record<StorageTypeIconKey, LucideIcon> = {
  climate: Snowflake,
  "drive-up": Truck,
  vehicle: Car,
  indoor: Building2,
  warehouse: Warehouse,
};

export interface StorageTypeCard {
  title: string;
  description?: string;
  icon?: StorageTypeIconKey;
  href?: string;
}

interface StorageTypesProps {
  heading?: string;
  subheading?: string;
  types?: StorageTypeCard[];
  cta?: { label: string; href: string };
}

const defaultTypes: StorageTypeCard[] = [
  {
    title: "Climate-controlled",
    description: "Stable temp + humidity for sensitive items.",
    icon: "climate",
    href: "/units/climate",
  },
  {
    title: "Drive-up",
    description: "Pull right up to the door — easy load-in.",
    icon: "drive-up",
    href: "/units/drive-up",
  },
  {
    title: "Vehicle storage",
    description: "Secure parking for cars, RVs, and boats.",
    icon: "vehicle",
    href: "/units/vehicle",
  },
  {
    title: "Indoor storage",
    description: "Inside the building, easy access from a hallway.",
    icon: "indoor",
    href: "/units/indoor",
  },
];

export function StorageTypes({
  heading = "Find the right type of storage",
  subheading,
  types = defaultTypes,
  cta,
}: StorageTypesProps) {
  return (
    <section data-nocms-component="storage-types" className="py-16 lg:py-20 bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            data-role="heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3"
          >
            {heading}
          </h2>
          {subheading && (
            <p data-role="subheading" className="text-zinc-600 text-lg max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((t) => {
            const Icon = iconRegistry[t.icon ?? "indoor"];
            const inner = (
              <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                <div
                  aria-hidden="true"
                  className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4"
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text mb-2">
                  {t.title}
                </h3>
                {t.description && (
                  <p className="text-sm text-zinc-600">{t.description}</p>
                )}
              </div>
            );
            return (
              <article key={t.title}>
                {t.href ? (
                  <a href={t.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </article>
            );
          })}
        </div>
        {cta && (
          <div className="mt-10 text-center">
            <a
              href={cta.href}
              data-role="cta"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
