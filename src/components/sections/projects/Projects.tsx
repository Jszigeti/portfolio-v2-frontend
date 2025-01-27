import SectionTitle from "@/components/ui/section-title";
import SectionLayout from "../../ui/section-layout";
import { ExpandableCardDemo } from "./ProjectsDisplay";

const Projects = () => {
  return (
    <SectionLayout sectionId="projects">
      <SectionTitle subtitle="Mes projets" title="Réalisations récentes" />
      <ExpandableCardDemo />
    </SectionLayout>
  );
};

export default Projects;
