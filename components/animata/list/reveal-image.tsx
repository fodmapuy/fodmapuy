import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";
  return (
    <div className="group relative h-fit w-full overflow-visible py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-foreground transition-all duration-500 group-hover:opacity-40 text-center">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <Image
            alt={images[1].alt}
            src={images[1].src}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <Image
            alt={images[0].alt}
            src={images[0].src}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "We're here to guide you through the FODMAP journey",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Helping you rediscover",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "The joy of eating without discomfort.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-1 rounded-sm bg-background px-8 py-4 w-full my-16">
      <h3 className="text-sm font-black uppercase text-muted-foreground text-center w-full">
        We are here.
      </h3>
      {items.map((item, index) => (
        <RevealImageListItem
          key={index}
          text={item.text}
          images={item.images}
        />
      ))}
    </div>
  );
}
