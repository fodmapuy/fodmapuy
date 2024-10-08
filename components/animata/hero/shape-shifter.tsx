import Marquee from "../container/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

interface ShapeShifterProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
  language?: "en" | "es"; // Add language prop
}

const images = [
  {
    src: "https://images.unsplash.com/photo-1465804575741-338df8554e02?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1495985812444-236d6a87bdd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    alt: "Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1611816055460-618287c870bd?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Image 5",
  },
];

const placeholderChildren = (
  <Marquee
    className="absolute inset-0 [--gap:2px]"
    applyMask={false}
    pauseOnHover
  >
    {images.map((image) => (
      <div
        key={image.src}
        className="relative"
        style={{ width: "300px", height: "200px" }}
      >
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>
    ))}
  </Marquee>
);

export default function ShapeShifter({
  prefix,
  suffix,
  className,
  containerClassName,
  children,
  language = "en", // Default to English
}: ShapeShifterProps) {
  // Define translations
  const translations = {
    en: {
      prefix: "Bloating",
      suffix: "Uneasyness",
    },
    es: {
      prefix: "Pesado",
      suffix: "Incomodidad",
    },
  };

  // Use the correct translation based on language
  const { prefix: defaultPrefix, suffix: defaultSuffix } =
    translations[language];

  return (
    <div
      className={cn(
        "text-md group flex min-h-96 w-full min-w-fit flex-row items-center justify-center gap-3 font-bold text-foreground transition-all sm:text-xl",
        containerClassName
      )}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="flex items-center justify-center">
        {prefix || defaultPrefix}
      </div>
      <div
        className={cn(
          "relative animate-[shape-shift] overflow-hidden p-0 transition-all ease-in-out direction-alternate repeat-infinite group-hover:[animation-play-state:paused]",
          className
        )}
        style={{
          animationDuration: "8s",
          width: "300px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center",
        }}
      >
        {children ?? placeholderChildren}
      </div>
      <div className="flex items-center justify-center">
        {suffix || defaultSuffix}
      </div>
    </div>
  );
}
