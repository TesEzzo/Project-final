import { Link } from "react-router-dom";
import logo_site from "../../assets/logo_def.png";

const NavbarNotLogged = () => {


  return (
    <>
      <nav className="flex flex-row-reverse justify-between fixed items-center gap-4 h-16 w-full z-[999] bg-sec font-semibold text-white">
        <div className="flex flex-row justify-between w-full h-full">
          <img src={logo_site} alt="" className="h-full p-2"/>
          <div className="flex flex-row items-center">
              <Link to="/">
                <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
                  HOME
                </button>
              </Link>
              <Link to="/login">
                <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
                  LOGIN
                </button>
              </Link>
            <Link to="/whoAreWe">
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
                Chi siamo?
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarNotLogged;
