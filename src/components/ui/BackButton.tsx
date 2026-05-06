"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/Button";

/**
 * Browser-back button. Falls back to a hard-coded href if there's no history
 * (e.g., user landed on the page via direct link). Source from
 * `storage-theme-payload`'s BackButton.
 *
 * Editor contract: forwards through to `Button`, so the root carries
 * `data-nocms-component="button"`. Direct-edit on the label leaf works via
 * the standard `data-role="cta"` Button passthrough.
 */
interface BackButtonProps extends Omit<ButtonProps, "onClick" | "href"> {
  fallbackHref?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  children = "Go Back",
  fallbackHref = "/",
  ...buttonProps
}) => {
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = fallbackHref;
    }
  };

  return (
    <Button {...buttonProps} onClick={handleBack}>
      {children}
    </Button>
  );
};

export default BackButton;
