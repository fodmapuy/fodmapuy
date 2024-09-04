import AnimatedBackground from "@/components/core/animated-background";

interface AnimatedCardBackgroundHoverProps {
  language: 'en' | 'es';
}

export function AnimatedCardBackgroundHover({ language }: AnimatedCardBackgroundHoverProps) {
  const ITEMS_EN = [
    {
      id: 1,
      title: "Tailored Nutrition",
      description: "Customized to your needs and preferences",
    },
    {
      id: 2,
      title: "Variety",
      description: "Diverse, exciting meal options",
    },
    {
      id: 3,
      title: "Simplicity",
      description: "Easy-to-follow recipes and instructions",
    },
    {
      id: 4,
      title: "Progress Tracking",
      description: "Monitor your digestive health improvements",
    },
    {
      id: 5,
      title: "Flexibility",
      description: "Adaptable plans for your lifestyle",
    },
    {
      id: 6,
      title: "Expert Support",
      description: "Guidance from FODMAP-trained dietitians",
    },
  ];

  const ITEMS_ES = [
    {
      id: 1,
      title: "Nutrición Personalizada",
      description: "Adaptada a tus necesidades y preferencias",
    },
    {
      id: 2,
      title: "Variedad",
      description: "Opciones de comidas diversas y emocionantes",
    },
    {
      id: 3,
      title: "Simplicidad",
      description: "Recetas e instrucciones fáciles de seguir",
    },
    {
      id: 4,
      title: "Seguimiento del Progreso",
      description: "Monitorea las mejoras en tu salud digestiva",
    },
    {
      id: 5,
      title: "Flexibilidad",
      description: "Planes adaptables a tu estilo de vida",
    },
    {
      id: 6,
      title: "Soporte Experto",
      description: "Orientación de dietistas capacitados en FODMAP",
    },
  ];

  const ITEMS = language === 'en' ? ITEMS_EN : ITEMS_ES;

  return (
    <div className="grid grid-cols-2 p-10 md:grid-cols-3">
      <AnimatedBackground
        className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {ITEMS.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <div className="flex select-none flex-col space-y-1 p-4">
              <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
}
