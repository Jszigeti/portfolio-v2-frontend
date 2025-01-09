import { useFormik } from "formik";
import { toast } from "react-toastify";
import { object, string } from "yup";
import sendMail from "../api/sendMail";
import { mailRegex } from "@/share/utils/regex";

export const useContactForm = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  const validationSchema = object({
    firstname: string().required().min(2),
    lastname: string().required().min(2),
    email: string().email().required().matches(mailRegex),
    message: string().required().min(10),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await sendMail(values);
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
