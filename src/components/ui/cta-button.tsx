import { NavHashLink } from "react-router-hash-link";
import { Button } from "./button";

const CtaButton = ({
  linkTo,
  content,
  newTab = false,
}: {
  linkTo: string;
  content: string;
  newTab?: boolean;
}) => {
  return (
    <NavHashLink
      smooth
      to={linkTo}
      className="md:mx-auto md:w-1/2 mt-3 md:mt-6"
      target={newTab ? "_blank" : "_self"}
    >
      <Button
        size="lg"
        className="text-xl hover:scale-105 transition-transform duration-300 w-full z-50 hidden md:block"
      >
        {content}
      </Button>
      <Button
        size="default"
        className="text-lg hover:scale-105 transition-transform duration-300 w-full z-50 md:hidden"
      >
        {content}
      </Button>
    </NavHashLink>
  );
};

export default CtaButton;
