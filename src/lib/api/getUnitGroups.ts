/**
 * Fetch the unit-groups list for a single facility.
 *
 * Hits GET /api/v3/{fms}/unit-groups?facilityUuid={facilityUuid} on the nocms
 * backend. The proxy resolves the active FMS adapter, fetches from the vendor,
 * and normalizes the response to the common UnitGroup contract.
 *
 * `revalidate: 60` — availability data doesn't change every second; a one-minute
 * static cache is sensible. Pass `cache: "no-store"` (via override) for live
 * filter toggles or admin-tools where freshness matters.
 */

import { apiFetch } from "./apiFetch";
import type { SupportedFms } from "../../types/Facility";
import type { UnitGroup, UnitGroupsResponse } from "../../types/UnitGroup";

export interface GetUnitGroupsOptions {
  /** Per-fetch cache override. Defaults to `next.revalidate = 60`. */
  cache?: RequestCache;
  /** Override the default 60s revalidation window. */
  revalidate?: number;
}

export async function getUnitGroups(
  fms: SupportedFms,
  facilityUuid: string,
  options: GetUnitGroupsOptions = {},
): Promise<UnitGroup[]> {
  const { cache, revalidate = 60 } = options;
  const path = `/api/v3/${fms}/unit-groups?facilityUuid=${encodeURIComponent(facilityUuid)}`;

  const res = await apiFetch(path, {
    method: "GET",
    ...(cache ? { cache } : { next: { revalidate } }),
  });

  if (res.status === 403) {
    throw new Error(`unit-groups: ${fms} key does not own facility ${facilityUuid} (403)`);
  }
  if (res.status === 404) {
    throw new Error(`unit-groups: facility ${facilityUuid} not found on ${fms} (404)`);
  }
  if (!res.ok) {
    throw new Error(`unit-groups fetch failed: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as UnitGroupsResponse;
  if (!json.data?.unitGroups) {
    throw new Error("unit-groups: unexpected response shape (data.unitGroups missing)");
  }
  return json.data.unitGroups;
}
