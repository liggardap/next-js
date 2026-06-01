"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MobileMenu } from "@/components/layout/mobile-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-(--container-max) items-center justify-between px-4">
        <Link href="/" aria-label="Sanur Ride Co. home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  pathname === href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <WhatsAppButton />
          </div>
          <MobileMenu links={navLinks} />
        </div>
      </nav>
    </header>
  );
}
