// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

const Hero1 = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>Welcome to FODMAP</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>Discover a New Way of Eating and Living</Balancer>
          </h3>
        </div>
      </Container>
    </Section>
  );
};

export default Hero1;
