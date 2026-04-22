export interface SkinConfig {
  /** Hero layout variant */
  heroVariant: "video" | "search" | "image" | "simple";
  /** Decorative divider motif between sections */
  dividerMotif: "leaf" | "golden-dot" | "line";
  /** Optional background pattern overlay */
  backgroundPattern: "leaf-vine" | "grove" | "none";
  /** Community / brand name */
  brandName: string;
  /** Primary tagline */
  tagline: string;
  /** Main phone number */
  phone: string;
  /** Physical address */
  address?: string;
  /** Contact email */
  email?: string;
}

const skinConfig: SkinConfig = {
  heroVariant: "image",
  dividerMotif: "line",
  backgroundPattern: "none",
  brandName: "Senior Living Community",
  tagline: "Where Every Day Feels Like Home",
  phone: "(555) 123-4567",
  address: "123 Community Drive, Anytown, USA",
  email: "info@seniorliving.com",
};

export default skinConfig;
