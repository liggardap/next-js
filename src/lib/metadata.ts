import type { Metadata } from "next";

const BASE = "https://www.liggar.site";

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Sanur Ride Co.",
      images: [{ url: `${BASE}${image}`, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE}${image}`],
    },
    alternates: { canonical: url },
  };
}
