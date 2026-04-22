import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ResourceCards } from "@/components/content/ResourceCards";
import { CTABanner } from "@/components/content/CTABanner";
import { resourcePages } from "@/data/resources-pages";
import { ArrowRight, BookOpen, FileText, Phone } from "lucide-react";
import skinConfig from "@/skin.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Senior Living",
  description: "Helpful resources, guides, and articles for families navigating senior living decisions.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        variant="simple"
        title="Resource Center"
        subtitle="Guides, articles, and tools to help your family navigate the senior living journey with confidence."
      />

      {/* Featured Guide */}
      <SectionWrapper bg="background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface rounded-2xl overflow-hidden border border-text/5 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Senior living guide"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                  <BookOpen className="inline h-3.5 w-3.5 mr-1" aria-hidden="true" />
                  Comprehensive Guide
                </span>
                <h2 className="font-heading text-2xl font-bold text-text mb-3">
                  The Complete Guide to Senior Living
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Everything families need to know about choosing the right community, understanding care levels,
                  navigating costs, and making the transition smooth.
                </p>
                <a
                  href="/resources/faq"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read the Guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Resource Pages */}
      <SectionWrapper bg="surface">
        <h2 className="font-heading text-3xl font-bold text-text text-center mb-10">
          Explore Our Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resourcePages.map((page) => (
            <a
              key={page.slug}
              href={`/resources/${page.slug}`}
              className="group bg-background rounded-xl p-8 border border-text/5 hover:shadow-md transition-shadow block"
            >
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">{page.tag}</span>
              <h3 className="font-heading text-xl font-bold text-text mt-2 mb-3 group-hover:text-primary transition-colors">
                {page.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{page.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          ))}
          <a
            href="/resources/blog"
            className="group bg-background rounded-xl p-8 border border-text/5 hover:shadow-md transition-shadow block"
          >
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">Blog</span>
            <h3 className="font-heading text-xl font-bold text-text mt-2 mb-3 group-hover:text-primary transition-colors">
              Blog & Guides
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Articles, tips, and expert advice on senior care, wellness, family support, and community living.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Visit Blog <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </SectionWrapper>

      {/* Quick Links */}
      <SectionWrapper bg="background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-text mb-8">Quick Links</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/pricing" className="inline-flex items-center gap-2 bg-surface border border-text/10 rounded-full px-6 py-3 text-sm font-medium text-text hover:border-primary hover:text-primary transition-colors">
              Pricing Information
            </a>
            <a href="/schedule-tour" className="inline-flex items-center gap-2 bg-surface border border-text/10 rounded-full px-6 py-3 text-sm font-medium text-text hover:border-primary hover:text-primary transition-colors">
              Schedule a Tour
            </a>
            <a href="/living-options" className="inline-flex items-center gap-2 bg-surface border border-text/10 rounded-full px-6 py-3 text-sm font-medium text-text hover:border-primary hover:text-primary transition-colors">
              Living Options
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 bg-surface border border-text/10 rounded-full px-6 py-3 text-sm font-medium text-text hover:border-primary hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        heading="Have Questions? We Are Here to Help"
        description="Our team is ready to assist you with any questions about senior living."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        phone={skinConfig.phone}
      />
    </>
  );
}
