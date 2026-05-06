import * as React from "react";
import {
  ArrowRight,
  Boxes,
  Calculator,
  ClipboardList,
  HelpCircle,
  Ruler,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";

/**
 * StorageResources — list of helpful storage resource links + supporting copy
 * and CTA. Source: storage-theme-payload `src/blocks/StorageResources`.
 * Replaces FontAwesome IconProp + Lexical description with a small
 * lucide-react icon registry and plain-string description.
 *
 * Editor contract: section heading carries `data-role="heading"`; the primary
 * (button) CTA carries `data-role="cta"`. Resource cards have no roles.
 */

export type ResourceIconKey =
  | "shield"
  | "ruler"
  | "calculator"
  | "boxes"
  | "truck"
  | "checklist"
  | "help";

const iconRegistry: Record<ResourceIconKey, LucideIcon> = {
  shield: ShieldCheck,
  ruler: Ruler,
  calculator: Calculator,
  boxes: Boxes,
  truck: Truck,
  checklist: ClipboardList,
  help: HelpCircle,
};

export interface StorageResource {
  title: string;
  href: string;
  icon?: ResourceIconKey;
}

interface StorageResourcesProps {
  heading?: string;
  description?: string;
  resources?: StorageResource[];
  cta?: { label: string; href: string };
}

const defaultResources: StorageResource[] = [
  { title: "Size Guide", href: "/size-guide", icon: "ruler" },
  { title: "Storage Calculator", href: "/calculator", icon: "calculator" },
  { title: "Packing Tips", href: "/packing-tips", icon: "boxes" },
  { title: "Truck Rentals", href: "/truck-rentals", icon: "truck" },
  { title: "Moving Checklist", href: "/checklist", icon: "checklist" },
  { title: "Insurance Info", href: "/insurance", icon: "shield" },
];

export function StorageResources({
  heading = "Storage resources",
  description,
  resources = defaultResources,
  cta,
}: StorageResourcesProps) {
  return (
    <section
      data-nocms-component="storage-resources"
      className="bg-surface py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <h2
            data-role="heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text"
          >
            {heading}
          </h2>
          {description && (
            <div className="mt-4 text-muted text-lg leading-relaxed">
              <RichText source={description} />
            </div>
          )}
          {cta && (
            <div className="mt-6">
              <Button
                href={cta.href}
                data-role="cta"
                variant="primary"
                size="lg"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>

        <ul className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource, i) => {
            const Icon = iconRegistry[resource.icon ?? "help"];
            return (
              <li key={`${resource.title}-${i}`}>
                <a
                  href={resource.href}
                  className="flex items-center gap-4 bg-background rounded-lg border border-text/5 p-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-primary-dark shrink-0">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-text">{resource.title}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
