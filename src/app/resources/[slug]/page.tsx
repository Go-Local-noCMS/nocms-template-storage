import { resourcePages } from "@/data/resources-pages";
import { notFound } from "next/navigation";
import { ResourceDetail } from "@/components/content/ResourceDetail";
import type { ResourcePage as ResourceDetailPage } from "@/components/content/ResourceDetail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return resourcePages.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = resourcePages.find((r) => r.slug === slug);
  if (!page) return {};
  return { title: `${page.name} | Resources`, description: page.description };
}

export default async function ResourceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = resourcePages.find((r) => r.slug === slug);
  if (!page) notFound();

  const resourceData: ResourceDetailPage = {
    title: page.name,
    tag: page.tag,
    description: page.description,
    type: page.type,
    heroImage: page.heroImage,
    sections: page.sections,
  };

  return <ResourceDetail resource={resourceData} />;
}
