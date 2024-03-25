import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/reducers/authSlice";
import logo_site from "../../assets/logo_def.png";

const NavbarUser = () => {
  const dispatch = useDispatch();

  const handleLogout= () => {
    dispatch(logout());
  }

  return (
    <>
      <nav className="flex flex-row justify-between fixed items-center gap-4 h-16 w-full z-[9999] bg-sec font-semibold text-white">
        <div className="h-full flex flex-row items-center ">
          <img src={logo_site} alt="" className="h-full"/>
          <h1 className="text-2xl font-semibold max-[600px]:hidden">Games Plan Italia</h1>
        </div>

        <div className="flex flex-row">
          <Link to="/services">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              HOME
            </button>
          </Link>
          <Link to="/services/profile">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              PROFILE
            </button>
          </Link>
           <button onClick={handleLogout} className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              LOGOUT
            </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarUser;
