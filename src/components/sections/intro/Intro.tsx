import SectionTitle from "@/components/ui/section-title";
import SectionLayout from "../../ui/section-layout";
import { AuroraBackground } from "@/components/ui/aurora-background";
import CtaButton from "@/components/ui/cta-button";

const Intro = () => {
  return (
    <AuroraBackground>
      <SectionLayout sectionId="home">
        <SectionTitle
          title="Jonas Szigeti"
          subtitle="Développeur Web"
          secondSubtitle="Transformez vos idées en outils numériques performants"
          main
        />
        <p className="xs:text-base text-lg mt-2 md:mt-4">
          En tant que{" "}
          <span className="text-primary font-semibold">
            développeur web freelance
          </span>
          , je conçois des{" "}
          <span className="text-primary font-semibold">sites web</span> et{" "}
          <span className="text-primary font-semibold">
            applications modernes
          </span>{" "}
          adaptés à vos besoins. Mon objectif : vous fournir des solutions{" "}
          <span className="text-primary font-semibold">simples</span>,{" "}
          <span className="text-primary font-semibold">efficaces</span>, et{" "}
          <span className="text-primary font-semibold">accessibles</span>.
        </p>
        <p className="xs:text-base text-lg mt-1 md:mt-2">
          Que ce soit pour améliorer votre visibilité, automatiser vos tâches ou
          offrir une expérience unique à vos utilisateurs, je suis là pour vous
          accompagner à chaque étape de votre projet numérique.
        </p>
        <CtaButton linkTo="#services" content="Découvrez mes services" />
      </SectionLayout>
    </AuroraBackground>
  );
};

export default Intro;
