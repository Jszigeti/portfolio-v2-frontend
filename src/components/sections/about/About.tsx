import SectionTitle from "@/components/ui/section-title";
import SectionLayout from "../../ui/section-layout";
import Presentation from "./Presentation";

const About = () => {
  return (
    <SectionLayout sectionId="about">
      <SectionTitle
        title="Au service de vos idées"
        subtitle="À propos de moi"
      />
      <Presentation />
    </SectionLayout>
  );
};

export default About;
