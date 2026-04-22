import { ArrowLeft, Download, Phone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import skinConfig from "@/skin.config";

export interface ResourceSection {
  heading: string;
  content: string;
}

export interface ResourcePage {
  title: string;
  tag: string;
  description: string;
  heroImage?: string;
  type: "guide" | "faq" | "financial";
  sections: ResourceSection[];
  downloadUrl?: string;
}

interface ResourceDetailProps {
  resource: ResourcePage;
}

export function ResourceDetail({ resource }: ResourceDetailProps) {
  return (
    <article>
      {/* Header */}
      <SectionWrapper bg="primary">
        <a href="/resources" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Resources
        </a>
        <Badge variant="accent" className="mb-4 bg-white/15 text-white">
          {resource.tag}
        </Badge>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {resource.title}
        </h1>
        <p className="text-white/85 text-lg max-w-2xl">{resource.description}</p>
      </SectionWrapper>

      {/* Content Sections */}
      <SectionWrapper bg="background">
        <div className="max-w-3xl mx-auto">
          {resource.sections.map((section, i) => (
            <div key={section.heading} className={`${i > 0 ? "mt-12 pt-12 border-t border-text/10" : ""}`}>
              <h2 className="font-heading text-2xl font-bold text-text mb-4">{section.heading}</h2>
              <div className="text-muted leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Download / CTA */}
      <SectionWrapper bg="surface">
        <div className="max-w-2xl mx-auto text-center">
          {resource.downloadUrl && (
            <div className="mb-8">
              <Button href={resource.downloadUrl} variant="outline" size="lg">
                <Download className="h-5 w-5" aria-hidden="true" />
                Download PDF Guide
              </Button>
            </div>
          )}
          <h2 className="font-heading text-2xl font-bold text-text mb-3">
            Have Questions?
          </h2>
          <p className="text-muted mb-6">
            Our team is here to help you navigate senior living decisions. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href={`tel:${skinConfig.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {skinConfig.phone}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </article>
  );
}
