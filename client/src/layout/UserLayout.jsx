import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarUser from "../components/navbar/NavbarUser";

const UserLayout = () => {
  return (
    <>
      <NavbarUser />
    <div className="pt-16">
      <Outlet />
      <Footer />
    </div>
    </>
  );
};

export default UserLayout;
