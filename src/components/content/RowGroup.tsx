import * as React from "react";

/**
 * Structural row wrapper — lays its children out horizontally on desktop and
 * stacks them on mobile. Source: storage-theme-payload `src/blocks/RowGroup`,
 * minus the Lexical content prop (callers pass JSX children directly).
 *
 * Editor contract: tagged only with `data-nocms-component="row-group"` —
 * structural, no text-bearing roles.
 */

type Alignment =
  | "vertical"
  | "horizontal"
  | "left"
  | "right"
  | "center"
  | "between";

interface RowGroupProps {
  children?: React.ReactNode;
  mobileAlignment?: Alignment;
  desktopAlignment?: Alignment;
  className?: string;
}

const mobileMap: Partial<Record<Alignment, string>> = {
  vertical: "flex-col items-stretch",
  horizontal: "flex-row items-center",
  left: "flex-col items-start",
  right: "flex-col items-end",
  center: "flex-col items-center",
};

const desktopMap: Partial<Record<Alignment, string>> = {
  vertical: "lg:flex-col lg:items-stretch",
  horizontal: "lg:flex-row lg:items-center",
  left: "lg:flex-row lg:items-start lg:justify-start",
  right: "lg:flex-row lg:items-center lg:justify-end",
  center: "lg:flex-row lg:items-center lg:justify-center",
  between: "lg:flex-row lg:items-center lg:justify-between",
};

export function RowGroup({
  children,
  mobileAlignment = "vertical",
  desktopAlignment = "center",
  className = "",
}: RowGroupProps) {
  const mobile = mobileMap[mobileAlignment] ?? mobileMap.vertical;
  const desktop = desktopMap[desktopAlignment] ?? desktopMap.center;
  return (
    <div
      data-nocms-component="row-group"
      className={`flex gap-6 ${mobile} ${desktop} ${className}`}
    >
      {children}
    </div>
  );
}
