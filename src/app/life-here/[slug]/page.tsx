import { lifeHereSections } from "@/data/life-here";
import { notFound } from "next/navigation";
import { LifeHereDetail } from "@/components/content/LifeHereDetail";
import type { LifeHereSection as LifeHereDetailSection } from "@/components/content/LifeHereDetail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return lifeHereSections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const section = lifeHereSections.find((s) => s.slug === slug);
  if (!section) return {};
  return { title: `${section.name} | Life Here`, description: section.description };
}

export default async function LifeHerePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = lifeHereSections.find((s) => s.slug === slug);
  if (!section) notFound();

  const sectionData: LifeHereDetailSection = {
    title: section.name,
    tag: section.tag,
    heroImage: section.heroImage,
    description: section.description,
    highlights: section.highlights.map((h) => ({
      title: h.heading,
      description: h.content,
      image: h.image,
    })),
    features: section.features,
  };

  return <LifeHereDetail section={sectionData} />;
}
