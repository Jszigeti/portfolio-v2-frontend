import { Button } from "@/components/ui/button";
import useLogoutButton from "@/features/auth/hooks/useLogoutButton";

const LogoutButton = () => {
  const { handleLogout } = useLogoutButton();

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
