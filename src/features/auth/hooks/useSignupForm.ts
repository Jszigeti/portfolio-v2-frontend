/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { object, ref, string } from "yup";
import { mailRegex, passwordRegex } from "@/share/utils/regex";
import signup from "../api/signup";

export const useSignupForm = () => {
  const initialValues = {
    email: "",
    password: "",
    matchingPassword: "",
  };

  const validationSchema = object({
    email: string().email().required().matches(mailRegex),
    password: string().required().matches(passwordRegex),
    matchingPassword: string()
      .oneOf([ref("password")])
      .required()
      .matches(passwordRegex),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { matchingPassword, ...credentials } = values;
      try {
        const response = await signup(credentials);
        toast.success(response);
        formik.resetForm();
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    },
  });

  return { formik };
};
