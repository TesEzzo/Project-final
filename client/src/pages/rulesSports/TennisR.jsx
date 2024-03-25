import tennis from "../../assets/rulesSport/tennis.jpg";
import rArrow from "../../assets/rulesSport/right-arrow.png";
import lArrow from "../../assets/rulesSport/left-arrow.png";
const TennisR = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100; // Altezza della navbar in pixel
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
      <div className="w-full flex flex-col items-center leading-relaxed">
        <div className="flex flex-row w-full h-screen">
          <div className="flex flex-col items-center justify-between w-2/4 bg-gradient-to-b from-white to-ter py-20 h-screen text-center">
            <h2 className="font-anton text-8xl max-md:text-6xl">Regole del Tennis</h2>

            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[17.5rem] max-2xl:group-hover:translate-x-[9.6rem] max-lg:group-hover:translate-x-[5.5rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("servizio")}
              >
                IL SERVIZIO
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[17.5rem] max-2xl:group-hover:-translate-x-[9.6rem] max-lg:group-hover:-translate-x-[5.5rem] group-hover:opacity-100 duration-500"
              />
            </div>

            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[7.3rem] max-2xl:group-hover:translate-x-[3.5rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.3rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("palla-racchetta-tennis")}
              >
                LA PALLA E LA RACCHETTA DA TENNIS
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[7.3rem] max-2xl:group-hover:-translate-x-[3.5rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.3rem] group-hover:opacity-100 duration-500"
              />
            </div>

            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[7.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("punteggio")}
              >
                IL SISTEMA DI PUNTEGGIO NEL TENNIS
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[7.2rem] max-2xl:group-hover:-translate-x-[3.7rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
            </div>

            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[9.3rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[2.3rem] max-lg:group-hover:translate-x-[2.2rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("punti-falli")}
              >
                I PUNTI BUONI, CATTIVI E I FALLI
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[9.3rem] max-2xl:group-hover:-translate-x-[3.7rem] max-[1300px]:group-hover:-translate-x-[2.3rem] max-lg:group-hover:-translate-x-[2.2rem] group-hover:opacity-100 duration-500"
              />
            </div>
          </div>
          <img src={tennis} alt="" className="w-2/4 h-screen" />
        </div>

        <div id="servizio" className="flex flex-col text-justify w-2/4 mt-16">
          <h4 className="font-anton text-center text-3xl">IL SERVIZIO</h4>
          <p className="font-medium my-8">
            Il servizio di tennis non è altro che la battuta, il tiro che serve
            per far cominciare il gioco. Per stabilire chi inizia per primo a
            battere, si lancia una monetina. Chi vince, non solo inizia per
            primo ma può decidere anche in quale campo giocare e persino lasciar
            scegliere l'avversario (nell'ottica di fair play).
          </p>
          <p className="font-medium mb-8">
            Il servizio è valido quando chi serve:
          </p>
          <ul className="list-disc list-outside font-medium">
            <li>
              Ha i piedi fuori dal campo fino a che la palla non viene colpita;
            </li>
            <li className="my-6">Si posiziona dietro la linea di fondo;</li>
            <li>
              Si trova alla destra della riga centrale che divide il campo da
              tennis;
            </li>
          </ul>
          <p className="font-medium mb-6">
            Una volta colpita la palla, la pallina deve rimbalzare nella metà
            campo avversaria diagonalmente opposta a quella della battuta. Se il
            servizio è corretto e l'avversario non riesce a rispondere,
            l'arbitro grida "<strong>ACE</strong>" e il punto viene convalidato.
          </p>
          <p className="font-medium">
            Se l'avversario tocca la palla e la spedisce indietro, il gioco
            continua.
          </p>
          <p className="font-medium">
            Il servizio è considerato valido se la pallina tocca la rete e
            rimbalza correttamente nel campo avversario.
          </p>
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="palla-racchetta-tennis" className="font-anton text-3xl">
            LA PALLA E LA RACCHETTA DA TENNIS
          </h4>
          <p className="font-medium my-8">
            La pallina da tennis moderna è di colore giallo, in passato invece
            si caratterizzava dal colore bianco (o nero). La dimensione classica
            ha il diametro compreso tra cm 6,54 e cm 6,86 cm e un peso tra i 56
            e i 59,4 grammi.
          </p>
          <p className="font-medium">
            Le palline da tennis sono state classificate dalla federazione
            internazionale in 3 categorie, più una quarta categoria (high
            altitude) riservata alle competizioni che si svolgono in altura, in
            località situate a oltre 1219 metri sul livello del mare.
          </p>
          <table className="font-medium [&>*>*>*]:border [&>*>*>*]:border-black [&>*>*>*]:p-2">
            <thead className="border border-black">
              <tr>
                <th></th>
                <th>Type1 (Fast)</th>
                <th>Type2 (Medium)</th>
                <th>Type3 (Slow)</th>
                <th>Type4 (High Altitude)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peso</td>
                <td className="text-center">56,0-59,4 g</td>
                <td className="text-center">56,0-59,4 g</td>
                <td className="text-center">56,0-59,4 g</td>
                <td className="text-center">56,0-59,4 g</td>
              </tr>
              <tr>
                <td>Misusa diametro</td>
                <td className="text-center">6,54 - 6.86 cm</td>
                <td className="text-center">6,54 - 6.86 cm</td>
                <td className="text-center">7,00 - 7,30 cm</td>
                <td className="text-center">6,54 - 6.86 cm</td>
              </tr>
              <tr>
                <td>Rimbalzo</td>
                <td className="text-center">138-151 cm</td>
                <td className="text-center">135-147 cm</td>
                <td className="text-center">135-147 cm</td>
                <td className="text-center">122-135 cm</td>
              </tr>
              <tr>
                <td>Deformazione (forward)</td>
                <td className="text-center">0,56-0,74 cm</td>
                <td className="text-center">0,56-0,74 cm</td>
                <td className="text-center">0,56-0,74 cm</td>
                <td className="text-center">0,56-0,74 cm</td>
              </tr>
              <tr>
                <td>Deformazione (return)</td>
                <td className="text-center">0,74-1,08 cm</td>
                <td className="text-center">0,80-1,08 cm</td>
                <td className="text-center">0,80-1,08 cm</td>
                <td className="text-center">0,80-1,08 cm</td>
              </tr>
              <tr>
                <td>Colore</td>
                <td className="text-center">Bianco o giallo</td>
                <td className="text-center">Bianco o giallo</td>
                <td className="text-center">Bianco o giallo</td>
                <td className="text-center">Bianco o giallo</td>
              </tr>
            </tbody>
          </table>
          <p className="font-medium my-8">
            La scelta del peso della tua racchetta sarà fatta in base alla tua
            età, alla tua taglia e al tuo livello di gioco. Più pesante è una
            racchetta, più potenza fornirà, assorbirà meglio le vibrazioni, ma
            sarà difficile da maneggiare e richiederà un buon padronanza tecnica
            per sfruttarla. Al contrario, una racchetta leggera fornirà
            manovrabilità ma sarà meno potente. Non sopravvalutare il tuo
            livello, altrimenti i tuoi progressi saranno limitati. È meglio
            scegliere un peso più leggero che troppo pesante per evitare
            l'affaticamento muscolare e quindi il rischio di lesioni. Puoi
            sempre appesantire una racchetta con il piombo se risulta essere
            troppo leggera.
          </p>
          <table className="font-medium [&>*>*>*]:border [&>*>*>*]:border-black [&>*>*>*]:p-2">
            <thead className="border border-black">
              <tr>
                <th>LIVELLO/TIPO DI GIOCATORE</th>
                <th>PESO NON FORTE PER GLI UOMINI</th>
                <th>PESO NON FORTE PER LE DONNE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Giovani che passano la racchetta per adulti</td>
                <td className="text-center">250-270 g</td>
                <td className="text-center">250-270 g</td>
              </tr>
              <tr>
                <td>Anziani alla ricerca di leggerezza e potenza</td>
                <td className="text-center">240-270 g</td>
                <td className="text-center">240-265 g</td>
              </tr>
              <tr>
                <td>Principianti e inizio della 4a serie</td>
                <td className="text-center">260-275 g</td>
                <td className="text-center">255-275 g</td>
              </tr>
              <tr>
                <td>Livello intermedio (vicino alla 3a serie)</td>
                <td className="text-center">280-300 g</td>
                <td className="text-center">270-290 g</td>
              </tr>
              <tr>
                <td>Livello avanzato (3a serie vicino alla 2a serie)</td>
                <td className="text-center">circa 300 g</td>
                <td className="text-center">280-300 g</td>
              </tr>
              <tr>
                <td>Livello avanzato (2a serie e +)</td>
                <td className="text-center">
                  295-340 g Buon fisico richiesto da 315g
                </td>
                <td className="text-center">
                  285-315 g Buon fisico richiesto da 310g
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="punteggio" className="font-anton text-3xl">
            IL SISTEMA DI PUNTEGGIO NEL TENNIS
          </h4>
          <p className="font-medium my-8">
            Ogni game nel tennis inizia con un punteggio di 0-0, che viene
            chiamato "love". Quando un giocatore vince un punto, il punteggio
            diventa 15-0. Se il giocatore vincente è lo stesso nel punto
            successivo, il punteggio diventa 30-0. Nel terzo punto vinto
            consecutivamente, il punteggio diventa 40-0. Se entrambi i giocatori
            sono a 40-40, si chiama "deuce". Da questo punto, un giocatore deve
            vincere due punti consecutivi con un vantaggio di almeno uno per
            vincere il game. Se un giocatore vince un punto dopo il deuce, il
            punteggio diventa "vantaggio" per quel giocatore. Se il giocatore in
            vantaggio vince il punto successivo, vince il game. Se il giocatore
            in svantaggio vince il punto, il gioco torna a deuce. Un game può
            essere vinto anche con una differenza di due punti se la partita
            arriva al punteggio di vantaggio (vantaggio-40, ad esempio).
          </p>
          <div className="mb-8">
            <h5 className="font-anton text-2xl">Punteggio dei set:</h5>
            <p className="font-medium">
              Un set è una sequenza di game. Per vincere un set, un giocatore
              deve vincere almeno sei game e avere almeno due game di vantaggio
              sull'avversario. Se il set si conclude con un punteggio di 6-6,
              spesso viene giocato un tie-break per determinare il vincitore del
              set. In un tie-break, i giocatori accumulano punti da 1 a 7 e
              devono vincere per almeno due punti di differenza.
            </p>
          </div>
          <div>
            <h5 className="font-anton text-2xl">Punteggio del match:</h5>
            <p className="font-medium">
              Un match è composto da un numero specifico di set, solitamente tre
              o cinque, a seconda delle regole del torneo. Per vincere il match,
              un giocatore deve vincere il numero prestabilito di set (ad
              esempio, due su tre o tre su cinque). Il vincitore del match è il
              giocatore che ha vinto il numero necessario di set, a meno che non
              ci sia una sospensione o una modifica delle regole del torneo.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="punti-falli" className="font-anton text-3xl">
            I PUNTI BUONI, CATTIVI E I FALLI
          </h4>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Fare punti:</h5>
            <p className="font-medium">
              Per fare punti, un giocatore deve colpire la palla in modo che
              cada nel campo dell'avversario senza che quest'ultimo la
              restituisca in modo corretto. I punti vengono guadagnati quando
              l'avversario commette un errore (come colpire la palla fuori dal
              campo o mancarla completamente) o non riesce a restituire una
              palla valida in risposta al colpo dell'altro giocatore. Ogni volta
              che un giocatore vince un punto, il punteggio nel game aumenta
              progressivamente da 0 a 15, 30, 40, e infine il game.
            </p>
          </div>
          <div className="mb-8">
            <h5 className="font-anton text-2xl">Punteggio nullo/perso:</h5>
            <p className="font-medium">
              Un punto nullo si verifica quando nessun giocatore riesce a
              segnare un punto durante lo svolgimento di quel punto specifico.
              Un punto perso si verifica quando un giocatore commette un errore
              o non riesce a restituire la palla in modo corretto, concedendo il
              punto all'avversario. Un punto nullo può anche verificarsi se
              entrambi i giocatori commettono un errore simultaneo o se la palla
              tocca la rete durante uno scambio di gioco e non cade nel campo
              avversario.
            </p>
          </div>
          <div className="mb-8">
            <h5 className="font-anton text-2xl">Falli:</h5>
            <p className="font-medium">
              Un fallo nel tennis si verifica quando un giocatore viola le
              regole del gioco. Ci sono vari tipi di falli nel tennis, inclusi
              errori tecnici, come un doppio colpo nel servizio o toccare la
              rete durante il gioco. Altri tipi di falli includono comportamenti
              antisportivi, come insultare l'avversario o l'arbitro, o violare
              le regole di comportamento durante il gioco. I falli possono
              comportare penalità, come perdite di punto o di game, a seconda
              della gravità della violazione e delle regole specifiche del
              torneo o della competizione. Gli errori non intenzionali, come
              colpire la palla fuori dal campo o mancare un colpo, sono
              considerati falli, ma non portano generalmente a sanzioni
              disciplinari se non comportano una violazione specifica delle
              regole.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TennisR;
