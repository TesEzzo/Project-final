import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/reducers/authSlice";

const NavbarUser = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const handleLogout= () => {
    dispatch(logout());
  }

  return (
    <>
      <nav className="flex flex-row-reverse justify-between fixed items-center gap-4 h-16 w-full z-[999] bg-[#17202A] font-semibold text-white">

        <div className="flex flex-row-reverse">
          {auth.token != null ? (
            ""
          ) : (
            <Link to="/whoAreWe">
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
                Chi siamo?
              </button>
            </Link>
          )}
           <button onClick={handleLogout} className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              LOGOUT
            </button>
          <Link to="/services/profile">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              PROFILE
            </button>
          </Link>
          <Link to="/services">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              HOME
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarUser;
