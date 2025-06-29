import Hero from "@/components/Hero";
// import ServicesSection from "./services/page";

import PartnersSlider from "@/components/PartnersSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AboutUsSection from "@/components/AboutUsSection";
import LaunchPartnerSection from "@/components/LaunchPartnerSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersCard";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <ServicesSection />
        <AboutUsSection />
        <OffersSection />
        <LaunchPartnerSection />
        <PartnersSlider />
        <TestimonialsSlider />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
