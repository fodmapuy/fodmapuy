import AnimatedBackground from "@/components/core/animated-background";

interface AnimatedCardBackgroundHover2Props {
  language: 'en' | 'es';
}

export function AnimatedCardBackgroundHover2({ language }: AnimatedCardBackgroundHover2Props) {
  const ITEMS_EN = [
    {
      id: 1,
      title: "Expert Support",
      description: "Work directly with FODMAP-trained dietitians",
    },
    {
      id: 2,
      title: "Customized Approach",
      description:
        "Tailored advice based on your unique symptoms and lifestyle",
    },
    {
      id: 3,
      title: "Comprehensive Assessment",
      description: "In-depth analysis of your diet and digestive health",
    },
    {
      id: 4,
      title: "Step-by-Step Guidance",
      description: "Navigate the FODMAP diet phases with confidence",
    },
    {
      id: 5,
      title: "Ongoing Support",
      description: "Regular check-ins to monitor progress and adjust your plan",
    },
    {
      id: 6,
      title: "Education",
      description:
        "Learn to identify trigger foods and expand your diet safely",
    },
  ];

  const ITEMS_ES = [
    {
      id: 1,
      title: "Soporte Experto",
      description: "Trabaja directamente con dietistas capacitados en FODMAP",
    },
    {
      id: 2,
      title: "Enfoque Personalizado",
      description:
        "Consejos adaptados a tus síntomas y estilo de vida únicos",
    },
    {
      id: 3,
      title: "Evaluación Integral",
      description: "Análisis en profundidad de tu dieta y salud digestiva",
    },
    {
      id: 4,
      title: "Guía Paso a Paso",
      description: "Navega las fases de la dieta FODMAP con confianza",
    },
    {
      id: 5,
      title: "Apoyo Continuo",
      description: "Chequeos regulares para monitorear el progreso y ajustar tu plan",
    },
    {
      id: 6,
      title: "Educación",
      description:
        "Aprende a identificar alimentos desencadenantes y expandir tu dieta de forma segura",
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
