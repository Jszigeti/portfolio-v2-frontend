/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/services/hooks/useApi";
import { customHandleError } from "@/share/utils/customHandleError";

const logout = async () => {
  const api = useApi();

  try {
    await api.post(`/auth/logout`);
    return "Déconnexion réussie !";
  } catch (error: unknown) {
    throw new Error(
      customHandleError(error, "Une erreur est survenue lors de la déconnexion")
    );
  }
};

export default logout;
