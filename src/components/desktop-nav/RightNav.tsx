import useSectionObserver from "@/services/hooks/useSectionObserver";
import {
  IconHome,
  IconUserCircle,
  IconBriefcase2,
  IconMail,
} from "@tabler/icons-react";
import { NavHashLink } from "react-router-hash-link";

const RightNav = () => {
  const sections = ["home", "about", "projects", "contact"];
  const activeSection = useSectionObserver(sections);

  return (
    <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center space-y-4 z-[100]">
      <NavHashLink
        smooth
        to="#home"
        rel="noopener noreferrer"
        className={`${
          activeSection === "home"
            ? "text-primary scale-110"
            : "text-muted-foreground"
        } hover:text-primary transition-colors duration-300 hover:scale-110`}
      >
        <IconHome size={35} />
        <span className="sr-only">Lien vers l'accueil</span>
      </NavHashLink>
      <NavHashLink
        smooth
        to="#about"
        rel="noopener noreferrer"
        className={`${
          activeSection === "about"
            ? "text-primary scale-110"
            : "text-muted-foreground"
        } hover:text-primary transition-colors duration-300 hover:scale-110`}
      >
        <IconUserCircle size={35} />
        <span className="sr-only">Lien vers la section "A propos"</span>
      </NavHashLink>
      <NavHashLink
        smooth
        to="#projects"
        rel="noopener noreferrer"
        className={`${
          activeSection === "projects"
            ? "text-primary scale-110"
            : "text-muted-foreground"
        } hover:text-primary transition-colors duration-300 hover:scale-110`}
      >
        <IconBriefcase2 size={35} />
        <span className="sr-only">Lien vers la section "Projets"</span>
      </NavHashLink>
      <NavHashLink
        smooth
        to="#contact"
        rel="noopener noreferrer"
        className={`${
          activeSection === "contact"
            ? "text-primary scale-110"
            : "text-muted-foreground"
        } hover:text-primary transition-colors duration-300 hover:scale-110`}
      >
        <IconMail size={35} />
        <span className="sr-only">Lien vers la section "Contact"</span>
      </NavHashLink>
      <div className="w-px h-64 bg-muted-foreground"></div>
    </div>
  );
};

export default RightNav;
