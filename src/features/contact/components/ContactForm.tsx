import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import { useContactForm } from "@/features/contact/hooks/useContactForm";

export default function ContactForm() {
  const { formik } = useContactForm();
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex flex-col xs:gap-3 gap-6 w-full lg:w-4/5"
      >
        <div className="flex gap-4 items-center w-full">
          <div className="relative w-1/2">
            <Input
              formik={formik}
              inputName="firstname"
              label="Votre prénom"
              placeholder="Votre prénom"
              topPosition="top-1/2"
            />
          </div>
          <div className="relative w-1/2">
            <Input
              formik={formik}
              inputName="lastname"
              label="Votre nom"
              placeholder="Votre nom"
              topPosition="top-1/2"
            />
          </div>
        </div>
        <div className="relative">
          <Input
            formik={formik}
            inputName="email"
            inputType="email"
            label="Votre email"
            placeholder="Votre email"
            topPosition="top-1/2"
          />
        </div>
        <div className="relative w-full">
          <TextArea
            formik={formik}
            inputName="message"
            label="Votre message"
            placeholder="Votre message"
            topPosition="top-4"
          />
        </div>
        <Button
          size="lg"
          type="submit"
          className="lg:mx-auto lg:w-1/2 text-xl hover:scale-105 transition-transform duration-300"
        >
          Envoyer ✉️
        </Button>
      </form>
    </>
  );
}
