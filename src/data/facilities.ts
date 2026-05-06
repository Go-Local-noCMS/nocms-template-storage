/**
 * Sample facility content for unauthored sites.
 *
 * The runtime source of truth for facilities is `src/lib/facilities/data/`,
 * populated at scaffold time by the agent's `fetchXFacilities` MCP tools. This
 * file ships representative sample data for templates / previews that haven't
 * been bound to a real FMS yet — `loader.ts` ignores it.
 *
 * Shape mirrors `src/types/Facility.ts` so consumers can swap between this
 * sample list and the real loader without changes.
 */

import type { Facility, FacilityIndexEntry } from "@/types/Facility";

export const sampleFacilities: Facility[] = [
  {
    slug: "overland-park",
    id: "facility-sample-1",
    fms: "storedge",
    name: "Stormont Self Storage — Overland Park",
    address: {
      line1: "9420 Metcalf Ave",
      line2: null,
      city: "Overland Park",
      state: "KS",
      zip: "66212",
    },
    phone: "(913) 555-0142",
    email: "overlandpark@stormontstorage.com",
    coords: { lat: 38.9608, lng: -94.668 },
    timeZone: "America/Chicago",
    hours: [
      { day: "monday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "tuesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "wednesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "thursday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "friday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "saturday", isOpen: true, openTime: "09:00", closeTime: "17:00" },
      { day: "sunday", isOpen: true, openTime: "10:00", closeTime: "16:00" },
    ],
    amenities: [
      "24/7 video surveillance",
      "Gated electronic access",
      "Climate-controlled units",
      "Drive-up access",
      "Online bill pay",
      "Free move-in truck",
    ],
    unitTypes: ["Self Storage", "Climate Controlled", "Vehicle Storage"],
  },
  {
    slug: "lenexa",
    id: "facility-sample-2",
    fms: "storedge",
    name: "Stormont Self Storage — Lenexa",
    address: {
      line1: "13510 W 87th St Pkwy",
      line2: null,
      city: "Lenexa",
      state: "KS",
      zip: "66215",
    },
    phone: "(913) 555-0188",
    email: "lenexa@stormontstorage.com",
    coords: { lat: 38.9522, lng: -94.7472 },
    timeZone: "America/Chicago",
    hours: [
      { day: "monday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "tuesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "wednesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "thursday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "friday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "saturday", isOpen: true, openTime: "09:00", closeTime: "17:00" },
      { day: "sunday", isOpen: false, openTime: null, closeTime: null },
    ],
    amenities: [
      "24/7 video surveillance",
      "Gated electronic access",
      "Climate-controlled units",
      "Drive-up access",
      "Boat & RV parking",
    ],
    unitTypes: ["Self Storage", "Climate Controlled", "Boat & RV"],
  },
  {
    slug: "olathe",
    id: "facility-sample-3",
    fms: "storedge",
    name: "Stormont Self Storage — Olathe",
    address: {
      line1: "15205 S Mur-Len Rd",
      line2: null,
      city: "Olathe",
      state: "KS",
      zip: "66062",
    },
    phone: "(913) 555-0210",
    email: "olathe@stormontstorage.com",
    coords: { lat: 38.8509, lng: -94.7722 },
    timeZone: "America/Chicago",
    hours: [
      { day: "monday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "tuesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "wednesday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "thursday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "friday", isOpen: true, openTime: "09:00", closeTime: "18:00" },
      { day: "saturday", isOpen: true, openTime: "09:00", closeTime: "17:00" },
      { day: "sunday", isOpen: true, openTime: "10:00", closeTime: "16:00" },
    ],
    amenities: [
      "24/7 video surveillance",
      "Gated electronic access",
      "Climate-controlled units",
      "Drive-up access",
      "Packing supplies on-site",
      "Truck rental partner",
    ],
    unitTypes: ["Self Storage", "Climate Controlled"],
  },
];

export const sampleFacilityIndex: FacilityIndexEntry[] = sampleFacilities.map(
  (f) => ({
    slug: f.slug,
    id: f.id,
    fms: f.fms,
    name: f.name,
    city: f.address.city,
    state: f.address.state,
  }),
);
