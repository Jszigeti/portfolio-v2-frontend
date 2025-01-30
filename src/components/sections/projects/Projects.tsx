import SectionTitle from "@/components/ui/section-title";
import SectionLayout from "../../ui/section-layout";
import { ExpandableCardDemo } from "./ProjectsDisplay";

const Projects = () => {
  return (
    <SectionLayout sectionId="projects">
      <SectionTitle subtitle="Mes projets ✨" title="Réalisations récentes" />
      <p className="xs:hidden text-lg block">
        Découvrez mes développements récents, alliant{" "}
        <span className="text-primary font-semibold">performance</span>,{" "}
        <span className="text-primary font-semibold">scalabilité</span> et{" "}
        <span className="text-primary font-semibold">
          expérience utilisateur
        </span>
        .
      </p>
      <ExpandableCardDemo />
    </SectionLayout>
  );
};

export default Projects;
