import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const NavbarClub = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <nav className="flex flex-row-reverse fixed items-center gap-4 h-16 w-full z-[999] bg-gradient-to-r from-sec to-ter font-semibold">
        {auth.token != null ? "" : (
        <Link to="/whoAreWe">Chi Siamo?</Link>
        )}

        {auth.token != null ? (
          <div>
            <h1>TITOLO GIGANTE</h1>
          </div>
        ) : (
          ""
        )}
        {auth.token != null ? (
          <Link to="/profile">PROFILE</Link>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
        <Link to="/">HOME</Link>
      </nav>
    </>
  );
};

export default NavbarClub;
