import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useSigninForm } from "../hooks/useSigninForm";

const SigninForm = ({
  setView,
}: {
  setView: Dispatch<SetStateAction<number>>;
}) => {
  const { formik } = useSigninForm();

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Me connecter
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto flex flex-col gap-8 w-full lg:w-4/5 justify-center items-center"
      >
        <div className="relative w-full">
          <Input
            formik={formik}
            inputName="email"
            inputType="email"
            placeholder="jean.dupont@gmail.com"
            topPosition="top-1/2"
          />
        </div>
        <div className="relative w-full mb-8">
          <Input
            formik={formik}
            inputName="password"
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
          Me connecter
        </Button>
      </form>
      <p className="text-muted-foreground">
        Pas encore inscrit ?{" "}
        <span
          className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
          onClick={() => setView(1)}
        >
          M'inscrire
        </span>
      </p>
    </>
  );
};

export default SigninForm;
