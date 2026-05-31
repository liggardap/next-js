import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { companyInfo } from "@/data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#scooter-rental", label: "Scooter Rental" },
  { href: "/services#car-rental", label: "Car Rental" },
  { href: "/services#airport-transfer", label: "Airport Transfer" },
  { href: "/services#driver-service", label: "Driver Service" },
  { href: "/services#long-term-rental", label: "Long-Term Rental" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {companyInfo.tagline}. Reliable vehicle rentals in Sanur, Bali since {companyInfo.founded}.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-foreground transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-foreground transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Have questions? We&apos;re available daily to assist with bookings and inquiries.
            </p>
            <WhatsAppButton className="w-full justify-center" />
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          <p>© {year} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
