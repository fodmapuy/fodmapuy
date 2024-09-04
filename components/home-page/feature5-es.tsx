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
    description: "Planes de comidas personalizados",
    cta: "Aprende Más",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "1",
    href: "/1on1consultations",
    description: "Consultas personalizadas",
    cta: "Aprende Más",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "2",
    href: "/FODMAPFriendlyRecipes",
    description: "Deliciosas recetas bajas en FODMAP",
    cta: "Aprende Más",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "3",
    href: "/",
    description: "Recursos educativos sobre la dieta FODMAP",
    cta: "Aprende Más",
  },
];

const Feature5Es = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Servicios Ofrecidos</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>En qué consiste: </Balancer>
          </h4>
          <TabsTransitionPanel language="es" />
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

export default Feature5Es;
