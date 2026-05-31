import { HeroSection } from "@/components/sections/hero";
import { CompanyIntroSection } from "@/components/sections/company-intro";
import { ServicePreviewSection } from "@/components/sections/services-preview";
import { FeaturedVehiclesSection } from "@/components/sections/featured-vehicles";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TestimonialsCarouselSection } from "@/components/sections/testimonials-carousel";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactCtaSection } from "@/components/sections/contact-cta";

export default function HomePage() {
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
