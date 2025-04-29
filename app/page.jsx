import HeroSection from "@/components/hero";
import Footer from "@/components/footer";
import Subscribe from "@/components/subscribe";
import FeaturesSection from "@/components/features-section";
import AboutSection from "@/components/about-section";
import HowItWorksSection from "@/components/how-it-works";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonial";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <FeaturesSection />

      <AboutSection />

      <HowItWorksSection />

      <StatsSection />

      <TestimonialsSection/>

      <Subscribe />

      <Footer />
    </div>
  );
}
