# Sanur Ride Co. — Brand Assets Guide

## Required Assets Checklist

### Favicon & App Icons

| File                         | Size                       | Destination              |
| ---------------------------- | -------------------------- | ------------------------ |
| `favicon.ico`                | 16x16 + 32x32 (multi-size) | `src/app/favicon.ico`    |
| `icon.png`                   | 32x32                      | `src/app/icon.png`       |
| `apple-icon.png`             | 180x180                    | `src/app/apple-icon.png` |
| `android-chrome-192x192.png` | 192x192                    | `public/`                |
| `android-chrome-512x512.png` | 512x512                    | `public/`                |

### Logo

| File             | Description                              | Destination      |
| ---------------- | ---------------------------------------- | ---------------- |
| `logo.svg`       | Full wordmark — dark background version  | `public/images/` |
| `logo-light.svg` | Full wordmark — light background version | `public/images/` |
| `logo-icon.svg`  | Icon only, no text                       | `public/images/` |

### Open Graph

| File           | Size     | Destination                  |
| -------------- | -------- | ---------------------------- |
| `og-image.png` | 1200x630 | `public/images/og-image.png` |

### Site Manifest

| File               | Destination               |
| ------------------ | ------------------------- |
| `site.webmanifest` | `public/site.webmanifest` |

---

## Generation Prompts

### Logo

```
Minimalist logo for "Sanur Ride Co.", a premium vehicle rental
company in Sanur, Bali. Modern and clean wordmark style.
Incorporate a subtle abstract motif of a scooter wheel,
road curve, or forward motion. Color palette: sky blue #38BDF8
on dark navy #0F172A background. Typography: geometric sans-serif,
similar to Inter or Geist. No gradients. No drop shadows.
Flat vector style. Professional and trustworthy.
Output: SVG-compatible, works on both dark and light backgrounds.
Style reference: Vercel, Linear, Raycast.
```

### Favicon

```
Minimal favicon icon for "Sanur Ride Co." — single letter "S"
or abstract scooter wheel symbol. Sky blue #38BDF8 on dark navy
#0F172A. Bold, legible at 16x16 and 32x32 pixels.
Flat geometric style. No fine details. Clean edges.
```

### Open Graph Image (1200×630)

```
Open Graph banner image for Sanur Ride Co. website.
Dark navy background #0F172A. Left side: "Sanur Ride Co."
wordmark in white #F8FAFC with tagline "Explore Bali at Your
Own Pace" in sky blue #38BDF8. Right side: lifestyle photo
or illustration of a premium scooter (Honda PCX or NMAX)
on a Bali coastal road. Quiet Premium aesthetic.
Minimal, spacious, modern. 1200x630px.
```

---

## Brand Colors

| Token          | Hex       | Usage                   |
| -------------- | --------- | ----------------------- |
| Background     | `#0F172A` | Page background         |
| Card           | `#111827` | Card surfaces           |
| Foreground     | `#F8FAFC` | Primary text            |
| Muted          | `#94A3B8` | Secondary text          |
| Accent / Brand | `#38BDF8` | CTAs, highlights, links |

---

## Developer Notes

### Logo as React Component

Do not use `<img src="/logo.svg">` in the Navbar. Export the SVG markup as a React component so color can be controlled via `currentColor` and it scales without quality loss.

```tsx
// src/components/ui/logo.tsx
export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="currentColor">
      {/* paste SVG path here */}
    </svg>
  );
}
```

### Next.js App Router File Conventions

Next.js 15 App Router automatically serves metadata images placed in `src/app/`:

```
src/app/
  favicon.ico       → served at /favicon.ico
  icon.png          → generates /icon metadata
  apple-icon.png    → generates /apple-icon metadata
```

Place `android-chrome-*.png` and `site.webmanifest` in `public/`.

### Recommended Tools

| Purpose            | Tool                                    |
| ------------------ | --------------------------------------- |
| Logo generation    | Looka, Brandmark.io, Canva AI           |
| OG image           | Canva AI, Midjourney, DALL-E            |
| Favicon conversion | favicon.io, RealFaviconGenerator.net    |
| SVG optimization   | SVGOMG (jakearchibald.github.io/svgomg) |
