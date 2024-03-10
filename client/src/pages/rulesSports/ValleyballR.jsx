import padel from "../../assets/rulesSport/padel.jpg";
import rArrow from "../../assets/rulesSport/right-arrow.png";
import lArrow from "../../assets/rulesSport/left-arrow.png";
const ValleyR = () => {
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
            <h2 className="font-anton text-8xl">Regole del Padel</h2>

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
                IL FONDAMENTALI
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
                onClick={() => scrollToSection("palla-racchetta")}
              >
                BATTUTA, PUNTEGGI E TECNICHE
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
                LE PRINCIPALI INFRAZIONI
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[7.2rem] max-2xl:group-hover:-translate-x-[3.7rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
            </div>
          </div>
          <img src={padel} alt="" className="w-2/4 h-screen" />
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="palla-racchetta" className="font-anton text-3xl">
            IL FONDAMENTALI
          </h4>
          <p className="font-medium my-8">
            Il terreno di gioco è un rettangolo di m 18 x 9, diviso in due metà
            campo dalla rete e dalla linea di metà campo. A sua volta ciascuna
            metà campo è suddivisa in due zone:{" "}
            <strong>la zona d'attacco</strong> (dalla rete alla linea dei 3
            metri) e <strong>la zona di difesa</strong>(dalla linea dei 3 metri
            alla linea di fondo campo).
          </p>
          <p className="font-medium">
            Vi è un'ulteriore suddivisione teorica (in quanto non delimitata da
            linee tracciate sul campo) di ogni metà campo in{" "}
            <strong>6 zone numerate</strong>: si assegna il numero{" "}
            <strong>1</strong> alla zona di difesa a destra, il numero{" "}
            <strong>2</strong> alla zona di attacco a destra e si prosegue in
            senso antiorario fino alla
            <strong>zona 6</strong>, corrispondente a quella centrale di difesa.
          </p>
          <p className="font-medium my-8">
            La rete è disposta ad un'altezza di 2,43 m per gli uomini e di 2,24
            m per le donne (sono previste altezze inferiori per le categorie
            giovanili).
          </p>
          <p className="font-medium">
            Ogni squadra in campo è formata da <strong>6 giocatori</strong>. I
            ruoli dei 6 giocatori sono:{" "}
            <strong>palleggiatore, centrale, schiacciatore</strong>(chiamato
            anche "ala" o "martello"), <strong>opposto e libero</strong>. Il
            “libero” è il giocatore che indossa una maglia di colore diverso, ha
            un ruolo difensivo, non può battere, fare muro o compiere azioni
            d'attacco (se non in casi eccezionali dalla seconda linea e con i
            piedi ben fissi al terreno di gioco).
          </p>
          <p className="font-medium my-8">
            Lo scopo del gioco è realizzare punti facendo cadere la palla nel
            campo avversario (fase di attacco) ed impedendo che l'altra squadra
            faccia altrettanto (fase difensiva).
          </p>
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="punteggio" className="font-anton text-3xl">
            BATTUTA, PUNTEGGI E TECNICHE
          </h4>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Battuta</h5>
            <p className="font-medium my-8">
              La squadra che parte con il possesso di palla è la{" "}
              <strong>squadra in battuta</strong>, mentre l'altra è chiamata{" "}
              <strong>squadra in ricezione</strong>. Il giocatore di zona 1 si
              porta dietro la linea di fondocampo ed, entro
              <strong>8 secondi</strong> dal fischio dell'arbitro, mette la
              palla in gioco effettuando la battuta o servizio. La palla deve
              oltrepassare la rete e giungere nel campo avversario. L'azione
              continua fin quando la palla non tocca il terreno di gioco, è
              inviata fuori campo o è commesso un fallo. Se il punto è assegnato
              alla squadra già al servizio, questa{" "}
              <strong>continua a servire</strong>. Se la squadra in ricezione
              vince l'azione, conquista oltre al punto anche il diritto a
              servire e i suoi giocatori{" "}
              <strong>ruotano di una posizione in senso orario</strong>.
            </p>
            <p className="font-medium">
              I giocatori di seconda linea (posizioni 5, 6 e 1){" "}
              <strong>se si trovano nella zona di attacco</strong> non possono
              inviare la palla nel campo avversario se la colpiscono sopra
              l'altezza della rete; possono però inviare la palla nel campo
              avversario se la colpiscono sotto l'altezza della rete o se la
              colpiscono mentre staccano dalla zona di difesa.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Punteggi</h5>
            <p className="font-medium my-8">
              La partita è divisa in "<strong>set</strong>". Per vincere una
              partita bisogna vincere 3 dei 5 set. Un set è vinto dalla squadra
              che per prima arriva a{" "}
              <strong>25 punti con uno scarto di almeno due punti</strong>. In
              caso di parità sul punteggio di 24-24 si va avanti ad oltranza
              finché il margine di una delle due squadre non raggiunge i due
              punti. Nel caso si arrivi a 2 set pari, il quinto set viene
              chiamato <strong className="italic">tie-break</strong> e viene
              giocato ai <strong>15 punti</strong>, sempre con il vincolo dei
              due punti di scarto. Questo sistema di regole è stato introdotto
              nel 1998 ed è noto con il nome di{" "}
              <strong className="italic">Rally Point System</strong>.
            </p>
            <div className="my-8">
              <h5 className="font-anton text-2xl">Tecniche</h5>
              <p className="font-medium mb-8">
                Gli elementi tecnici fondamentali della pallavolo sono:
              </p>
              <ul className="list-disc list-outside font-medium">
                <li>
                  la <strong>battuta</strong>: è l'invio del pallone nella metà
                  campo avversaria. Esistono diversi tipi di battuta in base a
                  come viene colpita la palla: battuta dal basso, battuta
                  dall'alto e battuta in salto.
                </li>
                <li className="my-6">
                  il <strong>bagher</strong> o <strong>ricezione</strong>: viene
                  usato normalmente nella fase difensiva del gioco, si effettua
                  con le due mani ravvicinate, quasi distese in avanti, colpendo
                  la palla con gli avambracci uniti;
                </li>
                <li>
                  la <strong>schiacciata</strong>: gesto con cui si conclude
                  l'attacco, consiste nel colpire la palla velocemente, al di
                  sopra della rete, mandandola nel campo avversario;
                </li>
                <li className="my-6">
                  il <strong>muro</strong>: è un salto a braccia alte e tese
                  sopra la rete, serve per opporsi (per creare un muro, una
                  barriera) alle schiacciate avversarie, può essere eseguito da
                  un singolo giocatore, da due o da tre giocatori
                  contemporaneamente per aumentare l'opposizione alla
                  schiacciata;
                </li>
                <li>
                  il <strong>pallonetto</strong>: è un tocco morbido della
                  palla, serve per ingannare il muro avversario, infatti la
                  palla dolcemente scavalca le braccia tese a murare e ricade
                  dietro la schiena del (o dei) giocatore che sta effettuando il
                  muro.
                </li>
              </ul>
              <p className="font-medium my-8">
                Per ogni azione di gioco, la squadra ha a disposizione{" "}
                <strong>tre tocchi</strong> per inviare la palla nel campo
                avversario e{" "}
                <strong>
                  lo stesso giocatore non può eseguire due tocchi consecutivi
                </strong>
                . Il tocco da parte del muro non viene conteggiato nel numero di
                tocchi. La palla può essere colpita con{" "}
                <strong>qualunque parte del corpo</strong>, ma non può essere
                fermata, trattenuta o accompagnata.
              </p>
              <p className="font-medium mb-8">
                Una squadra conquista un punto quando:
              </p>
              <ul className="list-disc list-outside font-medium">
                <li>la palla cade a terra nel campo opposto;</li>
                <li className="my-6">
                  la squadra avversaria commette un fallo;
                </li>
                <li>la squadra avversaria riceve una penalizzazione.</li>
              </ul>
              <p className="font-medium my-8">
                In ogni partita è presente un arbitro che dirige il gioco,
                assegna i punti alle squadre e fischia gli errori.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-justify w-2/4 mt-16">
          <h4 id="punti-falli" className="font-anton text-center text-3xl">
            LE PRINCIPALI INFRAZIONI
          </h4>
          <p className="font-medium my-8">
            <strong>Falli di attacco:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li className="mb-6">
              tocco di palla sopra il bordo della rete da parte di un difensore
              in zona d'attacco;
            </li>
            <li>
              non è possibile attaccare quando la squadra avversaria ha
              effettuato la battuta e la palla si trova nella zona d'attacco e
              completamente al di sopra del bordo superiore della rete;
            </li>
            <li className="my-6">
              non è possibile toccare la palla se si trova nella zona
              avversaria;
            </li>
            <li className="mb-6">
              un giocatore non può attaccare con palla completamente al di sopra
              del bordo superiore della rete se l'ha ricevuta dal “libero” che
              si trova in zona d'accatto;
            </li>
            <li>
              il libero non può completare un attacco con la palla completamente
              al di sopra del bordo superiore della rete;
            </li>
          </ul>

          <p className="font-medium my-8">
            <strong>Fallo di velo:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li>
              quando un giocatore si posiziona tra il suo compagno in possesso
              della palla e l'avversario, ostruendogli la visuale;
            </li>
          </ul>

          <p className="font-medium my-8">
            <strong>Falli di muro:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li>
              il libero non può effettuare un muro, né tentare di effettuarlo;
            </li>
            <li className="my-6">
              non è possibile effettuare un muro su servizio avversario;
            </li>
            <li>
              un giocatore di seconda linea non può effettuare un muro
              effettivo;
            </li>
          </ul>

          <p className="font-medium my-8">
            <strong>Falli di posizione:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li>
              al momento del servizio tutti i giocatori in campo devono
              rispettare le propria posizione di gioco;
            </li>
            <li className="my-6">
              il giocatore in zona di difesa non può attaccare saltando dalla
              zona d'attacco;
            </li>
            <li>
              un giocatore non può effettuare il servizio al posto di un altro;
            </li>
          </ul>

          <p className="font-medium my-8">
            <strong>Falli del tocco di palla:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li>un giocatore non può trattenere la palla o bloccarla;</li>
            <li className="my-6">
              un giocatore non può toccare la palla due volte consecutive;
            </li>
            <li>
              una squadra deve completare l'azione e rinviare la palla nel campo
              avversario non superando i tre tocchi complessivi;
            </li>
          </ul>

          <p className="font-medium my-8">
            <strong>Falli di rotazione:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li>
              quando la squadra non effettua correttamente la rotazione dei
              turni di servizio;
            </li>
          </ul>

          <p className="font-medium my-8">
            <strong>Falli di rete:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li>
              un giocatore non può invadere il campo opposto con l'intero piede;
            </li>
            <li className="my-6">
              un giocatore, durante una propria azione, non può toccare la banda
              superiore della rete o l'antenna nella sua parte superiore;
            </li>
            <li>
              la palla non può essere toccata nello spazio opposto prima o
              durante l'attacco avversario;
            </li>
          </ul>

          <p className="font-medium my-8">
            <strong>Falli di formazione:</strong>
          </p>
          <ul className="list-disc list-outside font-medium">
            <li className="mb-8">
              quando in campo sono schierati dei giocatori non riportati nella
              formazione riportata a referto per quel set;
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ValleyR;
