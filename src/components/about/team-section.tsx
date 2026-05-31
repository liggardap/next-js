"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data";

export function TeamSection() {
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
            The People Behind the Wheel
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Meet Our Team
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyInfo.team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-xl border border-border/40 bg-background p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-brand">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
