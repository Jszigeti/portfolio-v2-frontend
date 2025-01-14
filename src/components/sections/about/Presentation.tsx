import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Portrait from "./Portrait";

export default function Presentation() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-around md:items-center">
        <Portrait />
        <div className="flex flex-col lg:w-1/2 justify-between md:gap-4 lg:gap-8">
          <p className="text-sm md:text-md lg:text-lg">
            <span className="text-primary font-semibold">Salut ! 👋</span>
            <br />
            <br />
            Je m&apos;appelle Jonas,{" "}
            <span className="text-primary font-semibold">
              développeur web passionné
            </span>{" "}
            par la création d&apos;applications modernes. Depuis mon
            adolescence, je me suis plongé dans le code, et aujourd&apos;hui, je
            conçois des{" "}
            <span className="text-primary font-semibold">
              solutions numériques intuitives et performantes
            </span>
            .
          </p>
          <p className="text-sm md:text-md lg:text-lg">
            J'aime aussi développer des{" "}
            <span className="text-primary font-semibold">
              outils open-source
            </span>
            , comme des starter kits, ou des{" "}
            <span className="text-primary font-semibold">packages npm</span>{" "}
            pour faciliter la vie des développeurs.
          </p>
          <p className="text-sm md:text-md lg:text-lg">
            Quand je ne suis pas en train de coder, je me passionne pour le{" "}
            <span className="text-primary font-semibold">rétrogaming</span>, les{" "}
            <span className="text-primary font-semibold">jeux de gestion</span>{" "}
            et la{" "}
            <span className="text-primary font-semibold">
              création de projets innovants
            </span>
            .
          </p>
        </div>
      </div>
      <NavLink to={`/cv`} target="_blank" className="md:mx-auto md:w-1/2">
        <Button
          size="lg"
          className="text-xl hover:scale-105 transition-transform duration-300 w-full z-50"
        >
          Voir mon CV
        </Button>
      </NavLink>
    </>
  );
}
