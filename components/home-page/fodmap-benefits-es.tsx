// File: components/home-page/fodmap-benefits-es.tsx
"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import FODMAPBenefitsStackEs from "./fodmap-benefits-stack-es";

const FODMAPBenefitsEs = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/es/contact">
            Contacto
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">Beneficios de la Dieta FODMAP</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          La dieta FODMAP ha demostrado científicamente proporcionar beneficios
          significativos para las personas con Síndrome del Intestino Irritable
          (SII) y otros trastornos digestivos. Explore las principales ventajas
          a continuación:
        </h3>

        <FODMAPBenefitsStackEs />

        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Es importante tener en cuenta que la dieta FODMAP debe realizarse bajo
          la orientación de un profesional de la salud o un dietista registrado.
          Ellos pueden asegurarse de que esté siguiendo la dieta correctamente y
          obteniendo todos los nutrientes que necesita.
        </h3>

        <div className="flex gap-4">
          {/* <Button>
            Comenzar
            <Link href="/en/quees">Learn More {"->"}</Link>
          </Button> */}

          {/* <Button variant="outline">Aprender Más</Button> */}
        </div>
      </Container>
    </Section>
  );
};

export default FODMAPBenefitsEs;
