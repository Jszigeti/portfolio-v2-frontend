/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from "@/services/hooks/useApi";
import { customHandleError } from "@/share/utils/customHandleError";

export interface IMail {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const sendMail = async (body: IMail) => {
  const api = useApi();

  try {
    await api.post(`/contact`, body);
    return "Message envoyé avec succès !";
  } catch (error: unknown) {
    throw new Error(
      customHandleError(
        error,
        "Une erreur est survenue lors de l'envoi du message"
      )
    );
  }
};

export default sendMail;
