import sportHeader from "../../assets/sportHeader.png";
import globo_def from "../../assets/landingDefault/globo_def.png";
import basketball from "../../assets/landingDefault/basketball.png";
import soccer_ball from "../../assets/landingDefault/soccer_ball.png";
import padel_racket from "../../assets/landingDefault/padel_racket.png";
import tennis_racket from "../../assets/landingDefault/tennis_racket.png";
import volleyball from "../../assets/landingDefault/volleyball.png";
import { Map } from "../../components/Map";
import AdsCard from "../../components/AdsCard";
import { Link } from "react-router-dom";

const HomeUser = () => {

  return (
    <>
      <header className="flex flex-col items-center w-full p-16 overflow-x-hidden">
        <div className="flex items-center flex-col">
        <h1 className="font-anton text-9xl mt-10">Games Plan Italia</h1>
          <p className="font-poppins text-3xl mt-10">
            {" "}
            {/* //NOTE - nome utente */}
            Benvenuto, NOME UTENTE!
          </p>
        </div>
        <div className="flex justify-center mt-10">
        <div className="globe relative h-max w-max">
            <div>
              <img
                src={globo_def}
                alt="globe"
                className="w-[300px] h-[300px]"
              />
            </div>
            <Link to="padelRules" className="padel w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={padel_racket} alt="globe" />
            </Link>
            <Link to="tennisRules" className="tennis w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={tennis_racket} alt="globe" />
            </Link>
            <div className="basket w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={basketball} alt="globe" />
            </div>
            <div className="volley w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={volleyball} alt="globe" />
            </div>
            <Link to="footballRules" className="soccer w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={soccer_ball} alt="globe" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="font-anton text-4xl">
            Rivoluziona il tuo modo di giocare
          </h2>
        </div>
      </header>
      <main className="flex flex-col items-center w-full pt-2 overflow-x-hidden">
        <section className="mb-10 w-max h-max">
          <img src={sportHeader} alt="" />
        </section>
        <section>
          <div>
            <Map />
          </div>
        </section>
        <div>
          <AdsCard />
        </div>
      </main>
    </>
  );
};

export default HomeUser;
