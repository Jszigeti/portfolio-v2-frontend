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
      className="lg:mx-auto lg:w-1/2 mt-3 lg:mt-6"
      target={newTab ? "_blank" : "_self"}
    >
      <Button
        size="lg"
        className="text-xl hover:scale-105 transition-transform duration-300 w-full z-50"
      >
        {content}
      </Button>
    </NavHashLink>
  );
};

export default CtaButton;
