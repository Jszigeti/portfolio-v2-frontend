import { useLocation } from "react-router";
import { NavHashLink } from "react-router-hash-link";

export default function Logo() {
  const location = useLocation();

  return (
    <NavHashLink
      smooth
      to={location.pathname.startsWith("/admin") ? "/" : "#home"}
      rel="noopener noreferrer"
      className="text-muted hover:text-primary transition-colors duration-300 hover:scale-110"
    >
      <img
        src="/assets/logo.webp"
        width={60}
        className="transition-transform hover:scale-110"
        alt="Logo JS"
      />
    </NavHashLink>
  );
}
