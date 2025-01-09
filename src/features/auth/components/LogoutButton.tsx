import { Button } from "@/components/ui/button";
import logout from "../api/logout";
import { toast } from "react-toastify";
import useAuthStore from "../store/AuthStore";

const LogoutButton = () => {
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
  return (
    <Button
      onClick={() => handleLogout()}
      size="lg"
      className="bg-red-500 hover:bg-red-700 text-xl hover:scale-105 transition-transform duration-300"
    >
      Me déconnecter
    </Button>
  );
};

export default LogoutButton;
