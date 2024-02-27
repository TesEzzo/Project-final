import { Link } from "react-router-dom";
import Test_Logo from "../assets/Test_Logo.svg";
import transactions from "../assets/sidebar/transactions-icon.svg";
import chrono_events from "../assets/sidebar/chronology-events.svg";
import reg_events from "../assets/sidebar/registered-events.svg";
import reg_users from "../assets/sidebar/registered-users.svg";
import logo_site from "../assets/logo_def.png"

const Sidebar = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-sec to-ter h-screen w-64 fixed z-[1000] font-semibold">
        <div className="m-2">
          <div>
            <img src={logo_site} alt="icon-site" className="" />
          </div>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col items-center w-full text-wrap my-16">
              <img src={Test_Logo} alt="" className=" flex max-h-8" /> {/*//NOTE - img club */}
              <p className="text-wrap ">Nome azienda</p> {/*//NOTE - name club */}
              <img src={Test_Logo} alt="" className="flex max-h-6" /> {/*//NOTE - subscription */}
            </div>
            
            <Link> {/*//NOTE - chronology transictions */}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300">
                <img src={transactions} alt="" className="max-h-10 max-w-10" />
                <p className="pl-2">Transizioni</p>
              </button>
            </Link>

            <Link> {/*//NOTE - chronology events */}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300">
                <img src={chrono_events} alt="" className="max-h-10 max-w-10" />
                <p className="pl-2">Cronologia Eventi</p>
              </button>
            </Link>

            <Link> {/*//NOTE - attendance users events*/}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300"> 
                <img src={reg_events} alt="" className="max-h-10 max-w-10" />
                <p className="pl-2">Reg. Eventi</p>
              </button>
            </Link>

            <Link> {/*//NOTE - attendance users prenotations */}
              <button className="flex flex-row p-4 items-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300">
                <img src={reg_users} alt="" className="max-h-10 max-w-10" />
                <p className="pl-2">Reg. Prenotazioni</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
