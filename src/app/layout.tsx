import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sanur Ride Co. | Vehicle Rental in Bali",
    template: "%s | Sanur Ride Co.",
  },
  description:
    "Reliable scooter and car rentals in Sanur, Bali. Transparent pricing, well-maintained fleet, and friendly local support.",
  metadataBase: new URL("https://www.sanurride.co"),
  openGraph: {
    siteName: "Sanur Ride Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LocalBusinessSchema />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton variant="floating" />
        </div>
      </body>
    </html>
  );
}
