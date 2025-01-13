import { useFormik } from "formik";
import { toast } from "react-toastify";
import { object, string } from "yup";
import signin from "@/features/auth/api/signin";
import { mailRegex, passwordRegex } from "@/share/utils/regex";
import useAuthStore from "@/services/store/AuthStore";

export const useSigninForm = () => {
  const { setIsAuthenticated } = useAuthStore();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object({
    email: string().email().required().matches(mailRegex),
    password: string().required().matches(passwordRegex),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await signin(values);
        toast.success(response);
        formik.resetForm();
        setIsAuthenticated(true);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    },
  });

  return { formik };
};
