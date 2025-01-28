import SectionTitle from "@/components/ui/section-title";
import SectionLayout from "../../ui/section-layout";
import { AuroraBackground } from "@/components/ui/aurora-background";
import CtaButton from "@/components/ui/cta-button";
import {
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";
import NestJSIcon from "@/components/ui/nestjs-icon";

const Intro = () => {
  return (
    <AuroraBackground>
      <SectionLayout sectionId="home">
        <SectionTitle
          title="Jonas Szigeti"
          subtitle="Développeur Web Full Stack"
          secondSubtitle="Concevoir, optimiser et innover"
          main
        />
        <p className="xs:text-base text-lg mt-2 md:mt-4">
          Développeur web spécialisé en{" "}
          <span className="text-primary font-semibold">React</span>,{" "}
          <span className="text-primary font-semibold">NestJS</span> et{" "}
          <span className="text-primary font-semibold">TypeScript</span>, je
          conçois des{" "}
          <span className="text-primary font-semibold">
            applications modernes
          </span>{" "}
          et des{" "}
          <span className="text-primary font-semibold">sites performants</span>.
          Mon approche repose sur la <strong>scalabilité</strong>, la{" "}
          <strong>maintenabilité</strong> et une{" "}
          <strong>expérience utilisateur fluide</strong>.
        </p>
        <p className="xs:text-base text-lg mt-1 md:mt-2 hidden md:block">
          Fort d’une expertise en{" "}
          <span className="text-primary font-semibold">
            développement full stack
          </span>
          , j'accompagne les entreprises dans la <strong>création</strong> et l’
          <strong>optimisation</strong> de leurs outils numériques, en
          garantissant <strong>qualité</strong>, <strong>performance</strong> et{" "}
          <strong>sécurité</strong>.
        </p>
        <div className="flex gap-4 md:gap-8 justify-around md:justify-center items-center">
          <IconBrandTypescript size={40} className="text-primary" />
          <IconBrandReact size={40} className="text-primary" />
          <IconBrandNextjs size={40} className="text-primary" />
          <NestJSIcon className="w-[40px] h-[40px]" color="fill-primary" />
          <IconBrandDocker size={40} className="text-primary" />
        </div>
        <CtaButton linkTo="#about" content="Découvrir mon parcours" />
      </SectionLayout>
    </AuroraBackground>
  );
};

export default Intro;
