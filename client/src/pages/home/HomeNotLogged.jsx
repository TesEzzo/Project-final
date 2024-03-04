import sportHeader from "../../assets/sportHeader.png";
import globo_def from "../../assets/landingDefault/globo_def.png";
import basketball from "../../assets/landingDefault/basketball.png";
import soccer_ball from "../../assets/landingDefault/soccer_ball.png";
import padel_racket from "../../assets/landingDefault/padel_racket.png";
import tennis_racket from "../../assets/landingDefault/tennis_racket.png";
import volleyball from "../../assets/landingDefault/volleyball.png";
import { Link } from "react-router-dom";

const HomeNotLogged = () => {
  return (
    <>
      <header className="flex flex-col items-center w-full pt-16 overflow-x-hidden">
        <div className="flex items-center flex-col">
          <p className="font-poppins text-3xl mt-10">
            Stanco di cercare a vuoto il compagno di squadra mancante?
          </p>
          <h1 className="font-anton text-9xl mt-10">Games Plan Italia</h1>
        </div>
        <div className="flex justify-center mt-10">
          <img src={sportHeader} alt="test" />
        </div>
        <div className="flex flex-col items-center mt-10">
          <h2 className="font-anton text-4xl">
            Rivoluziona il tuo modo di giocare da qui
          </h2>
          <button className="my-4 hover:shadow-black bg-c_button rounded-full p-5  font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
            <Link to="registration" className="text-2xl">Registrati</Link>
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center w-full pt-20 overflow-x-hidden">
        <section className="m-10 w-max h-max">
          <div className="globe relative h-max w-max">
            <div>
              <img
                src={globo_def}
                alt="globe"
                className="w-[300px] h-[300px]"
              />
            </div>
            <div className="padel w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={padel_racket} alt="globe" />
            </div>
            <div className="tennis w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={tennis_racket} alt="globe" />
            </div>
            <div className="basket w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={basketball} alt="globe" />
            </div>
            <div className="volley w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={volleyball} alt="globe" />
            </div>
            <div className="soccer w-[100px] h-[100px] hidden absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
              <img src={soccer_ball} alt="globe" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeNotLogged;
