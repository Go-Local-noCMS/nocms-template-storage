"use client";

import * as React from "react";
import { useId, useState } from "react";
import { Search, MapPin } from "lucide-react";

/**
 * Inline search form — zip / city-state input with submit + optional "Near
 * Me" button. Source: storage-theme-payload `src/blocks/SearchForm`. The
 * markets-autocomplete + geolocation dependencies are dropped; this version
 * accepts an optional `onSubmit` (otherwise navigates to `/search?q=`) and an
 * optional `onNearMe` (otherwise hides the Near Me button).
 *
 * Editor contract: `data-nocms-component` only — the `<input>` is interactive,
 * not a static text leaf, so no `data-role`s.
 */

interface SearchFormProps {
  label?: string;
  /** Where the visible label goes — above the input or as the placeholder. */
  labelPlacement?: "above" | "placeholder";
  showNearMe?: boolean;
  size?: "default" | "lg";
  /** Override submit. Default navigates the browser to `/search?q={value}`. */
  onSubmit?: (query: string) => void;
  /** Hide Near Me when not provided; otherwise wired to button click. */
  onNearMe?: () => void;
  className?: string;
}

export function SearchForm({
  label = "Zip or City, State",
  labelPlacement = "above",
  showNearMe = true,
  size = "default",
  onSubmit,
  onNearMe,
  className = "",
}: SearchFormProps) {
  const reactId = useId();
  const inputId = `search-form-${reactId}`;
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value);
      return;
    }
    if (typeof window !== "undefined") {
      window.location.assign(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  const sizing =
    size === "lg"
      ? { input: "h-14 text-base", btn: "px-6 py-4 text-base" }
      : { input: "h-12 text-sm", btn: "px-5 py-3 text-sm" };

  const showVisibleLabel = labelPlacement === "above";
  const placeholder = labelPlacement === "placeholder" ? label : "";

  return (
    <div
      data-nocms-component="search-form"
      className={`w-full max-w-2xl ${className}`}
    >
      {showVisibleLabel && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-text mb-2"
        >
          {label}
        </label>
      )}
      <form
        action="/search"
        role="search"
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
        aria-label={label}
      >
        <div className="relative flex-1">
          <Search
            aria-hidden="true"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400"
          />
          <input
            id={inputId}
            type="search"
            name="q"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={`w-full pl-10 pr-3 ${sizing.input} rounded-md border border-zinc-300 bg-white text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary`}
            aria-label={showVisibleLabel ? undefined : label}
          />
        </div>
        <button
          type="submit"
          className={`inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-md ${sizing.btn} hover:opacity-90 transition-opacity`}
          aria-label="Search for storage locations"
        >
          Search
        </button>
        {showNearMe && onNearMe && (
          <button
            type="button"
            onClick={onNearMe}
            className={`inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold rounded-md ${sizing.btn} hover:bg-primary/5 transition-colors`}
            aria-label="Find storage locations near me"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Near Me
          </button>
        )}
      </form>
    </div>
  );
}
