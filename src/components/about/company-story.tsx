"use client";

import { motion } from "framer-motion";
import { IconMapPin, IconCalendar, IconCar, IconUsers } from "@tabler/icons-react";
import { companyInfo } from "@/data";

const highlights = [
  { icon: IconCalendar, label: "Founded", value: String(companyInfo.founded) },
  { icon: IconMapPin, label: "Location", value: "Sanur, Bali" },
  { icon: IconCar, label: "Fleet Size", value: "142+ Vehicles" },
  { icon: IconUsers, label: "Happy Customers", value: "10,000+" },
];

export function CompanyStory() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
              Our Story
            </span>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Born in Sanur,{" "}
              <span className="text-brand">Built for Bali</span>
            </h1>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Sanur Ride Co. was founded in {companyInfo.founded} with a simple belief: travellers
              and locals alike deserve reliable, transparent, and friendly vehicle rental — without
              the hassle or hidden fees that plague the industry.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Starting with a small fleet of scooters on the quiet streets of Sanur, we grew
              organically through word of mouth. Today we operate over 142 vehicles — from
              affordable scooters to spacious SUVs — serving thousands of customers every year
              across the whole island of Bali.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Every vehicle is regularly serviced, every price is quoted upfront, and every
              customer receives the warm hospitality that Sanur is known for.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                className="rounded-xl border border-border/40 bg-card p-6"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
