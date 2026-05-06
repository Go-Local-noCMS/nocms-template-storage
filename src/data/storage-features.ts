/**
 * Reusable feature list consumed by the `FeaturesGrid` component on home and
 * landing pages. Shape mirrors `Feature` in
 * `src/components/content/FeaturesGrid.tsx`. Add icons from the registry there
 * (`shield`, `camera`, `key`, `snowflake`, `truck`, `wallet`, `sparkles`, `box`).
 */

import type { Feature } from "@/components/content/FeaturesGrid";

export const storageFeatures: Feature[] = [
  {
    name: "Climate-Controlled Units",
    icon: "snowflake",
  },
  {
    name: "24/7 Video Surveillance",
    icon: "camera",
  },
  {
    name: "Gated Electronic Access",
    icon: "key",
  },
  {
    name: "Drive-Up Loading",
    icon: "truck",
  },
  {
    name: "Month-to-Month Leases",
    icon: "wallet",
  },
  {
    name: "Online Bill Pay",
    icon: "sparkles",
  },
  {
    name: "Packing Supplies On-Site",
    icon: "box",
  },
  {
    name: "Tenant Insurance Available",
    icon: "shield",
  },
];
