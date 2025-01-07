import axios, { AxiosInstance } from "axios";

export const useApi = () => {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return api;
};
