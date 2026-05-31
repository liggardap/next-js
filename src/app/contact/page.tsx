import type { Metadata } from "next";
import { IconMapPin, IconPhone, IconMail, IconClock } from "@tabler/icons-react";
import { ContactForm } from "@/components/contact/contact-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { companyInfo } from "@/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sanur Ride Co. for scooter and car rentals, airport pickups, and long-term hire in Bali.",
};

const contactDetails = [
  {
    icon: IconPhone,
    label: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: IconMail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: IconMapPin,
    label: "Address",
    value: companyInfo.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`,
  },
  {
    icon: IconClock,
    label: "Hours",
    value: "Open daily · 08:00 – 20:00 WITA",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
            Get In Touch
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 text-muted-foreground">
            Have a question or ready to book? Drop us a message and we&apos;ll reply within a few
            hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <ContactForm />

          {/* Info panel */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-brand">
                Contact Info
              </h2>
              <ul className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                      <Icon className="h-4 w-4 text-brand" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-foreground hover:text-brand transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand/5 p-6">
              <p className="mb-3 text-sm font-medium text-foreground">
                Prefer to chat instantly?
              </p>
              <p className="mb-4 text-xs text-muted-foreground">
                Our team is usually online and responds within minutes on WhatsApp.
              </p>
              <WhatsAppButton variant="default" className="w-full justify-center" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
