import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  RESEND_API_KEY: z.string().optional(),
});

const clientEnvSchema = z.object({
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://www.liggar.site"),
});

function parseEnv() {
  const serverResult = serverEnvSchema.safeParse(process.env);
  const clientResult = clientEnvSchema.safeParse(process.env);

  if (!serverResult.success) {
    console.error("Invalid server environment variables:", serverResult.error.flatten().fieldErrors);
    throw new Error("Invalid server environment configuration");
  }
  if (!clientResult.success) {
    console.error("Invalid client environment variables:", clientResult.error.flatten().fieldErrors);
    throw new Error("Invalid client environment configuration");
  }

  return { ...serverResult.data, ...clientResult.data };
}

export const env = parseEnv();
