// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Container, Section } from "@/components/craft";

const CTA1 = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-6">
        <h2 className="!my-0">
          FODMAP: Fermentable Oligosaccharides, Disaccharides, Monosaccharides,
          and Polyols
        </h2>
        <h4 className="text-muted-foreground">
          <Balancer>
            The FODMAP approach is a scientifically proven dietary strategy to
            manage digestive issues such as IBS. By identifying and reducing
            certain fermentable carbohydrates, it helps alleviate symptoms like
            bloating, gas, and abdominal pain. Recommended by doctors and
            dietitians worldwide, this method has shown significant success in
            improving gut health and quality of life for many individuals.
          </Balancer>
        </h4>
        <div className="not-prose flex items-center gap-2">
          <Button asChild>
            <Link href="#">Learn More</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#">Book a Consultation {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA1;
