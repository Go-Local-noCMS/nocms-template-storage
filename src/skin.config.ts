export interface SkinConfig {
  /** Brand / company name */
  brandName: string;
  /** Primary tagline */
  tagline: string;
  /** Hero layout variant */
  heroVariant: "video" | "search" | "image" | "simple";
  /** Default facility slug — used to deep-link reserve / rent CTAs to the right location */
  primaryFacilitySlug?: string;
  /** Customer-facing phone number */
  contactPhone?: string;
  /** Customer-facing email */
  contactEmail?: string;
  /** Primary mailing / business address */
  primaryAddress?: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
}

const skinConfig: SkinConfig = {
  brandName: "Stormont Self Storage",
  tagline: "Climate-controlled storage in Overland Park, KS",
  heroVariant: "search",
  primaryFacilitySlug: "stormont-overland-park",
  contactPhone: "(913) 555-0190",
  contactEmail: "info@stormontstorage.com",
  primaryAddress: {
    line1: "12345 Mission Rd",
    city: "Overland Park",
    state: "KS",
    zip: "66213",
  },
};

export default skinConfig;
