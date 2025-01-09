import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textArea";
import { useContactForm } from "@/features/contact/hooks/useContactForm";

export default function ContactForm() {
  const { formik } = useContactForm();
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex flex-col gap-8 w-full lg:w-4/5 justify-center"
      >
        <div className="flex gap-4 items-center w-full">
          <div className="relative w-1/2">
            <Input
              formik={formik}
              inputName="firstname"
              placeholder="Votre prénom"
              topPosition="top-1/2"
            />
          </div>
          <div className="relative w-1/2">
            <Input
              formik={formik}
              inputName="lastname"
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
            placeholder="Votre email"
            topPosition="top-1/2"
          />
        </div>
        <div className="relative w-full">
          <TextArea
            formik={formik}
            inputName="message"
            placeholder="Votre message"
            topPosition="top-4"
          />
        </div>
        <Button
          size="lg"
          type="submit"
          className="md:mx-auto md:w-1/2 text-xl hover:scale-105 transition-transform duration-300"
        >
          Envoyer
        </Button>
      </form>
    </>
  );
}
