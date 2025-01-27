import SectionTitle from "@/components/ui/section-title";
import SectionLayout from "../../ui/section-layout";
import CtaButton from "@/components/ui/cta-button";

const Services = () => {
  return (
    <SectionLayout sectionId="services">
      <SectionTitle subtitle="Mes services" title="Création & solutions web" />
      <p className="xs:text-base text-lg mt-1 md:mt-2">
        En tant que{" "}
        <span className="text-primary font-semibold">
          développeur web freelance
        </span>
        , j’accompagne les{" "}
        <span className="text-primary font-semibold">professionnels</span> dans
        la{" "}
        <span className="text-primary font-semibold">
          création de sites internet
        </span>
        , le{" "}
        <span className="text-primary font-semibold">
          développement d’applications
        </span>{" "}
        et l’
        <span className="text-primary font-semibold">
          optimisation SEO
        </span>{" "}
        pour améliorer leur visibilité en ligne.
      </p>
      <ul className="list-disc pl-5 mt-1 md:mt-2 xs:text-base text-lg">
        <li>Sites web modernes et attractifs</li>
        <li>Outils sur mesure pour vos besoins</li>
        <li>Référencement naturel (SEO)</li>
      </ul>
      <p className="xs:text-base text-lg mt-1 md:mt-2">
        Ensemble, transformons vos idées en{" "}
        <span className="text-primary font-semibold">
          solutions performantes
        </span>
        .
      </p>
      <CtaButton linkTo="#contact" content="Discutons de vos besoins" />
    </SectionLayout>
  );
};

export default Services;
