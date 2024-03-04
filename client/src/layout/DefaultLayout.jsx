import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarNotLogged from "../components/navbar/NavbarNotLogged";

const ClubLayout = () => {
  return (
    <>
      <NavbarNotLogged />
    <div className="pt-16">
      <Outlet />
      <Footer />
    </div>
    </>
  );
};

export default ClubLayout;
