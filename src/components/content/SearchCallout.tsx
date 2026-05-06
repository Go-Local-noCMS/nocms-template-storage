import * as React from "react";
import { ArrowRight } from "lucide-react";

/**
 * Callout band that prompts a search/CTA action — usually placed between
 * marketing sections to drive into reservation flow. Source:
 * storage-theme-payload `src/blocks/SearchCallout`. The async tenant fetch +
 * `getHierarchicalLink` resolution is dropped — caller passes a literal
 * `href`.
 *
 * Editor contract: heading on the prompt text, subheading optional, CTA on the
 * button. Background defaults to primary brand band.
 */

interface SearchCalloutCta {
  label: string;
  href: string;
}

interface SearchCalloutProps {
  heading?: string;
  subheading?: string;
  cta?: SearchCalloutCta;
  variant?: "primary" | "dark" | "accent";
}

const variantClasses: Record<string, string> = {
  primary: "bg-primary text-white",
  dark: "bg-text text-white",
  accent: "bg-accent text-white",
};

export function SearchCallout({
  heading = "Find a unit right for you today!",
  subheading,
  cta = { label: "Rent or Reserve Now", href: "/locations" },
  variant = "primary",
}: SearchCalloutProps) {
  return (
    <section
      data-nocms-component="search-callout"
      role="region"
      aria-label="Find a Unit Callout"
      className={`py-12 ${variantClasses[variant] ?? variantClasses.primary}`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
        <div className="flex-1">
          <h2
            data-role="heading"
            className="font-heading text-2xl sm:text-3xl font-bold"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {heading}
          </h2>
          {subheading && (
            <p data-role="subheading" className="mt-2 text-white/85 text-base">
              {subheading}
            </p>
          )}
        </div>
        <a
          href={cta.href}
          data-role="cta"
          className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-md text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex-shrink-0"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
