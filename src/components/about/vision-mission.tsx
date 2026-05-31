"use client";

import { motion } from "framer-motion";
import { IconEye, IconTarget } from "@tabler/icons-react";
import { companyInfo } from "@/data";

export function VisionMission() {
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
            What Drives Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border/40 bg-background p-8"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
              <IconEye className="h-6 w-6 text-brand" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">Our Vision</h3>
            <p className="leading-relaxed text-muted-foreground">{companyInfo.vision}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border/40 bg-background p-8"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
              <IconTarget className="h-6 w-6 text-brand" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">Our Mission</h3>
            <ul className="space-y-2">
              {companyInfo.mission.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
