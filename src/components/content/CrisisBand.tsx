import { Phone, AlertCircle } from "lucide-react";
import skinConfig from "@/skin.config";

interface CrisisBandProps {
  heading?: string;
  description?: string;
  phone?: string;
}

export function CrisisBand({
  heading = "Need Immediate Help?",
  description = "If you or a loved one needs urgent care placement, our team is available around the clock to help.",
  phone = skinConfig.phone,
}: CrisisBandProps) {
  return (
    <section className="bg-primary-dark py-8 lg:py-10 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-start gap-4">
            <div className="hidden md:flex h-12 w-12 rounded-full bg-white/15 items-center justify-center shrink-0">
              <AlertCircle className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-white mb-1">{heading}</h2>
              <p className="text-white/80 text-sm max-w-lg">{description}</p>
            </div>
          </div>
          <a
            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-3 bg-white text-secondary font-bold px-8 py-4 rounded-md text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all shrink-0"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
