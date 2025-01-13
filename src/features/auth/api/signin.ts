/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/services/hooks/useApi";
import { customHandleError } from "@/share/utils/customHandleError";
import { IAuth } from "@/features/auth/types/auth";

const signin = async (body: IAuth) => {
  const api = useApi();

  try {
    await api.post(`/auth/signin`, body);
    return "Connexion réussie !";
  } catch (error: unknown) {
    throw new Error(
      customHandleError(error, "Une erreur est survenue lors de la connexion")
    );
  }
};

export default signin;
