# Sanur Ride Co.

Company profile website for **Sanur Ride Co.** — a vehicle rental company based in Sanur, Bali.

Built with Next.js 15 App Router, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export-ready)
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` config)
- **UI**: Base UI, Framer Motion, Tabler Icons
- **Email**: Resend (contact form)
- **Blog**: Markdown files via gray-matter + remark
- **Analytics**: Google Analytics 4 (optional)
- **Deployment**: Vercel

## Getting Started

```bash
yarn install
cp .env.example .env.local
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values.

| Variable               | Required   | Description                                             |
| ---------------------- | ---------- | ------------------------------------------------------- |
| `RESEND_API_KEY`       | Production | API key for contact form emails                         |
| `NEXT_PUBLIC_GA_ID`    | Optional   | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_SITE_URL` | Optional   | Deployed URL, defaults to `https://www.sanurride.co`    |

> Without `RESEND_API_KEY`, contact form submissions are logged to the console instead of emailed.

## Scripts

```bash
yarn dev      # Start dev server (Turbopack)
yarn build    # Production build
yarn start    # Serve production build locally
yarn lint     # Run ESLint
```

## Project Structure

```
src/
├── app/            # Next.js App Router pages & layouts
│   ├── blog/       # Blog listing + [slug] detail pages
│   ├── contact/    # Contact page + server action
│   └── ...
├── components/     # UI components (layout, sections, blog, fleet)
├── data/           # Static data (vehicles, services, testimonials)
├── lib/            # Utilities (blog, metadata, env, rate-limit)
└── middleware.ts   # Security headers
content/
└── blog/           # Markdown blog posts
public/
└── images/         # Vehicle, hero, and OG images
```

## Deployment (Vercel)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Set the environment variables listed above in the Vercel dashboard
4. Deploy — Vercel auto-detects Next.js, no extra config needed

The site builds fully statically (`generateStaticParams` for blog posts) with no runtime server requirements beyond the contact form Server Action.
