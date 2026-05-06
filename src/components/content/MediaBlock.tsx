import * as React from "react";

/**
 * Inline media block — image with adjacent rich-text caption (or stand-alone).
 * Source: storage-theme-payload `src/blocks/MediaBlock`. The Lexical caption
 * field is replaced with a plain string `caption`; the Vimeo videoUpload /
 * external video branches are dropped (template handles those via dedicated
 * components).
 *
 * Editor contract: image carries `data-role="media"`; the optional caption
 * carries no role (it's secondary copy, not a primary text leaf).
 */

interface MediaBlockProps {
  src?: string;
  alt?: string;
  caption?: string;
  /** Visual alignment when shown inline at narrower widths. */
  alignment?: "left" | "center" | "right";
  captionAlignment?: "left" | "center" | "right";
  /** Constrain to typical body-column width when used inside long-form content. */
  enableGutter?: boolean;
  className?: string;
}

const alignClass: Record<string, string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

const captionAlignClass: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function MediaBlock({
  src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  alt = "",
  caption,
  alignment = "left",
  captionAlignment = "left",
  enableGutter = true,
  className = "",
}: MediaBlockProps) {
  return (
    <figure
      data-nocms-component="media-block"
      className={`${enableGutter ? "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" : ""} ${className}`}
    >
      <img
        data-role="media"
        src={src}
        alt={alt}
        className={`block w-full max-w-3xl rounded-lg shadow-md ${alignClass[alignment]}`}
      />
      {caption && (
        <figcaption
          className={`mt-3 text-sm text-zinc-600 italic ${captionAlignClass[captionAlignment]}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
