import type { Metadata } from "next";
import { HeroOverlay } from "@/components/content/HeroOverlay";
import { FeaturesGrid } from "@/components/content/FeaturesGrid";
import { RentalSteps } from "@/components/storage/RentalSteps";
import { Testimonials } from "@/components/content/Testimonials";
import { CTABanner } from "@/components/content/CTABanner";
import { storageFeatures } from "@/data/storage-features";
import { testimonials } from "@/data/testimonials";
import skinConfig from "@/skin.config";

export const metadata: Metadata = {
  title: skinConfig.brandName,
  description: skinConfig.tagline,
};

export default function HomePage() {
  return (
    <>
      <HeroOverlay
        heading={skinConfig.brandName}
        subheading={skinConfig.tagline}
        primaryCta={{ label: "Reserve a unit", href: "/reserve-online" }}
        secondaryCta={{ label: "View locations", href: "/locations" }}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      />
      <FeaturesGrid
        heading="Why store with us"
        description="Climate-controlled, secure, and built for the way you actually use storage."
        features={storageFeatures}
        cta={{ label: "See available units", href: "/reserve-online" }}
      />
      <RentalSteps />
      <Testimonials testimonials={testimonials} heading="What our customers say" />
      <CTABanner
        heading="Ready to reserve?"
        subheading="Lock in today's rate online — no payment due now."
        primaryCta={{ label: "Reserve online", href: "/reserve-online" }}
        secondaryCta={{ label: "Find a location", href: "/locations" }}
        phone={skinConfig.contactPhone}
      />
    </>
  );
}
