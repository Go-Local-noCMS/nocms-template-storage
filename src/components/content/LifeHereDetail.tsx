import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider } from "@/components/ui/Divider";

export interface LifeHereHighlight {
  title: string;
  description: string;
  image?: string;
}

export interface LifeHereSection {
  title: string;
  tag: string;
  heroImage: string;
  description: string;
  highlights: LifeHereHighlight[];
  features: string[];
}

interface LifeHereDetailProps {
  section: LifeHereSection;
}

export function LifeHereDetail({ section }: LifeHereDetailProps) {
  return (
    <article>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <img
          src={section.heroImage}
          alt={`${section.title} at our community`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-text/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Badge variant="primary" className="mb-4 bg-primary/20 text-white backdrop-blur-sm">
            {section.tag}
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            {section.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">{section.description}</p>
        </div>
      </section>

      {/* Highlights */}
      <SectionWrapper bg="background">
        <div className="space-y-16">
          {section.highlights.map((highlight, i) => (
            <div
              key={highlight.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16`}
            >
              {highlight.image && (
                <div className="w-full lg:w-1/2">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-80 object-cover rounded-xl shadow-md"
                    loading="lazy"
                  />
                </div>
              )}
              <div className={`w-full ${highlight.image ? "lg:w-1/2" : ""}`}>
                <h2 className="font-heading text-2xl font-bold text-text mb-4">{highlight.title}</h2>
                <p className="text-muted leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Divider />

      {/* Features list */}
      {section.features.length > 0 && (
        <SectionWrapper bg="surface">
          <h2 className="font-heading text-3xl font-bold text-text text-center mb-10">
            What is Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {section.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 py-2">
                <Check className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-text text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* CTA */}
      <SectionWrapper bg="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Experience It for Yourself
          </h2>
          <p className="text-white/85 mb-8 max-w-lg mx-auto">
            Schedule a tour and discover the vibrant lifestyle waiting for you or your loved one.
          </p>
          <Button href="/schedule-tour" variant="secondary" size="lg">
            Schedule a Tour <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </SectionWrapper>
    </article>
  );
}
