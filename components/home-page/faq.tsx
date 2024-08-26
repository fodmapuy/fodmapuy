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
    question: "What is the FODMAP diet?",
    answer:
      "The FODMAP diet is an elimination diet that helps identify trigger foods for people with irritable bowel syndrome (IBS) and other digestive disorders. FODMAP stands for Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols, which are types of carbohydrates that can be poorly absorbed in the small intestine.",
    link: "https://www.monashfodmap.com/about-fodmap-and-ibs/",
  },
  {
    question: "How long does the FODMAP diet typically last?",
    answer:
      "The FODMAP diet typically consists of three phases: elimination (2-6 weeks), reintroduction (6-8 weeks), and personalization (ongoing). The entire process usually takes about 3-4 months, but can vary depending on individual needs and responses.",
  },
  {
    question: "Can I follow the FODMAP diet if I'm vegetarian or vegan?",
    answer:
      "Yes, it's possible to follow the FODMAP diet as a vegetarian or vegan, but it requires careful planning to ensure adequate nutrition. Many plant-based protein sources are high in FODMAPs, so working with a registered dietitian is recommended to help balance your dietary needs and restrictions.",
  },
  {
    question: "Will I need to follow the FODMAP diet forever?",
    answer:
      "No, the FODMAP diet is not meant to be followed long-term in its restrictive phase. The goal is to identify your specific trigger foods and then reintroduce as many foods as possible while managing symptoms. Many people find they can tolerate some high FODMAP foods in small amounts after completing the diet phases.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
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
                      Learn more <ArrowUpRight className="ml-1" size="16" />
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

export default FAQ;
