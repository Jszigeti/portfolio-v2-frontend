import Header from "@/components/header/Header";
import SectionLayout from "@/components/sections/SectionLayout";
import LogoutButton from "@/features/auth/components/LogoutButton";
import SigninForm from "@/features/auth/components/SigninForm";
import SignupForm from "@/features/auth/components/SignupForm";
import useAuthStore from "@/features/auth/store/AuthStore";
import { useState } from "react";

const Admin = () => {
  const { isAuthenticated } = useAuthStore();
  const [view, setView] = useState(0);

  if (isAuthenticated)
    return (
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
        Je suis authentifié
        <LogoutButton />
      </main>
    );

  return (
    <>
      <Header />
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
        <SectionLayout>
          {view === 0 && <SigninForm setView={setView} />}
          {view === 1 && <SignupForm setView={setView} />}
        </SectionLayout>
      </main>
    </>
  );
};

export default Admin;
