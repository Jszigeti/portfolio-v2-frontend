import useSectionObserver from "@/services/hooks/useSectionObserver";
import {
  IconHome,
  IconUserCircle,
  IconBriefcase2,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { NavHashLink } from "react-router-hash-link";

const MobileNav = () => {
  const sections = ["home", "about", "projects", "contact"];
  const activeSection = useSectionObserver(sections);

  return (
    <div className="fixed bottom-3 left-1/2 z-[100] transform -translate-x-1/2 flex items-center space-x-4 bg-background p-4 rounded-full shadow-lg lg:hidden">
      <NavHashLink
        smooth
        to="#home"
        className={`${
          activeSection === "home" ? "text-primary scale-110" : "text-muted"
        } transition-colors duration-300 hover:scale-110`}
      >
        <IconHome size={35} />
        <span className="sr-only">Lien vers l'accueil</span>
      </NavHashLink>
      <NavHashLink
        smooth
        to="#about"
        className={`${
          activeSection === "about" ? "text-primary scale-110" : "text-muted"
        } transition-colors duration-300 hover:scale-110`}
      >
        <IconUserCircle size={35} />
        <span className="sr-only">Lien vers la section "A propos"</span>
      </NavHashLink>
      <NavHashLink
        smooth
        to="#projects"
        className={`${
          activeSection === "projects" ? "text-primary scale-110" : "text-muted"
        } transition-colors duration-300 hover:scale-110`}
      >
        <IconBriefcase2 size={35} />
        <span className="sr-only">Lien vers la section "Projets"</span>
      </NavHashLink>
      <NavHashLink
        smooth
        to="#contact"
        className={`${
          activeSection === "contact" ? "text-primary scale-110" : "text-muted"
        } transition-colors duration-300 hover:scale-110`}
      >
        <IconMail size={35} />
        <span className="sr-only">Lien vers la section "Contact"</span>
      </NavHashLink>
      <div className="w-px h-8 bg-muted"></div>
      <a
        href="https://github.com/Jszigeti"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted transition-colors duration-300 hover:scale-110"
      >
        <IconBrandGithub size={35} />
        <span className="sr-only">Lien Github</span>
      </a>
      <a
        href="https://linkedin.com/in/jonas-szigeti"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted transition-colors duration-300 hover:scale-110"
      >
        <IconBrandLinkedin size={35} />
        <span className="sr-only">Lien LinkedIn</span>
      </a>
    </div>
  );
};

export default MobileNav;
