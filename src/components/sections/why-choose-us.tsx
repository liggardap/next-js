"use client";

import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconHeart,
  IconEye,
  IconHeartHandshake,
  IconLeaf,
  type TablerIcon,
} from "@tabler/icons-react";
import { companyInfo } from "@/data";

const iconMap: Record<string, TablerIcon> = {
  "shield-check": IconShieldCheck,
  heart: IconHeart,
  eye: IconEye,
  "hand-heart": IconHeartHandshake,
  leaf: IconLeaf,
};

export function WhyChooseUsSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
            Why Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built on Values You Can Trust
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {companyInfo.values.map((value, i) => {
            const Icon = iconMap[value.icon] ?? IconShieldCheck;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-xl border border-border/40 bg-background p-5 text-center"
              >
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{value.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
