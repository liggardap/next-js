"use client";

import { motion } from "framer-motion";
import { Shield, Star, MapPin, Users } from "lucide-react";
import { companyInfo } from "@/data";

const stats = [
  { icon: MapPin, label: "Based in Sanur", value: "Bali, Indonesia" },
  { icon: Star, label: "Founded", value: String(companyInfo.founded) },
  { icon: Users, label: "Fleet Size", value: "142+ Vehicles" },
  { icon: Shield, label: "Service Areas", value: "All of Bali" },
];

export function CompanyIntroSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
              About Us
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Bali&apos;s Most Trusted{" "}
              <br />
              Mobility Partner
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              {companyInfo.vision}
            </p>
            <ul className="space-y-2">
              {companyInfo.mission.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-border/40 bg-background p-5"
              >
                <Icon className="mb-3 h-5 w-5 text-brand" />
                <p className="text-xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
