import { Routes } from "react-router";
import { Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";

// Components
import { ToastContainer } from "react-toastify";
import LegalNotice from "./pages/LegalNotice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ToastContainer closeOnClick={true} />
    </>
  );
}

export default App;
