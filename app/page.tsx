import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutTeaser from "@/components/home/AboutTeaser";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Roz Clancy Casting & Productions | NJ Casting Director | Ewing, NJ",
  description:
    "Roz Clancy Casting & Productions — New Jersey's trusted casting director for commercial, film, TV, voiceover, and theater. Serving NJ and PA. Serious talent only.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutTeaser />
      <Testimonials />
      <CTABanner />
    </>
  );
}
