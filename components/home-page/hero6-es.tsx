import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import FlippingCard from "../animata/list/flipping-cards";
import { FODMAPChart } from "@/components/ui/chartibs";
import { FODMAPChartES } from "../ui/chartibs.es";

interface CardDetailsProps {
  font: string;
  image: string;
  title: string;
}

const Hero6Es = () => {
  const cardDetails: CardDetailsProps[] = [
    {
      font: "Fermentable",
      image:
        "https://images.unsplash.com/photo-1718889874468-3a56b84bb2e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "F",
    },
    {
      font: "Oligosacáridos",
      image:
        "https://plus.unsplash.com/premium_photo-1717916843908-7bbee16bad20?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "O",
    },
    {
      font: "Disacáridos",
      image:
        "https://images.unsplash.com/photo-1718743256288-e77382a88aaf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "D",
    },
    {
      font: "Monosacáridos",
      image:
        "https://images.unsplash.com/photo-1718889874468-3a56b84bb2e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "M",
    },
    {
      font: "And",
      image:
        "https://images.unsplash.com/photo-1718792679559-5cfd607bb564?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A",
    },
    {
      font: "Polioles",
      image:
        "https://images.unsplash.com/photo-1718397172443-48185c6bb4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "P",
    },
  ];
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/es/contacto">
            Contacto
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">¿Qué son los FODMAPs?</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          FODMAP es un acrónimo que significa Fermentable Oligosaccharides,
          Disaccharides, Monosaccharides And Polyols. Estos son tipos de
          carbohidratos de cadena corta y alcoholes de azúcar que pueden ser mal
          absorbidos en el intestino delgado, lo que lleva a síntomas
          gastrointestinales en algunas personas.
          <br />
          <br />
          La dieta baja en FODMAP es un enfoque nutricional que implica reducir
          temporalmente el consumo de alimentos altos en FODMAP para aliviar los
          síntomas del síndrome del intestino irritable (SII) y otros trastornos
          digestivos funcionales.
        </h3>
        {/* 
        <div className="flex gap-4">
          <Button>Comenzar</Button>
          <Button variant="outline">Aprender Más</Button>
        </div> */}

        <FlippingCard list={cardDetails} />

        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Los FODMAP incluyen:
          <br />
          <br />
          <ul className="list-disc list-inside mb-4">
            <li>
              Oligosacáridos: como fructanos y galactooligosacáridos (GOS)
            </li>
            <li>Disacáridos: principalmente lactosa</li>
            <li>Monosacáridos: fructosa en exceso de glucosa</li>
            <li>Polioles: como sorbitol, manitol, maltitol y xilitol</li>
          </ul>
          <br />
          La dieta baja en FODMAP generalmente se implementa en tres fases:
          eliminación, reintroducción y personalización. Es importante trabajar
          con un dietista registrado para garantizar que se siga correctamente y
          que se mantenga una dieta equilibrada y nutritiva.
        </h3>
        <FODMAPChartES />
      </Container>
    </Section>
  );
};

export default Hero6Es;
