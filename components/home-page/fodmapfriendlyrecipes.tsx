import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import FlippingCard from "../animata/list/flipping-cards";

const FodmapFriendlyRecipes = () => {
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
        <h1 className="!mb-0">FODMAP-Friendly Recipes</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Discover a world of delicious, gut-friendly cuisine with our extensive
          collection of FODMAP-friendly recipes. Say goodbye to bland diets and
          hello to flavorful, satisfying meals that won't upset your digestive
          system.
          <br />
          <br />
          What Our Recipe Collection Offers:
          <br />
          <br />
          1. Diverse Culinary Options - Breakfast, lunch, dinner, and snack
          recipes - Appetizers, main courses, sides, and desserts - Cuisines
          from around the world, adapted to be FODMAP-friendly
          <br />
          <br />
          2. Easy-to-Follow Instructions - Step-by-step cooking guides - Clear,
          concise directions suitable for all cooking skill levels - Tips and
          tricks for perfecting each dish
          <br />
          <br />
          3. Nutritional Information - Detailed breakdown of macronutrients and
          calories - Identification of potential trigger ingredients -
          Suggestions for substitutions to suit individual tolerances
          <br />
          <br />
          4. Flexible Meal Planning - Mix-and-match recipes for varied weekly
          menus - Options for batch cooking and meal prep - Ideas for using
          leftovers creatively
          <br />
          <br />
          5. Special Dietary Considerations - Vegetarian and vegan
          FODMAP-friendly options - Gluten-free recipes for those with celiac
          disease or gluten sensitivity - Dairy-free alternatives for
          lactose-intolerant individuals
          <br />
          <br />
          Why You'll Love Our FODMAP-Friendly Recipes:
          <br />
          <br />
          - Taste: Proof that 'restricted' doesn't mean 'boring' – our recipes
          are full of flavor - Variety: Never get stuck in a food rut with our
          diverse recipe collection - Confidence: Know exactly what's in your
          food and how it fits into your FODMAP plan - Simplicity: Easy-to-find
          ingredients and straightforward cooking methods - Adaptability: Learn
          how to modify your favorite dishes to be FODMAP-friendly
          <br />
          <br />
          Whether you're a culinary novice or a seasoned chef, our
          FODMAP-friendly recipes will inspire you to create delicious,
          gut-friendly meals. Rediscover the joy of eating without fear of
          digestive discomfort!
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

export default FodmapFriendlyRecipes;
