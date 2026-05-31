"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";
import { companyInfo } from "@/data";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    rentalType: formData.get("rentalType"),
    message: formData.get("message"),
    honeypot: formData.get("honeypot") ?? "",
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return { status: "error", message: "Please check your form inputs and try again." };
  }

  // Honeypot triggered — silently succeed
  if (parsed.data.honeypot) {
    return { status: "success" };
  }

  const { fullName, email, phone, rentalType, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.log("[Contact Form]", { fullName, email, phone, rentalType, message });
    return { status: "success" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: companyInfo.email,
      replyTo: email,
      subject: `New enquiry from ${fullName} — ${rentalType}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nRental Type: ${rentalType}\n\nMessage:\n${message}`,
    });

    return { status: "success" };
  } catch {
    return { status: "error", message: "Failed to send your message. Please try WhatsApp instead." };
  }
}
