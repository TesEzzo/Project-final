import regUser from "../../assets/loginuser_4.jpg";
import regClub from "../../assets/manager.webp";
import sportHeader from "../../assets/Roger-Federer.jpg";
import sport from "../../assets/sportHeader.png";
import arrow from "../../assets/down-arrow.png";
import card_1 from "../../assets/card_filosofy.avif";
import card_2 from "../../assets/card_servizi.webp";
import card_3 from "../../assets/card_team_1.jpg";
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
            Rivoluziona il tuo modo di giocare
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
              <img src={arrow} alt="" className="h-6 w-6" />
            </button>
          </div>
        </section>
        <div className="flex justify-center items-center bg-[#FFFFFF] w-full p-[60px]">
          <div className="flex justify-center items-center gap-24 max-[1200px]:gap-6 max-[950px]:flex-col">
            <div className="max-w-sm bg-[#E7E7E7] border border-gray-200 rounded-lg shadow max-h-fit h-fit">
              <div>
                <img className="rounded-t-lg max-h-[260px] h-[260px]" src={card_1} alt="" />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">La nostra filosofia</h5>
                </div>
                <p className="text-[12px] mb-3 font-normal text-gray-700">
                  La nostra piattaforma digitale facilita il collegamento tra giovani appassionati dello sport e club desiderosi di offrire spazi sportivi 
                  accoglienti. Crediamo nell'importanza dello sport per la salute e il benessere mentale, e nel potenziale delle partnership per creare 
                  valore condiviso. Siamo impegnati a rendere lo sport accessibile a tutti, promuovendo uno stile di vita attivo e inclusivo.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-[#E7E7E7] border border-gray-200 rounded-lg shadow max-h-fit h-fit">
              <div>
                <img className="rounded-t-lg max-h-[260px] h-[260px]" src={card_2} alt="" />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Servizi</h5>
                </div>
                <p className="text-[12px] mb-3 font-normal text-gray-700">
                  Con i nostri servizi, gli utenti possono prenotare facilmente le proprie partite online e iscriversi ad eventi organizzati da altri utenti con un click. 
                  Per le aziende, offriamo l'opportunità di ampliare la clientela e gestire tutti gli eventi prenotati in modo efficiente, 
                  eliminando il bisogno di segnare appuntamenti su carta.
                  Rendiamo la gestione degli eventi sportivi più semplice e conveniente che mai.
                </p>
              </div>
            </div>
            <div className="max-w-sm bg-[#E7E7E7] border border-gray-200 rounded-lg shadow max-h-fit h-fit">
              <div>
                <img className="rounded-t-lg max-h-[260px] h-[260px]" src={card_3} alt="" />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Il Team</h5>
                </div>
                <p className="text-[12px] mb-3 font-normal text-gray-700">
                  Il team è composto da sviluppatori web con una passione condivisa per lo sport e il benessere. 
                  Oltre alle nostre competenze tecniche, portiamo con noi una profonda comprensione del mondo dello sport e dell'importanza di uno 
                  stile di vita attivo.
                  Siamo spinti dal desiderio di creare un impatto positivo sulla vita delle persone attraverso la tecnologia, pronti a guidare utenti e 
                  club sportivi verso un'esperienza intuitiva e di valore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="flex flex-col justify-center items-center m-16 gap-12">
          <h6 className="font-bold text-[30px] text-[#126e7f] text-center">"Connessione, innovazione, passione: insieme per uno stile di vita attivo."</h6>
          <img className="max-w-[500px] max-h-[500px]" src={sport} alt="" />
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
