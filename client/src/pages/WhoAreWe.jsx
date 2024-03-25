import FrancescoPB from "../assets/developers/FrancescoPB.jpg";
import TommasoM from "../assets/developers/TommasoM.jpg";
import Giuseppe_Mattera from "../assets/developers/Giuseppe_Mattera.jpg";
import Raffaele from "../assets/developers/Raffaele.jpg";
import Matteo from "../assets/developers/Matteo.jpg";

const WhoAreWe = () => {
  return (
    <>
      <article className="p-12">
        <h2 className="text-center font-bold text-[45px] mb-6">Chi siamo?</h2>
        <div className="flex justify-center w-[100%]">
          <p className="text-center mb-8 w-[50%]">
            Siamo un piccolo team di junior Full Stack developer, da poco siamo
            entrati nel mondo dello sviluppo web grazie a{" "}
            <strong>
              <a href="https://www.develhope.co/it/sign-up/">DEVELHOPE</a>
            </strong>
            , un corso accellerato di 6 mesi dove oltre a tanta teoria facciamo
            tantissima pratica ogni giorno, e questa applicazione web ne è la dimostrazione.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 justify-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-8">
            <div className="flex flex-col items-center">
              <img className="w-[120px] h-[120px] mb-3 rounded-full shadow-lg" src={FrancescoPB} alt="img not found" />
              <h5 className="mb-4 text-xl font-medium text-gray-900">
                Francesco Paolo Barranca
              </h5>
              <span className="text-sm text-gray-500 text-center">Nato a Palermo, sono un Full-stack-Developer anche se prima facevo
                altri lavori, mi sono appassionato perchè mi ha affascinato come i
                siti possano essere cosi affascinanti, e vedere i siti modellati
                come voglio io e vedere che le cose funzionano mi crea un grande
                senso di soddisfazione.
              </span>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-8">
            <div className="flex flex-col items-center">
              <img className="w-[120px] h-[120px] mb-3 rounded-full shadow-lg" src={TommasoM} alt="img not found" />
              <h5 className="mb-4 text-xl font-medium text-gray-900">
                Tommaso Merli
              </h5>
              <span className="text-sm text-gray-500 text-center">Mi chiamo Tommaso e abito in provincia di Milano. Sono partito
                come consulente software di gestione aziendale, posizione che ho
                ricoperto per 3 anni, esperienza che mi ha portato a sviluppare
                una passione per l'informatica, grazie a cui ho deciso di
                intraprendere la strada di diventare uno sviluppatore fullstack.
              </span>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-8">
            <div className="flex flex-col items-center">
              <img className="w-[120px] h-[120px] mb-3 rounded-full shadow-lg" src={Giuseppe_Mattera} alt="img not found" />
              <h5 className="mb-4 text-xl font-medium text-gray-900">
                Giuseppe Mattera
              </h5>
              <span className="text-sm text-gray-500 text-center">
                Sono un appassionato di informatica con una fervida attrazione per la programmazione. 
                Ho trovato nella creazione di codice un modo per esprimere la mia creatività e risolvere problemi in modo innovativo. 
                Sono sempre alla ricerca di nuove sfide per ampliare le mie conoscenze e le mie abilità nel 
                vasto mondo della programmazione.
              </span>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-8">
            <div className="flex flex-col items-center">
              <img className="w-[120px] h-[120px] mb-3 rounded-full shadow-lg" src={Raffaele} alt="img not found" />
              <h5 className="mb-4 text-xl font-medium text-gray-900">
                Raffaele Angelo Filannino
              </h5>
              <span className="text-sm text-gray-500 text-center">
              Sono Raffaele abito a Barletta in puglia, sono un appassionato del ambito IT, da poco diventato un Full-stack-Developer, 
              ho la passione per la tecnologia fin da piccolo, per un anno ho lavorato come assemblatore e programmatore robot Comau ed 
              ora ho l'ambizione di diventare uno sviluppatore web.
              </span>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-8">
            <div className="flex flex-col items-center">
              <img className="w-[120px] h-[120px] mb-3 rounded-full shadow-lg" src={Matteo} alt="" />
              <h5 className="mb-4 text-xl font-medium text-gray-900">
                Matteo Petrucci
              </h5>
              <span className="text-sm text-gray-500 text-center">
              Ciao, sono Matteo Petrucci. Sono un ragazzi di 26 anni, negli
              ultimi anni ho fatto svariati lavori, ma la mia passione per la
              tecnologia mi ha portato ad iniziare un corso Full stack in
              DevelHope, con il quale credo di potermi creare un futuro in
              questo settore.
              </span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WhoAreWe;
