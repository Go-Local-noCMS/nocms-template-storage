"use client";

import { useState } from "react";
import { Calendar, Phone, Mail, User, CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import skinConfig from "@/skin.config";

export default function ScheduleTourPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatToExpect = [
    { icon: MapPin, title: "Community Tour", description: "Walk through our apartments, amenities, dining areas, and outdoor spaces with a personal guide." },
    { icon: User, title: "Meet the Team", description: "Chat with our leadership, care staff, and life enrichment coordinators who make it all happen." },
    { icon: Clock, title: "60–90 Minutes", description: "Tours typically last about an hour, but take all the time you need. No rush, no pressure." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Schedule Your Tour
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto">
            See our community in person and discover why families choose us. Tours are available 7 days a week.
          </p>
        </div>
      </section>

      <SectionWrapper bg="background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="text-center py-12 bg-surface rounded-xl">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" aria-hidden="true" />
                <h2 className="font-heading text-2xl font-bold text-text mb-3">Tour Requested!</h2>
                <p className="text-muted max-w-md mx-auto">
                  Thank you! Our team will contact you within 24 hours to confirm your visit. We look forward to showing you around.
                </p>
                <a href="/" className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:gap-3 transition-all">
                  Return Home <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-heading text-2xl font-bold text-text mb-2">Request a Tour</h2>
                <p className="text-muted text-sm mb-6">Fill in your details and we will find a time that works for you.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="tour-first" className="block text-sm font-medium text-text mb-1.5">
                      First Name <span className="text-secondary">*</span>
                    </label>
                    <input id="tour-first" type="text" required placeholder="First name" className="w-full px-4 py-3 rounded-lg border border-text/10 bg-background text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="tour-last" className="block text-sm font-medium text-text mb-1.5">
                      Last Name <span className="text-secondary">*</span>
                    </label>
                    <input id="tour-last" type="text" required placeholder="Last name" className="w-full px-4 py-3 rounded-lg border border-text/10 bg-background text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>

                <div>
                  <label htmlFor="tour-email" className="block text-sm font-medium text-text mb-1.5">
                    <Mail className="inline h-4 w-4 mr-1.5 text-muted" aria-hidden="true" />
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input id="tour-email" type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-text/10 bg-background text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                  <label htmlFor="tour-phone" className="block text-sm font-medium text-text mb-1.5">
                    <Phone className="inline h-4 w-4 mr-1.5 text-muted" aria-hidden="true" />
                    Phone <span className="text-secondary">*</span>
                  </label>
                  <input id="tour-phone" type="tel" required placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-lg border border-text/10 bg-background text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                  <label htmlFor="tour-date" className="block text-sm font-medium text-text mb-1.5">
                    <Calendar className="inline h-4 w-4 mr-1.5 text-muted" aria-hidden="true" />
                    Preferred Date
                  </label>
                  <input id="tour-date" type="date" className="w-full px-4 py-3 rounded-lg border border-text/10 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                  <label htmlFor="tour-interest" className="block text-sm font-medium text-text mb-1.5">
                    Interested In
                  </label>
                  <select id="tour-interest" className="w-full px-4 py-3 rounded-lg border border-text/10 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select care type...</option>
                    <option value="independent">Independent Living</option>
                    <option value="assisted">Assisted Living</option>
                    <option value="memory">Memory Care</option>
                    <option value="respite">Respite Care</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tour-notes" className="block text-sm font-medium text-text mb-1.5">
                    Additional Notes
                  </label>
                  <textarea id="tour-notes" rows={3} placeholder="Anything you would like us to know..." className="w-full px-4 py-3 rounded-lg border border-text/10 bg-background text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Request Tour
                </Button>

                <p className="text-muted text-xs text-center">
                  No commitment required. We just want to show you around.
                </p>
              </form>
            )}
          </div>

          {/* What to Expect */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-text mb-8">What to Expect</h2>
            <div className="space-y-6">
              {whatToExpect.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    <p className="text-muted text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-surface rounded-xl p-8 border border-text/5">
              <h3 className="font-heading text-lg font-bold text-text mb-4">Tour FAQs</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-text text-sm">Can I bring family members?</p>
                  <p className="text-muted text-sm mt-1">Absolutely! We encourage families to visit together.</p>
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">Will I get to see an apartment?</p>
                  <p className="text-muted text-sm mt-1">Yes, you will tour model apartments and any available units.</p>
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">Can I stay for a meal?</p>
                  <p className="text-muted text-sm mt-1">We would love that. Enjoy a complimentary meal during your visit.</p>
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">Is there a virtual tour option?</p>
                  <p className="text-muted text-sm mt-1">Yes, we offer video tours for families who cannot visit in person.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted text-sm mb-2">Prefer to call?</p>
              <a
                href={`tel:${skinConfig.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {skinConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
