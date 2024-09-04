import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";

const CTA2Es = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">Comienza Tu Viaje FODMAP Hoy</h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Da el primer paso hacia una mejor salud digestiva y una vida más
            cómoda. Nuestro equipo de expertos está listo para guiarte a través
            de tu plan FODMAP personalizado.
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="/es/contacto">Empezar</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="/es/quees">Saber Más {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA2Es;
