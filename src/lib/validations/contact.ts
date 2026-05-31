import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  rentalType: z.enum(["scooter", "car", "airport-pickup", "long-term", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
