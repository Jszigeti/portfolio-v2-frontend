import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { handleError } from "axios-error-handler-ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const customHandleError = (
  err: unknown,
  errorMessages: string | Record<number, string>,
  errorCodeToCheck?: number
): string => {
  return handleError(
    err,
    errorMessages,
    errorCodeToCheck,
    "Une erreur serveur est survenue, veuillez réessayer plus tard.",
    "Une erreur inconnue est survenue."
  );
};
