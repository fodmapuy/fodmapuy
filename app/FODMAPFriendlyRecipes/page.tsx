import { Main, Section, Container } from "@/components/craft";
import FodmapFriendlyRecipes from "@/components/home-page/fodmapfriendlyrecipes";

export default function AboutUsPage() {
  return (
    <Main>
      <Section>
        <Container>
          <FodmapFriendlyRecipes />
        </Container>
      </Section>
    </Main>
  );
}
