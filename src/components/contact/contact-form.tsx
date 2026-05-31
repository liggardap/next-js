"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCircleCheck, IconAlertCircle, IconLoader } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const INITIAL_STATE: ContactFormState = { status: "idle" };

const rentalTypes = [
  { value: "scooter", label: "Scooter Rental" },
  { value: "car", label: "Car Rental" },
  { value: "airport-pickup", label: "Airport Pickup" },
  { value: "long-term", label: "Long-Term Rental (1+ month)" },
  { value: "other", label: "Other / General Enquiry" },
];

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, INITIAL_STATE);

  const {
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border/40 bg-card p-10 text-center">
        <IconCircleCheck className="h-10 w-10 text-brand" />
        <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out. We&apos;ll get back to you within a few hours.
        </p>
        <WhatsAppButton variant="default" />
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="honeypot"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute -left-[9999px] opacity-0"
        autoComplete="off"
      />

      {state.status === "error" && (
        <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <IconAlertCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="Jane Smith"
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-xs text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+62 812 3456 7890"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="rentalType">Rental Type</Label>
          <select
            id="rentalType"
            {...register("rentalType")}
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
          >
            {rentalTypes.map((t) => (
              <option key={t.value} value={t.value} className="bg-card text-foreground">
                {t.label}
              </option>
            ))}
          </select>
          {errors.rentalType && (
            <p className="text-xs text-destructive">{errors.rentalType.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us your travel dates, vehicle preferences, and pickup location..."
          rows={5}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-brand text-background hover:bg-brand/90"
      >
        {isPending ? (
          <>
            <IconLoader className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
