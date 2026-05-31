import dynamic from "next/dynamic";
import { preload } from "react-dom";
import { HeroSection } from "@/components/sections/hero";
import { CompanyIntroSection } from "@/components/sections/company-intro";
import { ServicePreviewSection } from "@/components/sections/services-preview";
import { FeaturedVehiclesSection } from "@/components/sections/featured-vehicles";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactCtaSection } from "@/components/sections/contact-cta";
import { vehicles } from "@/data";

const TestimonialsCarouselSection = dynamic(() =>
  import("@/components/sections/testimonials-carousel").then((m) => m.TestimonialsCarouselSection)
);

export default function HomePage() {
  const firstFeatured = vehicles.find((v) => v.isFeatured);
  if (firstFeatured) preload(firstFeatured.image, { as: "image" });
  return (
    <>
      <HeroSection />
      <CompanyIntroSection />
      <ServicePreviewSection />
      <FeaturedVehiclesSection />
      <WhyChooseUsSection />
      <TestimonialsCarouselSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
