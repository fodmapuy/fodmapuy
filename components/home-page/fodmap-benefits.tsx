// File: components/home-page/fodmap-benefits.tsx
"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import FODMAPBenefitsStack from "./fodmap-benefits-stack";

const FODMAPBenefits = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/contact">
            Contact
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">Benefits of the FODMAP Diet</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          The FODMAP diet has been scientifically proven to provide significant
          benefits for people with Irritable Bowel Syndrome (IBS) and other
          digestive disorders. Explore the key advantages below:
        </h3>

        <FODMAPBenefitsStack />

        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          It&apos;s important to note that the FODMAP diet should be undertaken with
          the guidance of a healthcare professional or registered dietitian.
          They can ensure you&apos;re following the diet correctly and getting all
          the nutrients you need.
        </h3>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </Container>
    </Section>
  );
};

export default FODMAPBenefits;
