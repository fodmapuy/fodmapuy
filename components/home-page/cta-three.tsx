import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";
import Chart15 from "../ui/chart15";

const CTA = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">
          If this sounds familiar, you&apos;re not alone.{" "}
        </h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Statistics: Up to 15% of the population suffers from IBS
          </Balancer>
        </h3>
        <Chart15 />
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="en/quees">Learn More {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
