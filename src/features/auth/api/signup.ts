/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/services/hooks/useApi";
import { IAuth } from "@/features/auth/types/auth";
import { customHandleError } from "@/share/utils/customHandleError";

const signup = async (body: IAuth) => {
  const api = useApi();

  try {
    await api.post(`/auth/signup`, body);
    return "Inscription réussie !";
  } catch (error: unknown) {
    throw new Error(
      customHandleError(error, "Vous n'êtes pas autorisé à vous inscrire")
    );
  }
};

export default signup;
