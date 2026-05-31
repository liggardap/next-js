# Product Requirements Document (PRD)

# Sanur Ride Co. Website

Version: 1.1
Status: Draft
Product Type: Company Profile Website
Framework: Next.js 15 (App Router)
Target Launch: MVP

---

# 1. Overview

Sanur Ride Co. is a vehicle rental company located in Sanur, Bali.

The purpose of this website is to:

- Establish trust and credibility
- Present company information professionally
- Showcase rental services
- Generate leads and booking inquiries
- Improve Google search visibility
- Provide contact information and directions

This is a marketing website, not a booking platform.

Users cannot complete payments online.

Primary conversion goal:

> Submit inquiry through WhatsApp or Contact Form.

---

# 2. Business Goals

## Primary Goals

- Increase rental inquiries
- Improve local SEO presence
- Build trust with tourists
- Showcase fleet and services

## Secondary Goals

- Collect leads
- Publish blog content
- Display customer testimonials

---

# 3. Target Audience

## International Tourists

Age:

- 20–55

Needs:

- Easy transportation
- Transparent pricing
- Trustworthy provider

---

## Digital Nomads

Needs:

- Monthly rentals
- Reliable scooters
- Easy communication

---

## Families

Needs:

- Car rentals
- Airport pickup
- Safety

---

## Business Travelers

Needs:

- Reliable transportation
- Professional service

---

# 4. Success Metrics

## Business KPIs

- Monthly inquiries
- WhatsApp clicks
- Contact form submissions
- Organic search traffic

## Analytics

Implement Google Analytics 4 (or Plausible as privacy-first alternative) to track all business KPIs. Required events:

- `whatsapp_click` — triggered on every WhatsApp button tap
- `form_submit` — triggered on successful contact form submission
- `fleet_filter` — triggered when fleet filters are applied

## Technical KPIs

- Lighthouse score > 90
- Core Web Vitals pass
- Mobile-first experience

---

# 5. Site Structure

## Home

URL:

/

Sections:

- Hero
- Company Introduction
- Services
- Featured Vehicles
- Why Choose Us
- Testimonials
- FAQ
- Contact CTA

---

## About Us

URL:

/about

Sections:

- Company Story
- Vision
- Mission
- Core Values
- Team

---

## Services

URL:

/services

Sections:

- Scooter Rental
- Motorcycle Rental
- Car Rental
- Long-Term Rental
- Airport Pickup

---

## Fleet

URL:

/fleet

Sections:

- Scooter Fleet
- Car Fleet

Filters:

- Category
- Transmission
- Seats

Filter Behavior:

- Client-side filtering on static data (no page reload)
- Active filters shown as removable chips
- Empty state: display "No vehicles match your filters" with a reset button
- Default state: all vehicles shown

Vehicle Cards:

- Image
- Name
- Description
- Rental Price
- CTA

---

## Blog

URL:

/blog

Purpose:

SEO growth

Update Workflow:

Blog posts are Markdown files stored in `/content/blog/`. Each new post requires a developer to add the file and deploy. This is an accepted constraint for MVP — no client-facing CMS. If the client needs to self-publish, evaluate a Git-based CMS (Keystatic or Tina) in Phase 2.

Examples:

- Best Places to Visit in Bali
- Driving Tips for Bali
- Long-Term Scooter Rental Guide

---

## Blog Detail

URL:

/blog/[slug]

Features:

- Rich content
- Related posts
- Social sharing

---

## Contact

URL:

/contact

Features:

- Contact Form
- WhatsApp Button
- Google Maps
- Business Hours

---

# 6. Functional Requirements

## Navigation

Desktop:

- Sticky Navbar

Mobile:

- Hamburger Menu

Requirements:

- Logo
- Navigation Links
- WhatsApp CTA

---

## Hero Section

Content:

Headline:

"Explore Bali at Your Own Pace"

Subheadline:

Reliable scooter and car rentals in Sanur.

Actions:

- Contact Us
- View Fleet

Background:

- Bali lifestyle photography

---

## Fleet Listing

Each vehicle contains:

- Name
- Category
- Daily Price
- Weekly Price
- Monthly Price
- Features
- Image Gallery

CTA:

"Rent via WhatsApp"

---

## Contact Form

Fields:

- Full Name
- Email
- Phone Number
- Rental Type
- Message

Validation:

- Required fields
- Email validation

Submission:

- Handled via Next.js Server Action
- Sends email notification to hello@sanurride.co via email service (Resend recommended)
- No database storage in MVP — email-only delivery

Success State:

"Thank you. We will contact you shortly."

---

## WhatsApp Integration

Visible:

- Header
- Footer
- Floating button

Click action:

Open WhatsApp chat with pre-filled message:

> "Hi Sanur Ride Co.! I'm interested in renting a vehicle. Can you help me?"

When triggered from a specific vehicle card, pre-fill with:

