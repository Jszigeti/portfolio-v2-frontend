import { customHandleError } from "@/share/utils/customHandleError";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export function useApi(): AxiosInstance {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
  });

  const handleUnauthorizedError = (err: unknown): Promise<never> => {
    return Promise.reject(
      customHandleError(err, "Session expirée, veuillez vous reconnecter")
    );
  };

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (
        error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retried &&
        originalRequest.url !== "/auth/refresh" &&
        originalRequest.url !== "me"
      ) {
        originalRequest._retried = true;
        if (originalRequest) {
          try {
            await api.post("/auth/refresh");
            return api(originalRequest);
          } catch (refreshError: unknown) {
            // Optional : redirection or logout function
            return handleUnauthorizedError(refreshError);
          }
        }
      }
      return Promise.reject(error);
    }
  );
  return api;
}
