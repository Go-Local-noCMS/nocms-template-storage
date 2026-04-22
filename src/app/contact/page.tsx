import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ContactForm } from "@/components/content/ContactForm";
import { CrisisBand } from "@/components/content/CrisisBand";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import skinConfig from "@/skin.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Senior Living",
  description: "Get in touch with our senior living community. We are here to answer questions and help you find the right care solution.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="simple"
        title="Contact Us"
        subtitle="We are here to help. Reach out with questions, schedule a visit, or request more information."
      />

      <SectionWrapper bg="background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-text mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {skinConfig.phone && (
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Phone</h3>
                    <a href={`tel:${skinConfig.phone.replace(/[^\d+]/g, "")}`} className="text-primary hover:underline">
                      {skinConfig.phone}
                    </a>
                  </div>
                </div>
              )}
              {skinConfig.email && (
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Email</h3>
                    <a href={`mailto:${skinConfig.email}`} className="text-primary hover:underline">
                      {skinConfig.email}
                    </a>
                  </div>
                </div>
              )}
              {skinConfig.address && (
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Address</h3>
                    <p className="text-muted">{skinConfig.address}</p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Office Hours</h3>
                  <p className="text-muted">Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p className="text-muted">Saturday – Sunday: 9:00 AM – 4:00 PM</p>
                  <p className="text-muted text-sm mt-1">Tours available 7 days a week by appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-text mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <CrisisBand />
    </>
  );
}