> "Hi Sanur Ride Co.! I'm interested in renting the [Vehicle Name]. Can you share availability and pricing?"

---

## Testimonials

Fields:

- Customer Name
- Country
- Rating
- Review

Display:

- Carousel

---

## FAQ

Examples:

- Do you provide helmets?
- Is insurance included?
- Can vehicles be delivered?

Expandable accordion UI.

---

# 7. Non-Functional Requirements

## Performance

First load:

< 2 seconds

Images:

- Optimized
- Lazy loaded

Use:

next/image

---

## SEO

Every page requires:

- Meta title
- Meta description
- Open Graph tags

Generate:

- sitemap.xml
- robots.txt

Structured Data:

- LocalBusiness
- FAQPage

---

## Accessibility

Requirements:

- Keyboard navigation
- Proper labels
- Contrast compliance

Target:

WCAG AA

---

## Security

- CSRF protection — provided by Next.js Server Actions out of the box
- Rate limiting — implement via middleware using Upstash Redis (or a simple in-memory IP-based limiter for MVP); limit contact form to 5 submissions per IP per hour
- Form validation — client-side via Zod + React Hook Form; server-side re-validated in Server Action
- Spam prevention — honeypot field on contact form

---

# 8. Design Requirements

## Design Direction

Quiet Premium

Inspired by:

- Vercel
- Linear
- Raycast
- Stripe

Characteristics:

- Spacious
- Modern
- Minimal
- Professional

Photography Requirements:

The dark background (#0F172A) requires vehicle photos with transparent or dark-compatible backgrounds. Avoid white-background product images — they will appear jarring. All vehicle photography should be:

- Shot on location or dark/neutral studio background
- Consistent lighting and angle per category
- Minimum resolution: 1200 × 800px
- Format: WebP preferred

---

## Colors

Background:

#0F172A

Card:

#111827

Text:

#F8FAFC

Muted:

#94A3B8

Accent:

#38BDF8

---

## Typography

Headings:

Inter

Body:

Inter

Code:

JetBrains Mono

---

## Layout

Container:

1280px

Spacing:

Generous whitespace

Border Radius:

16px

Shadows:

Subtle

---

# 9. Technical Requirements

## Frontend

Framework:

Next.js 15

Language:

TypeScript

Styling:

Tailwind CSS

UI Components:

shadcn/ui

Icons:

Lucide

Animations:

Framer Motion — scoped to entrance animations only (fade-in, slide-up on scroll). No layout animations or continuous motion. Use CSS transitions for hover states and simple interactions to minimize bundle size impact on Lighthouse score.

Forms:

React Hook Form

Validation:

Zod

Analytics:

Google Analytics 4 (or Plausible)

---

## Backend

Option A:

Next.js Server Actions

Option B:

Laravel API

For MVP:

Use Server Actions.

---

## CMS

For MVP:

No CMS. All content stored as TypeScript data files in `/data/`. Blog posts stored as Markdown in `/content/blog/`.

Future consideration (Phase 2): Git-based CMS (Keystatic or Tina) to allow client self-publishing without code changes.

---

# 10. Static Data Structure

All content is managed as TypeScript files — no database for MVP. Shape definitions below.

## `/data/fleet.ts`

```ts
type Vehicle = {
  id: string
  name: string
  category: 'scooter' | 'premium-scooter' | 'economy-car' | 'suv-mpv' | 'premium-car'
  transmission: 'automatic' | 'manual'
  seats: number
  image: string
  gallery: string[]
  description: string
  dailyPrice: number
  weeklyPrice: number
  monthlyPrice: number
  features: string[]
  isFeatured: boolean
}
```

## `/data/testimonials.ts`

```ts
type Testimonial = {
  id: string
  name: string
  country: string
  rating: number
  review: string
}
```

## `/data/faqs.ts`

```ts
type FAQ = {
  id: string
  question: string
  answer: string
}
```

---

# 11. SEO Strategy

Target Keywords:

- scooter rental sanur
- car rental sanur
- bali scooter rental
- scooter hire bali
- rent scooter bali
- sanur car rental
- long term scooter rental bali

Blog Content Strategy:

- 2 articles per month
- Travel guides
- Transportation tips
- Local recommendations

---

# 12. Future Roadmap

## Phase 2

- Online booking system
- Availability calendar
- Customer accounts

---

## Phase 3

- Online payment
- Stripe integration
- Rental contracts
- Vehicle tracking

---

## Phase 4

- Mobile application
- Fleet management dashboard
- CRM integration

---

# MVP Scope

Included:

- Company Profile
- Fleet Showcase
- Contact Form
- WhatsApp Integration
- Blog
- SEO

Excluded:

- Payments
- Booking Engine
- Customer Accounts
- Vehicle Availability Management

The MVP objective is to generate rental inquiries and establish a strong online presence for Sanur Ride Co.
