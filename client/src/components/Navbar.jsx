import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <nav className="flex flex-row-reverse fixed items-center gap-4 bg-green-300 h-16 w-full z-[999]">
        {auth.token != null ? "" : <Link to="/whoAreWe">Chi Siamo?</Link>}

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

export default Navbar;
