/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/services/hooks/useApi";
import { customHandleError } from "@/share/utils/customHandleError";

export interface ISignin {
  email: string;
  password: string;
}

const signin = async (body: ISignin) => {
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
