// lib/seo.ts
import type { Metadata } from "next";
import { SITE } from "./site";

type Opts = { title?: string; description?: string; path: string; noindex?: boolean };

export function pageMetadata({ title, description = SITE.description, path, noindex }: Opts): Metadata {
  const ogTitle = title ? `${title} | ${SITE.name}` : SITE.homeTitle;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website", siteName: SITE.name, locale: SITE.locale,
      title: ogTitle, description, url: path,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: [SITE.ogImage] },
  };
}