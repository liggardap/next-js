"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="flex flex-col bg-card px-0">
          <SheetHeader className="border-b border-border/40 px-6 pb-4">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Link href="/" aria-label="Sanur Ride Co. home" onClick={() => setOpen(false)}>
              <Logo />
            </Link>
          </SheetHeader>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-border/40 px-6 py-4">
            <WhatsAppButton className="w-full justify-center" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
