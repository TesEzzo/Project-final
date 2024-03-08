import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Test_Logo from "../../assets/Test_Logo.svg";

const NavbarClub = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <nav className="flex flex-row justify-between fixed items-center gap-4 h-16 w-full z-[999] bg-sec font-semibold text-white">
        <div className="flex flex-row items-center text-wrap my-16 ml-64">
          <img src={Test_Logo} alt="" className=" flex max-h-8" />{" "}
          {/*//NOTE - img club */}
          <h1 className="text-wrap ">Nome azienda</h1> {/*//NOTE - name club */}
          <img src={Test_Logo} alt="" className="flex max-h-6" />{" "}
          {/*//NOTE - subscription */}
        </div>

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

          {auth.token != null ? (
            <div>
              <h1>TITOLO GIGANTE</h1>
            </div>
          ) : (
            ""
          )}
          <Link to="/clubs/profile">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              PROFILE
            </button>
          </Link>
          <Link to="/clubs">
            <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md hover:text-black duration-300">
              HOME
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarClub;
