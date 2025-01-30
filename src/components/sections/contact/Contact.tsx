import SectionLayout from "../../ui/section-layout";
import ContactForm from "../../../features/contact/components/ContactForm";
import SectionTitle from "@/components/ui/section-title";

const Contact = () => {
  return (
    <SectionLayout sectionId="contact">
      <SectionTitle title="Échangeons ensemble" subtitle="Contactez-moi 🚀" />
      <p className="xs:text-base text-lg">
        Besoin d’un développeur web engagé et efficace ? Je suis toujours ouvert
        aux échanges autour de nouvelles opportunités et collaborations !
      </p>
      <ContactForm />
    </SectionLayout>
  );
};

export default Contact;
