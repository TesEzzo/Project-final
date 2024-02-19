import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const DefaultLayout = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Navbar />
        <div className="w-full pl-64 pt-16 overflow-x-hidden">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
