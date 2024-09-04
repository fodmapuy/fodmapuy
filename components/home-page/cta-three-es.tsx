import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";
import Chart15Es from "../ui/chart15.es";

const CTAEs = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">Si esto te suena familiar, no estás solo.</h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Estadísticas: Hasta el 15% de la población sufre de SII
          </Balancer>
        </h3>
        <Chart15Es />
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="/es/contact">Reservar una Consulta</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="/es/quees">Aprende Más {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTAEs;
