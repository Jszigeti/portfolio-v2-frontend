// Components
import Header from "./components/header/Header";

// Navigation components
import DesktopNav from "./components/desktop-nav/DesktopNav";
import MobileNav from "./components/mobile-nav/MobileNav";

// Sections
import Intro from "./components/sections/intro/Intro";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <DesktopNav />
      <MobileNav />
      <ToastContainer closeOnClick={true} />
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
