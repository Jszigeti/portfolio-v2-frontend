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
          subtitle="Créer du sens à travers le code 🚀"
          secondSubtitle="Transformer des idées en outils performants"
          main
        />
        <p className="text-base mt-2 sm:hidden">
          <strong>
            Le développement web, c’est créer des outils qui ont un vrai impact.
          </strong>{" "}
          <span className="text-primary font-semibold">
            Simplicité, performance et expérience utilisateur
          </span>{" "}
          sont au cœur de mon approche.
        </p>
        <p className="xs:hidden text-lg mt-2">
          <strong>
            Le développement web est plus qu’une compétence, c’est un levier
            pour innover, optimiser et résoudre des problématiques réelles.
          </strong>{" "}
          Mon approche :{" "}
          <span className="text-primary font-semibold">
            concevoir des solutions digitales qui allient clarté, performance et
            impact
          </span>
          , en mettant toujours l’expérience utilisateur au centre.
        </p>
        <p className="text-base mt-1 sm:hidden">
          Chaque ligne de code{" "}
          <span className="text-primary font-semibold">
            simplifie, optimise ou fluidifie.
          </span>{" "}
          Un bon produit, c’est un produit utile et efficace.
        </p>
        <p className="xs:hidden text-lg mt-1">
          Chaque ligne de code a un objectif :{" "}
          <span className="text-primary font-semibold">
            simplifier un processus, fluidifier un parcours ou améliorer la
            productivité.
          </span>{" "}
          Un bon produit ne se mesure pas à sa complexité technique, mais à{" "}
          <strong>son utilité et son efficacité sur le long terme</strong>.
        </p>
        <p className="xs:hidden text-lg mt-1">
          Passionné par la{" "}
          <span className="text-primary font-semibold">scalabilité</span>, la{" "}
          <span className="text-primary font-semibold">maintenabilité</span> et
          l’
          <span className="text-primary font-semibold">
            expérience utilisateur
          </span>
          , je transforme chaque projet en{" "}
          <strong>une solution durable et performante</strong>.
        </p>
        <CtaButton linkTo="#about" content="Ma méthodologie 💡" />
      </SectionLayout>
    </AuroraBackground>
  );
};

export default Intro;
