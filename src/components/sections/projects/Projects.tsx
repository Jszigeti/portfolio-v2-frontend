import SectionLayout from "../SectionLayout";
import { ExpandableCardDemo } from "./ProjectsDisplay";

const Projects = () => {
  return (
    <SectionLayout sectionId="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 md:mb-8 lg:mb-12 xl:mb-16">
        Mes derniers <span className="text-primary">projets</span>
      </h2>
      <ExpandableCardDemo />
    </SectionLayout>
  );
};

export default Projects;
