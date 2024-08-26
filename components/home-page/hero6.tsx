import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import FlippingCard from "../animata/list/flipping-cards";
import { FODMAPChart } from "@/components/ui/chartibs";

const Hero6 = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/contact">
            Contact
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">What are FODMAPs? </h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          FODMAPs are a collection of short chain carbohydrates and sugar
          alcohols found in foods naturally or as food additives. FODMAPs
          include fructose (when in excess of glucose), fructans,
          galacto-oligosaccharides (GOS), lactose and polyols (eg. sorbitol and
          mannitol).
          <br />
          <br /> A detailed description of each of these, including the foods
          they are found in, is provided below. A diet low in FODMAPs (“a Low
          FODMAP Diet”) is scientifically proven1, and is now used
          internationally, as the most effective dietary therapy for Irritable
          Bowel Syndrome (IBS) and symptoms of an irritable bowel. Such symptoms
          include excessive wind (flatus), abdominal pain, bloating and
          distension, nausea and changes in bowel habits (diarrhoea and/or
          constipation). A Low FODMAP Diet has also been proven, with solid
          scientific research2, to reduce symptoms of fatigue, lethargy and poor
          concentration. FODMAP is an acronym that stands for:
        </h3>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
        <FlippingCard
          list={[
            {
              font: "Fermentable",
              image:
                "https://images.unsplash.com/photo-1718889874468-3a56b84bb2e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "F",
            },
            {
              font: "Oligosaccharides",
              image:
                "https://plus.unsplash.com/premium_photo-1717916843908-7bbee16bad20?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "O",
            },
            {
              font: "Disaccharides",
              image:
                "https://images.unsplash.com/photo-1718743256288-e77382a88aaf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "D",
            },
            {
              font: "Monosaccharides",
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
              font: "Polyols",
              image:
                "https://images.unsplash.com/photo-1718397172443-48185c6bb4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "P",
            },
          ]}
        />
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          How do FODMAPs trigger symptoms of IBS?
          <br />
          <br /> When consumed in foods and/or drinks, FODMAPs can be poorly
          absorbed in the small intestine and pass through to the large
          intestine, where two major events happen:
          <br />
          <br />
          The FODMAPs are readily fermented by bacteria in the large bowel,
          contributing to the production of gas. The FODMAPs are also highly
          osmotic, meaning that they attract water into the large bowel, which
          can alter how quickly the bowels move.
          <br />
          <br />
          These two processes can then trigger symptoms including excess wind,
          abdominal bloating and distension, abdominal pain, constipation or
          diarrhoea, or a combination of both. Information about each FODMAP,
          and examples of foods that contain FODMAPs, are listed in the fodmap
          chart below:
        </h3>
        <FODMAPChart />
      </Container>
    </Section>
  );
};

export default Hero6;
