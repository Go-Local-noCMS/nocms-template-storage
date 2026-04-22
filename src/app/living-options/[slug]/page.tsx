import { careTypes } from "@/data/care-types";
import { notFound } from "next/navigation";
import { CareTypeDetail } from "@/components/content/CareTypeDetail";
import type { CareTypeData } from "@/components/content/CareTypeDetail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return careTypes.map((ct) => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ct = careTypes.find((c) => c.slug === slug);
  if (!ct) return {};
  return { title: `${ct.name} | Senior Living`, description: ct.description };
}

export default async function CareTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = careTypes.find((c) => c.slug === slug);
  if (!ct) notFound();

  const careTypeData: CareTypeData = {
    slug: ct.slug,
    title: ct.name,
    tag: ct.tag,
    heroImage: ct.heroImage,
    description: ct.longDescription,
    features: ct.features,
    amenities: ct.amenities,
    startingPrice: ct.startingPrice,
    pricingNote: "Pricing varies based on apartment size and individual care needs. Contact us for a personalized quote.",
  };

  return <CareTypeDetail careType={careTypeData} />;
}
