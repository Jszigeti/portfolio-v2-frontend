import Portrait from "./Portrait";
import CtaButton from "@/components/ui/cta-button";

export default function Presentation() {
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-4 lg:flex-row lg:justify-around md:items-center">
        <Portrait />
        <div className="flex flex-col lg:w-1/2 justify-between gap-2 md:gap-4 xs:text-base text-lg">
          <p>
            Développeur web{" "}
            <span className="text-primary font-semibold">Full Stack</span>, je
            conçois des{" "}
            <span className="text-primary font-semibold">
              applications performantes
            </span>{" "}
            et{" "}
            <span className="text-primary font-semibold">
              interfaces modernes
            </span>
            . Spécialisé en{" "}
            <span className="text-primary font-semibold">React</span>,{" "}
            <span className="text-primary font-semibold">NestJS</span> et{" "}
            <span className="text-primary font-semibold">TypeScript</span>, je
            développe des solutions <strong>scalables</strong> et{" "}
            <strong>optimisées pour l’expérience utilisateur</strong>.
          </p>
          <p>
            Expérience en{" "}
            <strong>applications SaaS, plateformes collaboratives</strong> et{" "}
            <strong>microservices</strong>. Passionné par l’open-source, je crée
            des <span className="text-primary font-semibold">starter kits</span>{" "}
            et des{" "}
            <span className="text-primary font-semibold">packages npm</span>{" "}
            pour améliorer la productivité des développeurs.
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-center md:flex-row md:gap-4">
        <CtaButton
          linkTo={`${import.meta.env.VITE_API_BASE_URL}CV_Jonas_Szigeti.pdf`}
          content="Voir mon CV"
          newTab
        />
        <CtaButton linkTo="#contact" content="Me contacter" />
      </div>
      <div className="md:hidden">
        <CtaButton
          linkTo={`${import.meta.env.VITE_API_BASE_URL}CV_Jonas_Szigeti.pdf`}
          content="Voir mon CV"
          newTab
        />
      </div>
    </>
  );
}
