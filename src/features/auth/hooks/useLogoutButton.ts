import useAuthStore from "@/services/store/AuthStore";
import logout from "../api/logout";
import { toast } from "react-toastify";

const useLogoutButton = () => {
  const { setIsAuthenticated } = useAuthStore();

  const handleLogout = async () => {
    try {
      const response = await logout();
      toast.success(response);
      setIsAuthenticated(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return {
    handleLogout,
  };
};

export default useLogoutButton;
