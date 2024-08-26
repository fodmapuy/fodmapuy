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

export default function Page() {
  return (
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
          <ShapeShifter />
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
          <FractalGlass />
        </Container>
      </Section>
      <Section id="contact">
        <Container>
          <CTA2 />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
