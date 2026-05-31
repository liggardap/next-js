"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function ContactCtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-brand/20 bg-card px-8 py-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
            Get in Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to Explore Bali?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Chat with us on WhatsApp for instant quotes, availability, and free
            delivery coordination across Bali.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <WhatsAppButton variant="default" />
            <Button render={<Link href="/contact" />} nativeButton={false} variant="outline">
              Send a Message
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
