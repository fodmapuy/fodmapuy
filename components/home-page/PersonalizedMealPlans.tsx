import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import FlippingCard from "../animata/list/flipping-cards";

const Consultations = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link
            className="group flex items-center gap-1"
            href="https://9d8.dev"
          >
            Contacto
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">Personalized Meal Plans</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Say goodbye to digestive discomfort and hello to delicious,
          gut-friendly meals! Our Personalized Meal Plans are designed to take
          the guesswork out of following the FODMAP diet, ensuring you enjoy
          every bite while supporting your digestive health.
          <br />
          <br />
          What You Get:
          <br />
          <br />
          1. Custom-Designed Meal Plans - Tailored to your specific dietary
          needs and preferences - Considers your lifestyle, cooking skills, and
          time constraints - Balanced nutrition to support overall health
          <br />
          <br />
          2. Gradual FODMAP Introduction - Step-by-step guidance through the
          elimination and reintroduction phases - Carefully planned progression
          to identify your personal triggers - Gentle approach to minimize
          discomfort during the process
          <br />
          <br />
          3. Diverse and Delicious Recipes - Wide variety of flavorful, low
          FODMAP meals - Options for breakfast, lunch, dinner, and snacks -
          Includes treats and desserts to satisfy your cravings
          <br />
          <br />
          4. Flexible Options - Plans for various dietary preferences
          (vegetarian, vegan, gluten-free, etc.) - Adjustable serving sizes for
          individuals, couples, or families - Easy-to-follow weekly shopping
          lists
          <br />
          <br />
          5. Nutritional Guidance - Detailed nutritional information for each
          meal - Tips for meeting your daily nutritional requirements -
          Suggestions for FODMAP-friendly supplements if needed
          <br />
          <br />
          How It Works:
          <br />
          <br />
          1. Initial Consultation: We&apos;ll discuss your symptoms, food
          preferences, and lifestyle. 2. Customization: Our FODMAP-trained
          nutritionists create your personalized plan. 3. Implementation: You&apos;ll
          receive weekly meal plans, recipes, and shopping lists. 4. Support:
          Regular check-ins to adjust your plan and answer any questions. 5.
          Progress: As you identify triggers, we&apos;ll help you expand your diet
          safely.
          <br />
          <br />
          Why Choose Our Personalized Meal Plans?
          <br />
          <br />
          - Expert-Designed: Created by registered dietitians specializing in
          FODMAP and digestive health - Stress-Free: No more worrying about what
          to eat or if it will trigger symptoms - Time-Saving: Streamlined meal
          prep and planning frees up your time - Enjoyable: Discover new,
          delicious recipes that love you back - Effective: See improvements in
          your symptoms while enjoying a varied, nutritious diet
          <br />
          <br />
          Ready to transform your relationship with food? Start your journey to
          digestive comfort today!
        </h3>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>

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
      </Container>
    </Section>
  );
};

export default Consultations;
