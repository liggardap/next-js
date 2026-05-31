"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconCar, IconMail } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-(--container-max) px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
          >
            Sanur, Bali — Since 2019
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Explore Bali at{" "}
            <span className="text-brand">Your Own Pace</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Reliable scooter and car rentals in Sanur. Transparent pricing,
            well-maintained fleet, and friendly local support — delivered to
            your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Button render={<Link href="/fleet" />} nativeButton={false} size="lg" className="bg-brand text-background hover:bg-brand/90">
              <IconCar className="mr-2 h-5 w-5" />
              View Fleet
            </Button>
            <WhatsAppButton variant="default" />
            <Button render={<Link href="/contact" />} nativeButton={false} size="lg" variant="outline">
              <IconMail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
