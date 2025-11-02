import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { VideoReviews } from "@/components/video";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* <SiteHeader /> */}
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProjects />
        <AboutSection />
        <TestimonialsSection />
        <VideoReviews />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
