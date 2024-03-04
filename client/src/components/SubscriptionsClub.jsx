import green_check from "../assets/subscriptions/green_check.svg";
import red_x from "../assets/subscriptions/red_x.svg";
import medal_gold from "../assets/subscriptions/medal-gold.svg";
import medal_silver from "../assets/subscriptions/medal-silver.svg";
import medal_bronze from "../assets/subscriptions/medal-bronze.svg";
import { Link } from "react-router-dom";

const SubscriptionsClub = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-between mx-10 w-3/4">
          <div className="flex flex-col items-center border-2 rounded-3xl border-none w-[250px] h-[400px] shadow-xl bg-white transition ease-in-out delay-100">
            <img
              src={medal_bronze}
              alt="medal bronze"
              className="w-[120px] h-[120px] self-center"
            />
            <p className="text-2xl italic self-center">Freemium</p>
            <div className="flex flex-col items-center justify-between mt-5">
              <p>Gestionale dell'applicazione</p>
              <img
                src={green_check}
                alt="green_check"
                className="w-[30px] h-[30px]"
              />
            </div>
            <div className="flex flex-col items-center">
              <p>Pubblicità</p>
              <img src={red_x} alt="red_x" className="w-[30px] h-[30px]" />
            </div>
            <div className="flex flex-col items-center">
              <p>Sponsorizzazioni eventi</p>
              <img src={red_x} alt="red_x" className="w-[30px] h-[30px]" />
            </div>
          </div>

          <div className="flex flex-col items-center border-2 rounded-3xl border-none w-[250px] h-[400px] shadow-xl bg-white transition ease-in-out delay-100">
            <img
              src={medal_silver}
              alt="medals"
              className="w-[120px] h-[120px] self-center"
            />
            <p className="text-2xl italic self-center">Premium</p>
            <div className="flex flex-col items-center justify-between mt-5">
              <p>Gestionale dell'applicazione</p>
              <img
                src={green_check}
                alt="green_check"
                className="w-[30px] h-[30px]"
              />
            </div>
            <div className="flex flex-col items-center">
              <p>Pubblicità</p>
              <img
                src={green_check}
                alt="green_check"
                className="w-[30px] h-[30px]"
              />
            </div>
            <div className="flex flex-col items-center">
              <p>Sponsorizzazioni eventi</p>
              <img src={red_x} alt="red_x" className="w-[30px] h-[30px]" />
            </div>
            <Link>
            <button className="flex flex-row justify-center items-center mt-2 hover:shadow-black bg-c_button rounded-full px-5 h-8 h-max w-max font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
              <p className="p-2">Abbonati</p>{" "}
              {/* //NOTE - Link per il checkout silver */}
            </button>
            </Link>
          </div>

          <div className="flex flex-col items-center border-2 rounded-3xl border-none w-[250px] h-[400px] shadow-xl bg-white transition ease-in-out delay-100">
            <img
              src={medal_gold}
              alt="medals"
              className="w-[120px] h-[120px] self-center"
            />
            <p className="text-2xl italic self-center">Vip</p>
            <div className="flex flex-col items-center justify-between mt-5">
              <p>Gestionale dell'applicazione</p>
              <img
                src={green_check}
                alt="green_check"
                className="w-[30px] h-[30px]"
              />
            </div>
            <div className="flex flex-col items-center">
              <p>Pubblicità</p>
              <img
                src={green_check}
                alt="green_check"
                className="w-[30px] h-[30px]"
              />
            </div>
            <div className="flex flex-col items-center">
              <p>Sponsorizzazioni eventi</p>
              <img
                src={green_check}
                alt="green_check"
                className="w-[30px] h-[30px]"
              />
            </div>
            <Link>
            <button className="flex flex-row justify-center items-center mt-2 hover:shadow-black bg-c_button rounded-full px-5 h-8 h-max w-max font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
              <p className="p-2">Abbonati</p>{" "}
              {/* //NOTE - Link per il checkout gold */}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionsClub;
