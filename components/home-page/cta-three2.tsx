import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";

const CTA2 = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">Start Your FODMAP Journey Today</h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Take the first step towards better digestive health and a more
            comfortable life. Our expert team is ready to guide you through your
            personalized FODMAP plan.
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="#">Get Started</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="#">Learn More {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA2;
