import regUser from "../../assets/loginuser_4.jpg";
import regClub from "../../assets/manager.webp";
import sportHeader from "../../assets/Roger-Federer.jpg";
import sport from "../../assets/sportHeader.png";
import arrow from "../../assets/down-arrow.png";
import { Link } from "react-router-dom";

const HomeNotLogged = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // Altezza della navbar in pixel
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      const duration = 800; // Durata dello scroll in millisecondi
      const startTime = performance.now();

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeInOutQuad(progress);
        const newPosition =
          offsetTop * easedProgress + (1 - easedProgress) * window.pageYOffset;
        window.scrollTo(0, newPosition);

        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <>
      <header className="flex flex-col items-center w-full overflow-x-hidden overflow-y-hidden">
        <div className="flex items-center flex-col relative w-screen h-screen text-white">
          <img
            src={sportHeader}
            alt=""
            className="absolute w-screen h-screen"
          />
          <div className="w-screen h-screen bg-black absolute opacity-75"></div>
          <h1 className="font-anton text-9xl mt-10 absolute max-[950px]:text-center max-[950px]:text-[100px] max-[700px]:text-[70px] max-[600px]:mx-[15px]">
            Games Plan Italia
          </h1>
          <h2 className="text-4xl mt-10 absolute top-56 max-[1200px]:text-center max-[1200px]:mx-[50px] max-[700px]:text-[30px]">
            Stanco di cercare a vuoto il compagno di squadra mancante?
          </h2>
          <h2 className="text-4xl absolute top-80 max-[1200px]:mt-[80px] max-[1200px]:mx-[50px] max-[1200px]:text-center max-[700px]:text-[25px]">
            Rivoluziona il tuo modo di giocare da qui
          </h2>
          <button
            onClick={() => scrollToSection("info")}
            className=" text-2xl absolute top-[500px] text-black my-4 hover:shadow-black bg-c_button rounded-full p-5 px-10 font-semibold 
                        transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 max-[750px]:top-[490px] max-[590px]:hidden"
          >
            Scopri di più
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center w-full overflow-x-hidden">
        <section className="flex justify-center m-10 w-full h-max">
          <div className="flex flex-col items-center w-3/4 max-[580px]:w-full">
            <h3 id="info" className="text-center text-4xl font-semibold mb-10">
              Scopri il nostro mondo!
            </h3>
            <div className="flex flex-col items-center gap-8 max-[580px]:mx-[20px]">
              <h4 className="text-3xl">IL GIOCATORE</h4>
              <p className="text-center w-2/3 bg-white p-8 rounded-lg shadow-xl max-[580px]:w-full">
                Da giocatore avrai la possibilità nel nostro sito di prenotare
                campi nei vari club in tutta italia connessi alla nostra
                piattaforma. Potrai inoltre partecipare a vari eventi
                organizzati dai club stessi.
              </p>
              <p className="">-</p>
            </div>
            <div className="flex flex-col items-center gap-8 max-[580px]:mx-[20px]">
              <h4 className="text-3xl mt-8">IL CLUB</h4>
              <p className="text-center w-2/3 bg-white p-8 rounded-lg shadow-xl max-[580px]:w-full">
                Con il nostro gestionale web potrai, organizzare eventi, gestire
                le prenotazioni dei clienti, controllare entrate ed uscite e
                controllare i feedback rilasciati dai vari clienti; non solo,
                dal momento della registrazione, inserendo la lubicazione del
                club verrà registrato anche sulla nostra mappa dove i vari
                clienti potranno trovarvi!
              </p>
            </div>
            <button
              onClick={() => scrollToSection("reg")}
              className="mt-10 text-2xl top-96 text-black my-4 hover:shadow-black bg-c_button rounded-full p-5 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300"
            >
              <img src={arrow} alt="" className="h-6 w-6"/>
            </button>
          </div>
        </section>
        <section className="m-16">
          <img src={sport} alt="" />
        </section>
        <section id="reg" className="flex w-full h-[524px] relative max-[900px]:h-[400px] max-[700px]:h-[300px]">
          <div className="w-2/4 relative mr-1 max-[900px]:h-[400px] max-[700px]:h-[300px]">
            <img src={regUser} alt="" className="w-full h-full rounded-r-lg absolute" />
            <div className="w-full h-full bg-black absolute opacity-75 rounded-r-lg absolute"></div>
            <div className="flex flex-col justify-center items-center top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 text-2xl absolute">
              <h3 className="text-white text-center max-[600px]:text-[20px]">Sei un giocatore?</h3>
              <Link
                to="registration"
                className="text-black w-max text-center my-4 hover:shadow-black bg-c_button rounded-full p-5 px-10 font-semibold transition 
                          ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 max-[700px]:h-[40px]
                          max-[700px]:w-[75%] max-[700px]:px-2 max-[700px]:py-[4px] max-[700px]:text-[15px]"
              >
                Registrati
              </Link>
            </div>
          </div>
          <div className="w-2/4 relative ml-1 max-[900px]:h-[400px] max-[700px]:h-[300px]">
            <img src={regClub} alt="" className="w-full h-full rounded-l-lg absolute" />
            <div className="w-full h-full bg-black absolute opacity-75 absolute rounded-l-lg"></div>
            <div className="flex flex-col justify-center items-center top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 text-2xl absolute">
              <h3 className="text-white text-center max-[600px]:text-[20px]">Sei un club sportivo?</h3>
              <Link
                to="registrationClub"
                className="text-black w-max text-center my-4 hover:shadow-black bg-c_button rounded-full p-5 px-10 font-semibold transition 
                          ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 max-[700px]:h-[40px]
                          max-[700px]:w-[75%] max-[700px]:px-2 max-[700px]:py-[4px] max-[700px]:text-[15px]"
              >
                Registrati
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center absolute h-16 w-16 bg-c_button rounded-full border-8 border-pri top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
            <p className="font-semibold text-2xl">O</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeNotLogged;
