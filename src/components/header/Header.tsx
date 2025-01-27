import { IconLock } from "@tabler/icons-react";
import { NavLink, useLocation } from "react-router";
import Logo from "./Logo";

const Header = ({ className }: { className?: string }) => {
  const location = useLocation();

  return (
    <header className={`fixed top-0 z-50 w-full ${className}`}>
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo />
        <NavLink
          to="/admin"
          rel="noopener noreferrer"
          className={`${
            location.pathname.startsWith("/admin") ? "hidden" : ""
          } text-muted hover:text-primary transition-colors duration-300 hover:scale-110`}
        >
          <IconLock size={35} />
          <span className="sr-only">Lien vers le portail admin</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
