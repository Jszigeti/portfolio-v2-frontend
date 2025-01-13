import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useSignupForm } from "@/features/auth/hooks/useSignupForm";

const SignupForm = ({
  setView,
}: {
  setView: Dispatch<SetStateAction<number>>;
}) => {
  const { formik } = useSignupForm();

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        M'inscrire
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex flex-col gap-8 w-full lg:w-4/5 justify-center items-center"
      >
        <div className="relative w-full">
          <Label>Email</Label>
          <Input
            formik={formik}
            inputName="email"
            inputType="email"
            placeholder="jean.dupont@gmail.com"
            topPosition="top-1/2"
          />
        </div>
        <div className="relative w-full">
          <Label>Mot de passe</Label>
          <Input
            formik={formik}
            inputName="password"
            inputType="password"
            placeholder="**********"
            topPosition="top-1/2"
          />
        </div>
        <div className="relative w-full mb-8">
          <Label>Confirmation du mot de passe</Label>
          <Input
            formik={formik}
            inputName="matchingPassword"
            inputType="password"
            placeholder="**********"
            topPosition="top-1/2"
          />
        </div>
        <Button
          size="lg"
          type="submit"
          className="w-full mx-auto md:w-1/2 text-xl hover:scale-105 transition-transform duration-300"
        >
          M'inscrire
        </Button>
      </form>
      <p>
        Déjà inscrit ?{" "}
        <span
          className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
          onClick={() => setView(0)}
        >
          Me connecter
        </span>
      </p>
    </>
  );
};

export default SignupForm;
