import Portrait from "./Portrait";
import CtaButton from "@/components/ui/cta-button";

export default function Presentation() {
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-4 lg:flex-row lg:justify-around md:items-center">
        <Portrait />
        <div className="flex flex-col lg:w-1/2 justify-between gap-2 md:gap-4 xs:text-base text-lg">
          <p>
            Je m'appelle Jonas,{" "}
            <span className="text-primary font-semibold">
              développeur web freelance
            </span>{" "}
            passionné par la création de{" "}
            <span className="text-primary font-semibold">
              sites web modernes
            </span>{" "}
            et{" "}
            <span className="text-primary font-semibold">
              applications performantes
            </span>
            . Depuis mon adolescence, je me consacre à transformer des idées en{" "}
            <span className="text-primary font-semibold">
              solutions numériques innovantes
            </span>
            .
          </p>
          <p>
            Je m’investis aussi dans{" "}
            <span className="text-primary font-semibold">l’open-source</span>,
            en développant des outils comme des{" "}
            <span className="text-primary font-semibold">starter kits</span> ou
            des <span className="text-primary font-semibold">packages npm</span>{" "}
            pour simplifier le travail des développeurs et améliorer leur
            productivité.
          </p>
          <p className="hidden md:block">
            En dehors du développement, je me passionne pour le{" "}
            <span className="text-primary font-semibold">rétrogaming</span>, les{" "}
            <span className="text-primary font-semibold">jeux de gestion</span>{" "}
            et la{" "}
            <span className="text-primary font-semibold">
              création de projets créatifs
            </span>
            . Ces activités nourrissent ma curiosité et ma créativité au
            quotidien.
          </p>
        </div>
      </div>
      <CtaButton
        linkTo={`${import.meta.env.VITE_API_BASE_URL}CV_Jonas_Szigeti.pdf`}
        content="Découvrez mon parcours"
        newTab
      />
    </>
  );
}
