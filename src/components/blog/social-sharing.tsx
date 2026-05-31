"use client";

import { useState } from "react";
import { IconBrandTwitter, IconBrandFacebook, IconBrandWhatsapp, IconLink, IconCheck } from "@tabler/icons-react";

interface SocialSharingProps {
  url: string;
  title: string;
}

export function SocialSharing({ url, title }: SocialSharingProps) {
  const [copied, setCopied] = useState(false);

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: "Twitter",
      icon: IconBrandTwitter,
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
    },
    {
      label: "Facebook",
      icon: IconBrandFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      label: "WhatsApp",
      icon: IconBrandWhatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Share:</span>
      {links.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/40 bg-card text-muted-foreground transition-colors hover:border-brand/30 hover:text-brand"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/40 bg-card text-muted-foreground transition-colors hover:border-brand/30 hover:text-brand"
      >
        {copied ? <IconCheck className="h-4 w-4 text-brand" /> : <IconLink className="h-4 w-4" />}
      </button>
    </div>
  );
}
