import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { Coins, ArrowRight } from "lucide-react";
import { DialogBasicOne } from "./dialogsquare";
import { TabsTransitionPanel } from "@/components/home-page/transitionpanel";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "0",
    href: "/personalizedmealplans",
    description: "Personalized meal plans",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "1",
    href: "/1on1consultations",
    description: "One-on-one consultations",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "2",
    href: "/FODMAPFriendlyRecipes",
    description: "Delicious low FODMAP recipes",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "3",
    href: "/",
    description: "Educational resources on the FODMAP diet",
    cta: "Learn More",
  },
];

const Feature5 = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Services Offered</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>Steps: </Balancer>
          </h4>
          <TabsTransitionPanel />
          {/* <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default Feature5;
