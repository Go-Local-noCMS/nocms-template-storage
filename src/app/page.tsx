import { PageHero } from "@/components/layout/PageHero";
import { Divider } from "@/components/ui/Divider";
import { CareCards } from "@/components/content/CareCards";
import { StatsBar } from "@/components/content/StatsBar";
import { WhySection } from "@/components/content/WhySection";
import { PricingCards } from "@/components/content/PricingCards";
import { Testimonials } from "@/components/content/Testimonials";
import { PhotoGrid } from "@/components/content/PhotoGrid";
import { CrisisBand } from "@/components/content/CrisisBand";
import { ResourceCards } from "@/components/content/ResourceCards";
import { CTABanner } from "@/components/content/CTABanner";
import skinConfig from "@/skin.config";

export default function Home() {
  return (
    <>
      <PageHero
        variant={skinConfig.heroVariant}
        title={`Welcome to\n${skinConfig.brandName}`}
        subtitle={skinConfig.tagline}
        backgroundImage="https://images.unsplash.com/photo-1559234938-b60fff04894d?w=1600&q=80"
        ctas={[
          { label: "Schedule a Tour", href: "/schedule-tour", variant: "primary" },
          { label: "Explore Living Options", href: "/living-options", variant: "secondary" },
        ]}
      />

      <Divider />

      <CareCards />

      <StatsBar />

      <WhySection />

      <Divider />

      <PricingCards />

      <Testimonials />

      <PhotoGrid />

      <CrisisBand />

      <ResourceCards />

      <CTABanner
        heading="Ready to Find the Perfect Home?"
        description="Schedule a personal tour and experience our community firsthand. No pressure, just a warm welcome."
        phone={skinConfig.phone}
      />
    </>
  );
}
