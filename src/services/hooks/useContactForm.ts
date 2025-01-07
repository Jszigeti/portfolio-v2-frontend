import { useFormik } from "formik";
import { toast } from "react-toastify";
import { object, string } from "yup";
import sendMail from "../api/sendMail";

export const useContactForm = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  const validationSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    email: string().email().required(),
    message: string().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await sendMail(values);
        toast.success("Message envoyé avec succès !");
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
