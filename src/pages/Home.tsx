// Components
import Header from "@/components/header/Header";
import DesktopNav from "@/components/desktop-nav/DesktopNav";
import MobileNav from "@/components/mobile-nav/MobileNav";

// Sections
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Intro from "@/components/sections/intro/Intro";
import Projects from "@/components/sections/projects/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <DesktopNav />
      <MobileNav />
      <main className="h-[100dvh] w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
