import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { NavLink } from "react-router";

const LeftNav = () => {
  return (
    <div className="hidden lg:flex fixed left-6 bottom-0 flex-col items-center space-y-4 z-[100]">
      <NavLink
        to="https://github.com/Jszigeti"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-primary transition-colors duration-300 hover:scale-110"
      >
        <IconBrandGithub size={35} />
        <span className="sr-only">Lien Github</span>
      </NavLink>
      <NavLink
        to="https://linkedin.com/in/jonas-szigeti"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-primary transition-colors duration-300 hover:scale-110"
      >
        <IconBrandLinkedin size={35} />
        <span className="sr-only">Lien LinkedIn</span>
      </NavLink>
      <div className="w-px h-64 bg-muted"></div>
    </div>
  );
};

export default LeftNav;
