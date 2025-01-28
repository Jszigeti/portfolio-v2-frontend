import SectionLayout from "../../ui/section-layout";
import ContactForm from "../../../features/contact/components/ContactForm";
import SectionTitle from "@/components/ui/section-title";

const Contact = () => {
  return (
    <SectionLayout sectionId="contact">
      <SectionTitle title="Discutons recrutement" subtitle="Contactez-moi" />
      <p className="xs:text-base text-lg">
        Vous recherchez un développeur web compétent et passionné ? Je suis à
        l’écoute de nouvelles opportunités !
      </p>
      <ContactForm />
    </SectionLayout>
  );
};

export default Contact;
