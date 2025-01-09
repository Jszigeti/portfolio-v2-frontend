import { create } from "zustand";

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (authState: boolean) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (authState) => set({ isAuthenticated: authState }),
}));

export default useAuthStore;
