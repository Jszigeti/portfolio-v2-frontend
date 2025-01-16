import SectionLayout from "../SectionLayout";
import ContactForm from "../../../features/contact/components/ContactForm";

const Contact = () => {
  return (
    <SectionLayout sectionId="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 md:mb-8 lg:mb-12 xl:mb-16">
        Me <span className="text-primary">contacter</span>
      </h2>
      <ContactForm />
    </SectionLayout>
  );
};

export default Contact;
