import Image from "next/image";
import Link from "next/link";

import { Section, Container } from "@/components/craft";
import Logo from "@/public/logo.svg";

const Hero3 = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="m-auto flex h-full w-full max-w-5xl flex-col gap-8 px-4 py-4 md:px-6 md:py-10">
          {/* Large Text */}
          <h1 className="text-3xl font-normal tracking-tight md:text-6xl">
            Welcome to FODMAP
          </h1>
          {/* logo features */}
          {/* <div className="flex w-fit flex-wrap items-center gap-6 rounded-lg border p-4">
            <p>As seen in:</p>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
          </div> */}
          {/* End Text */}
          <div className="md:text-lg">
            {/* <p className="hidden md:block">
              Your Path to Digestive Wellness and Life Balance
            </p> */}
            <div className="grid gap-2 md:flex">
              <p className="opacity-50">Registra una consulta con nosotras. </p>
              <Link className="transition-all hover:opacity-70" href="#">
                Contacto -{`>`}
              </Link>
            </div>
            <p className="mt-4 text-xs">
              <span className="opacity-50">Available now online.</span> Tell us
              what you build next.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero3;
