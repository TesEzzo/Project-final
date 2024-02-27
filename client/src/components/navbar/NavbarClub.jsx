import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarClub = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <nav className="flex flex-row justify-between fixed items-center gap-4 h-16 w-full z-[999] bg-gradient-to-r from-sec to-ter font-semibold">
        <h1 className="ml-64 pl-5 font-anton text-4xl">GamesPlanItalia</h1>
        <div className="flex flex-row-reverse">
        {auth.token != null ? (
          ""
        ) : (
          <Link to="/whoAreWe">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300">
              Chi siamo?
            </button>
          </Link>
        )}

        {auth.token != null ? (
          <div>
            <h1>TITOLO GIGANTE</h1>
          </div>
        ) : (
          ""
        )}
        {auth.token != null ? (
          <Link to="/profile">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300">
              PROFILE
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300">
              LOGIN
            </button>
          </Link>
        )}
        <Link to="/">
          <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300">
            HOME
          </button>
        </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarClub;
