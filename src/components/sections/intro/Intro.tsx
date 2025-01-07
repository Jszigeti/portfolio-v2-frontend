import { Button } from "../../ui/button";
import SectionLayout from "../SectionLayout";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { NavHashLink } from "react-router-hash-link";

const Intro = () => {
  return (
    <AuroraBackground>
      <SectionLayout sectionId="home">
        <p className="font-bold text-md md:text-lg -mb-6">Développeur web</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Jonas Szigeti
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold">
          Je conçois des applications web modernes.
        </h2>
        <p className="text-lg text-justify">
          Je suis un{" "}
          <span className="text-primary font-semibold">développeur web</span>{" "}
          spécialisé dans la création (et parfois la conception) d'
          <span className="text-primary font-semibold">
            expériences numériques
          </span>{" "}
          soignées. Actuellement, je me concentre sur le développement de{" "}
          <span className="text-primary font-semibold">
            produits accessibles
          </span>{" "}
          et{" "}
          <span className="text-primary font-semibold">
            centrés sur l'utilisateur
          </span>
          .
        </p>
        <NavHashLink smooth to="#contact" className="md:mx-auto md:w-1/2">
          <Button
            size="lg"
            className="text-xl hover:scale-105 transition-transform duration-300 w-full z-50"
          >
            Me contacter
          </Button>
        </NavHashLink>
      </SectionLayout>
    </AuroraBackground>
  );
};

export default Intro;
