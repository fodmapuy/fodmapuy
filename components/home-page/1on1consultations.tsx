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
            Contact
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">One-on-One Consultations</h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Embark on your FODMAP journey with personalized guidance from our
          expert nutritionists. Our One-on-One Consultations provide you with
          tailored advice and support to effectively manage your digestive
          health and improve your quality of life.
          <br />
          <br />
          What You Can Expect:
          <br />
          <br />
          1. Comprehensive Initial Assessment - In-depth discussion of your
          medical history and symptoms - Detailed analysis of your current diet
          and lifestyle - Identification of potential trigger foods and
          nutritional gaps
          <br />
          <br />
          2. Customized FODMAP Strategy - Personalized plan for the elimination
          and reintroduction phases - Strategies to ensure nutritional adequacy
          during the process - Practical tips for implementing the FODMAP diet
          in your daily life
          <br />
          <br />
          3. Regular Progress Check-ins - Scheduled follow-up sessions to
          monitor your progress - Adjustments to your plan based on your
          responses and challenges - Celebration of improvements and
          problem-solving for any setbacks
          <br />
          <br />
          4. Expert Guidance on Food Reintroduction - Step-by-step support for
          safely reintroducing FODMAP groups - Help in identifying your specific
          triggers and tolerances - Assistance in developing a long-term,
          sustainable eating plan
          <br />
          <br />
          5. Practical Lifestyle Advice - Strategies for eating out and
          socializing while on the FODMAP diet - Guidance on reading food labels
          and finding FODMAP-friendly products - Tips for managing stress and
          other factors that may impact digestive health
          <br />
          <br />
          Why Choose Our One-on-One Consultations?
          <br />
          <br />
          - Expertise: Work directly with FODMAP-trained nutritionists and
          dietitians - Personalization: Receive advice tailored to your unique
          needs and lifestyle - Continuous Support: Get answers to your
          questions and concerns in real-time - Holistic Approach: Address not
          just diet, but all aspects of digestive health - Empowerment: Gain the
          knowledge and tools to manage your symptoms long-term
          <br />
          <br />
          Our goal is to empower you with the knowledge and tools to take
          control of your digestive health. Start your personalized FODMAP
          journey today and take the first step towards a more comfortable,
          confident you!
        </h3>
      </Container>
    </Section>
  );
};

export default Consultations;
