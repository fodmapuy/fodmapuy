// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Container, Section } from "@/components/craft";

const CTA1Es = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-6">
        <h2 className="!my-0">
          FODMAP: Oligosacáridos, Disacáridos, Monosacáridos y Polioles
          Fermentables
        </h2>
        <h4 className="text-muted-foreground">
          <Balancer>
            El enfoque FODMAP es una estrategia dietética científicamente
            probada para manejar problemas digestivos como el SII. Al
            identificar y reducir ciertos carbohidratos fermentables, ayuda a
            aliviar síntomas como hinchazón, gases y dolor abdominal.
            Recomendado por médicos y nutricionistas en todo el mundo, este
            método ha demostrado un éxito significativo en la mejora de la salud
            intestinal y la calidad de vida de muchas personas.
          </Balancer>
        </h4>
        {/* <div className="not-prose flex items-center gap-2">
          <Button asChild>
            <Link href="#">Aprende Más</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#">Reserva una Consulta {"->"}</Link>
          </Button>
        </div> */}
      </Container>
    </Section>
  );
};

export default CTA1Es;
