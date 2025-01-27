import SectionLayout from "../../ui/section-layout";
import ContactForm from "../../../features/contact/components/ContactForm";
import { NavLink } from "react-router";
import SectionTitle from "@/components/ui/section-title";

const Contact = () => {
  return (
    <SectionLayout sectionId="contact">
      <SectionTitle title="Parlons de votre projet" subtitle="Contactez-moi" />
      <ContactForm />
      <NavLink
        to="/mentions-legales"
        rel="noopener noreferrer"
        className={`${
          location.pathname.startsWith("/admin") ? "hidden" : ""
        } text-muted-foreground hover:text-primary transition-colors duration-300 mt-2 sm:mt-4 md:mt-8 mx-auto w-fit`}
      >
        Mentions légales
      </NavLink>
    </SectionLayout>
  );
};

export default Contact;
