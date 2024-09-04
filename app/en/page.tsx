"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Main, Section, Container } from "@/components/craft";
import Hero5 from "@/components/home-page/hero5";
import Feature1 from "@/components/home-page/feature1";
import ShapeShifter from "@/components/animata/hero/shape-shifter";
import CTA from "@/components/home-page/cta-three";
import CTA1 from "@/components/home-page/cta-one";
import Feature5 from "@/components/home-page/feature5";
import FAQ from "@/components/home-page/faq";
import Footer from "@/components/home-page/footer";
import { FractalGlass } from "@/components/ui/fractalglass";
import CTA2 from "@/components/home-page/cta-three2";
import TrailingImage from "@/components/animata/image/trailing-image";
import RevealImageList from "@/components/animata/list/reveal-image";
import ContactForm from "@/components/ContactForm";
import Timeline from "@/components/home-page/timeline";

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== activeSection) {
          setActiveSection(entry.target.id);
        }
      });
    },
    [activeSection]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Detect when 10% of the section is visible
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Set initial active section to "welcome" if no section is intersecting
    if (!activeSection) {
      const isAnyIntersecting = Array.from(sections).some((section) =>
        observer
          .takeRecords()
          .find((entry) => entry.target === section && entry.isIntersecting)
      );
      if (!isAnyIntersecting) {
        setActiveSection("welcome");
      }
    }

    return () => observer.disconnect();
  }, [handleIntersection, activeSection]);

  return (
    <div className="relative">
      <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-48 z-10">
        <Timeline className="h-full w-full" activeSection={activeSection} />
      </div>
      <Main>
        <Section id="welcome">
          <Container>
            <Hero5 />
          </Container>
        </Section>
        <Section id="not-alone">
          <Container>
            <TrailingImage />
            <Feature1 />
          </Container>
        </Section>
        <Section id="what-is">
          <Container>
            <ShapeShifter language="en" />
            <CTA />
          </Container>
        </Section>
        <Section id="services">
          <Container>
            <CTA1 />
            <RevealImageList />
            <Feature5 />
          </Container>
        </Section>
        <Section id="faq">
          <Container>
            <FAQ />
            {/* <FractalGlass /> */}
          </Container>
        </Section>
        <Section id="contact">
          <Container>
            <CTA2 />
            <Footer />
          </Container>
        </Section>
      </Main>
    </div>
  );
}