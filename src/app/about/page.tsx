import type { Metadata } from "next";
import { CompanyStory } from "@/components/about/company-story";
import { VisionMission } from "@/components/about/vision-mission";
import { CoreValues } from "@/components/about/core-values";
import { TeamSection } from "@/components/about/team-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sanur Ride Co. — your trusted vehicle rental partner in Bali since 2019.",
};

export default function AboutPage() {
  return (
    <>
      <CompanyStory />
      <VisionMission />
      <CoreValues />
      <TeamSection />
    </>
  );
}
