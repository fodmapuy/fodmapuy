import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "¿Qué es la dieta FODMAP?",
    answer:
      "La dieta FODMAP es una dieta de eliminación que ayuda a identificar alimentos desencadenantes para personas con síndrome del intestino irritable (SII) y otros trastornos digestivos. FODMAP significa Oligosacáridos, Disacáridos, Monosacáridos y Polioles Fermentables, que son tipos de carbohidratos que pueden ser mal absorbidos en el intestino delgado.",
    link: "https://www.monashfodmap.com/about-fodmap-and-ibs/",
  },
  {
    question: "¿Cuánto tiempo dura típicamente la dieta FODMAP?",
    answer:
      "La dieta FODMAP generalmente consta de tres fases: eliminación (2-6 semanas), reintroducción (6-8 semanas) y personalización (continua). Todo el proceso suele durar alrededor de 3-4 meses, pero puede variar dependiendo de las necesidades y respuestas individuales.",
  },
  {
    question: "¿Puedo seguir la dieta FODMAP si soy vegetariano o vegano?",
    answer:
      "Sí, es posible seguir la dieta FODMAP siendo vegetariano o vegano, pero requiere una planificación cuidadosa para asegurar una nutrición adecuada. Muchas fuentes de proteínas vegetales son altas en FODMAPs, por lo que se recomienda trabajar con un dietista registrado para ayudar a equilibrar tus necesidades dietéticas y restricciones.",
  },
  {
    question: "¿Tendré que seguir la dieta FODMAP para siempre?",
    answer:
      "No, la dieta FODMAP no está diseñada para seguirse a largo plazo en su fase restrictiva. El objetivo es identificar tus alimentos desencadenantes específicos y luego reintroducir tantos alimentos como sea posible mientras se manejan los síntomas. Muchas personas descubren que pueden tolerar algunos alimentos altos en FODMAP en pequeñas cantidades después de completar las fases de la dieta.",
  },
];

const FAQEs = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Preguntas Frecuentes</h3>
        <h4 className="text-muted-foreground">
          ¿No encuentras la respuesta que buscas? Contacta a nuestro equipo de soporte al cliente.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Aprende más <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQEs;