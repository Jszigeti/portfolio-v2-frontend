import SectionTitle from "@/components/ui/section-title";
import SectionLayout from "../../ui/section-layout";
import Presentation from "./Presentation";

const About = () => {
  return (
    <SectionLayout sectionId="about">
      <SectionTitle
        title="Donner du sens à chaque ligne de code"
        subtitle="Ma méthodologie 🔍"
      />
      <Presentation />
    </SectionLayout>
  );
};

export default About;
