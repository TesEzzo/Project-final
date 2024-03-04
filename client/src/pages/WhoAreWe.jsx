import FrancescoPB from "../assets/developers/FrancescoPB.jpg";
import TommasoM from "../assets/developers/TommasoM.jpg";

const WhoAreWe = () => {
  return (
    <>
      <article>
        <h2>Chi siamo?</h2>
        <p>
          Siamo un piccolo team di junior Full Stack developer che da poco siamo
          entrati in questo mondo dello sviluppo web grazie a{" "}
          <strong>
            <a href="https://www.develhope.co/it/sign-up/">DEVELHOPE</a>
          </strong>
          , un corso accellerato di 6 mesi dove oltre alla didattica facciamo
          tantissima pratica ogni giorno, e questo sito ne è l'esempio
        </p>
        <div className="flex flex-col gap-5">
          <section>
            <img
              src={FrancescoPB}
              alt="Francesco Paolo Barranca"
              className="max-w-32"
            />
            <h3>
              <strong>Francesco Paolo Barranca</strong>
            </h3>
            <p>
              Nato a Palermo, sono un Full-stack-Developer anche se prima facevo
              altri lavori, mi sono appassionato perchè mi ha affascinato come i
              siti possano essere cosi affascinanti, e vedere i siti modellati
              come voglio io e vedere che le cose funzionano mi crea un grande
              senso di soddisfazione.
            </p>
          </section>

          <section>
            <img src={TommasoM} alt="Tommaso Merli" className="max-w-32" />
            <h3>
              <strong>Tommaso Merli</strong>
            </h3>
            <p>
              Mi chiamo Tommaso e abito in provincia di Milano. Sono partito
              come consulente software di gestione aziendale, posizione che ho
              ricoperto per 3 anni, esperienza che mi ha portato a sviluppare
              una passione per l'informatica, grazie a cui ho deciso di
              intraprendere la strada di diventare uno sviluppatore fullstack.
            </p>
          </section>

          <section>
            <img src="" alt="" />
            <h3></h3>
            <p></p>
          </section>

          <section>
            <img src="" alt="" />
            <h3></h3>
            <p></p>
          </section>

          <section>
            <img src="" alt="" />
            <h3></h3>
            <p></p>
          </section>
        </div>
      </article>
    </>
  );
};

export default WhoAreWe;
