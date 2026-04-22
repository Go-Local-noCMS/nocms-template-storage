"use client";

import { useState, useCallback, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { navigationLinks, type NavLink } from "@/data/site-config";
import skinConfig from "@/skin.config";

interface NavbarProps {
  logo?: string;
  links?: NavLink[];
  phone?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Navbar({
  logo = skinConfig.brandName,
  links = navigationLinks,
  phone = skinConfig.phone,
  ctaText = "Schedule a Tour",
  ctaHref = "/schedule-tour",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent, label: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown(label);
      } else if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    },
    [toggleDropdown]
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg shadow-primary/15"
          : "bg-primary"
      }`}
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-white font-heading text-lg font-bold">
                {logo.charAt(0)}
              </span>
            </div>
            <span className="font-heading text-xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors">
              {logo}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {(links ?? []).map((link) =>
              link.children && link.children.length > 0 ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors rounded-md hover:bg-white/8"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown(link.label)}
                    onKeyDown={(e) => handleDropdownKeyDown(e, link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 opacity-60 transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-72 rounded-md bg-background border border-text/5 shadow-xl shadow-text/10 py-2">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 px-4 py-3 text-sm text-text/80 hover:text-text hover:bg-surface transition-colors"
                        >
                          <div>
                            <span className="font-semibold text-text block">{child.label}</span>
                            {child.description && (
                              <span className="text-muted text-xs">{child.description}</span>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors rounded-md hover:bg-white/8"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white font-semibold transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{phone}</span>
            </a>
            <a
              href={ctaHref}
              className="bg-sand text-primary-dark font-semibold px-5 py-2.5 rounded-md text-sm shadow-md hover:bg-background hover:shadow-lg hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
            {(links ?? []).map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-white/85 hover:text-white hover:bg-white/8 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children &&
                  link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="block pl-8 pr-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/8 rounded-md transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
              </div>
            ))}
            <div className="pt-4 px-4 space-y-3 border-t border-white/10 mt-4">
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/80 font-semibold"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {phone}
              </a>
              <a
                href={ctaHref}
                className="block text-center bg-secondary text-white font-semibold px-6 py-3 rounded-md shadow-lg"
              >
                {ctaText}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
