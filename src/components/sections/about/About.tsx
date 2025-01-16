import SectionLayout from "../SectionLayout";
import Presentation from "./Presentation";

const About = () => {
  return (
    <SectionLayout sectionId="about">
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 md:mb-8 lg:mb-12 xl:mb-16">
        À propos de <span className="text-primary">moi</span>
      </h2>
      <Presentation />
    </SectionLayout>
  );
};

export default About;
