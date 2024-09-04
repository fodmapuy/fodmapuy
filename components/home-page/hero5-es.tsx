import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { withSectionId } from "./withSectionId";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";
import Placeholder from "@/public/placeholder.jpg";

export default function Hero5Es() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center mt-16">
          <h1 className="!mb-0">
            <Balancer>Bienvenido a FODMAP</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>Descubrí una Nueva Forma de Comer y Vivir</Balancer>
          </h3>
          <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="/es/contact">
              Bienvenido a FODMAP
              <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
