import { Check, Star, ArrowRight, Shield, Heart, Users, Home, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Divider } from "@/components/ui/Divider";

export interface CareTypeFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface CareTypeData {
  slug: string;
  title: string;
  tag: string;
  heroImage: string;
  description: string;
  features: CareTypeFeature[];
  amenities: string[];
  testimonial?: {
    quote: string;
    author: string;
    relationship?: string;
  };
  pricingNote?: string;
  startingPrice?: string;
}

interface CareTypeDetailProps {
  careType: CareTypeData;
}

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  heart: Heart,
  users: Users,
  home: Home,
  star: Star,
  check: Check,
  clock: Clock,
};

export function CareTypeDetail({ careType }: CareTypeDetailProps) {
  return (
    <article>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <img
          src={careType.heroImage}
          alt={`${careType.title} at our community`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-text/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Badge variant="primary" className="mb-4 bg-primary/20 text-white backdrop-blur-sm">
            {careType.tag}
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {careType.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">{careType.description}</p>
        </div>
      </section>

      {/* Features Grid */}
      <SectionWrapper bg="background">
        <h2 className="font-heading text-3xl font-bold text-text text-center mb-12">
          What Sets Our {careType.title} Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careType.features.map((feature) => {
            const Icon = iconMap[feature.icon ?? "check"] ?? Check;
            return (
              <div
                key={feature.title}
                className="bg-surface rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <Divider />

      {/* Amenities */}
      {careType.amenities.length > 0 && (
        <SectionWrapper bg="surface">
          <h2 className="font-heading text-3xl font-bold text-text text-center mb-10">
            Included Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {careType.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-3 py-2">
                <Check className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-text text-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Testimonial */}
      {careType.testimonial && (
        <SectionWrapper bg="primary">
          <blockquote className="max-w-3xl mx-auto text-center">
            <Star className="h-8 w-8 text-white/40 mx-auto mb-6" aria-hidden="true" />
            <p className="text-xl sm:text-2xl text-white/95 font-body leading-relaxed italic mb-6">
              &ldquo;{careType.testimonial.quote}&rdquo;
            </p>
            <footer className="text-white/70">
              <cite className="not-italic font-semibold text-white">
                {careType.testimonial.author}
              </cite>
              {careType.testimonial.relationship && (
                <span className="block text-sm mt-1">{careType.testimonial.relationship}</span>
              )}
            </footer>
          </blockquote>
        </SectionWrapper>
      )}

      {/* Pricing CTA */}
      <SectionWrapper bg="background">
        <div className="text-center max-w-2xl mx-auto">
          {careType.startingPrice && (
            <p className="text-muted text-sm uppercase tracking-wider mb-2">Starting from</p>
          )}
          {careType.startingPrice && (
            <p className="font-heading text-4xl font-bold text-primary mb-4">
              {careType.startingPrice}
              <span className="text-lg text-muted font-normal">/month</span>
            </p>
          )}
          {careType.pricingNote && (
            <p className="text-muted mb-8">{careType.pricingNote}</p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/schedule-tour" variant="primary" size="lg">
              Schedule a Tour <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              View All Pricing
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </article>
  );
}
