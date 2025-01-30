import Portrait from "./Portrait";
import CtaButton from "@/components/ui/cta-button";
import {
  IconBrandDocker,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";
import NestJSIcon from "@/components/ui/nestjs-icon";

export default function Presentation() {
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-4 lg:flex-row lg:justify-around md:items-center">
        <Portrait />
        <div className="flex flex-col lg:w-1/2 justify-between gap-2 text-base md:text-lg">
          <p className="sm:hidden">
            <span className="text-primary font-semibold">
              Développer, c'est avant tout répondre à un besoin réel.
            </span>{" "}
            J’analyse les besoins, conçois une architecture propre et optimise
            chaque détail pour un produit{" "}
            <strong>performant et évolutif</strong>.
          </p>
          <p className="hidden sm:block">
            Développer, ce n’est pas juste coder, c’est{" "}
            <span className="text-primary font-semibold">
              concevoir des solutions adaptées
            </span>{" "}
            aux utilisateurs. Mon approche repose sur :
          </p>
          <ul className="list-disc pl-5 hidden sm:block">
            <li>
              <strong>Comprendre avant de coder</strong> – L’analyse des besoins
              guide la solution.
            </li>
            <li>
              <strong>Construire avec précision</strong> – Une architecture
              propre, scalable et maintenable.
            </li>
            <li>
              <strong>Optimiser en continu</strong> – Performance et sécurité
              comme standards.
            </li>
          </ul>
          <p>
            J’utilise{" "}
            <span className="text-primary font-semibold">
              React, NestJS, TypeScript
            </span>{" "}
            pour concevoir des{" "}
            <span className="text-primary font-semibold">
              interfaces intuitives
            </span>{" "}
            et des{" "}
            <span className="text-primary font-semibold">
              applications robustes
            </span>
            , pensées pour{" "}
            <span className="text-primary font-semibold">
              la fluidité et l'efficacité
            </span>
            .
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <IconBrandTypescript size={40} className="text-primary" />
            <IconBrandReact size={40} className="text-primary" />
            <IconBrandNextjs size={40} className="text-primary" />
            <NestJSIcon className="w-[40px] h-[40px]" color="fill-primary" />
            <IconBrandDocker size={40} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:gap-4 md:flex-row justify-center">
        <CtaButton
          linkTo={`${import.meta.env.VITE_API_BASE_URL}CV_Jonas_Szigeti.pdf`}
          content="Voir mon CV 📄"
          newTab
        />
        <CtaButton linkTo="#projects" content="Voir mes projets 🚀" />
      </div>
      <div className="sm:hidden">
        <CtaButton
          linkTo={`${import.meta.env.VITE_API_BASE_URL}CV_Jonas_Szigeti.pdf`}
          content="Voir mon CV 📄"
          newTab
        />
      </div>
    </>
  );
}
