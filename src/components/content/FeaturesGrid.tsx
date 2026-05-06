import * as React from "react";
import {
  Box,
  Camera,
  KeyRound,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * FeaturesGrid — section heading + grid of feature cards. Source:
 * storage-theme-payload `src/blocks/FeaturesGrid`. Replaces FontAwesome icon
 * names + Lexical description with a small lucide-react icon registry and
 * plain-string description.
 *
 * Editor contract: section heading carries `data-role="heading"`; CTA button
 * carries `data-role="cta"`. Individual feature cards have no roles.
 */

export type FeatureIconKey =
  | "shield"
  | "camera"
  | "key"
  | "snowflake"
  | "truck"
  | "wallet"
  | "sparkles"
  | "box";

const iconRegistry: Record<FeatureIconKey, LucideIcon> = {
  shield: ShieldCheck,
  camera: Camera,
  key: KeyRound,
  snowflake: Snowflake,
  truck: Truck,
  wallet: Wallet,
  sparkles: Sparkles,
  box: Box,
};

export interface Feature {
  name: string;
  icon?: FeatureIconKey;
  href?: string;
}

interface FeaturesGridProps {
  heading?: string;
  description?: string;
  features?: Feature[];
  cta?: { label: string; href: string };
  disclaimer?: string;
}

const defaultFeatures: Feature[] = [
  { name: "24/7 Surveillance", icon: "camera" },
  { name: "Gated Access", icon: "key" },
  { name: "Climate Controlled", icon: "snowflake" },
  { name: "Truck Rentals", icon: "truck" },
  { name: "No Long-Term Lease", icon: "wallet" },
  { name: "Move-In Specials", icon: "sparkles" },
  { name: "Packing Supplies", icon: "box" },
  { name: "Insured Storage", icon: "shield" },
];

export function FeaturesGrid({
  heading = "Why store with us",
  description,
  features = defaultFeatures,
  cta,
  disclaimer,
}: FeaturesGridProps) {
  return (
    <section
      data-nocms-component="features-grid"
      className="bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            data-role="heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text"
          >
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-muted text-lg">{description}</p>
          )}
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-text/5 rounded-xl overflow-hidden">
          {features.map((feature, i) => {
            const Icon = iconRegistry[feature.icon ?? "box"];
            const content = (
              <div className="bg-surface p-6 h-full flex flex-col items-center text-center gap-3 hover:bg-background transition-colors">
                <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="font-medium text-text">{feature.name}</span>
              </div>
            );
            return (
              <li key={`${feature.name}-${i}`}>
                {feature.href ? (
                  <a href={feature.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>

        {cta && (
          <div className="mt-10 text-center">
            <Button href={cta.href} data-role="cta" variant="primary" size="lg">
              {cta.label}
            </Button>
          </div>
        )}

        {disclaimer && (
          <p className="mt-8 text-sm text-muted text-center max-w-3xl mx-auto">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
