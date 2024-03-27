import padel from "../../assets/rulesSport/padel.jpg";
import rArrow from "../../assets/rulesSport/right-arrow.png";
import lArrow from "../../assets/rulesSport/left-arrow.png";
const PadelR = () => {
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
            <h2 className="font-anton text-8xl max-md:text-6xl">Regole del Padel</h2>

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
                onClick={() => scrollToSection("palla-racchetta")}
              >
                LA PALLA E LA RACCHETTA DA PADEL
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
                IL SISTEMA DI PUNTEGGIO NEL PADEL
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
          <img src={padel} alt="" className="w-2/4 h-screen" />
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="servizio" className="font-anton text-3xl">
            IL SERVIZIO
          </h4>
          <p className="font-medium my-8">
            Il servizio è uno dei momenti più importanti della partita perché è
            quello che apre il game. Per quanto riguarda il servizio, il padel
            ha regole molto specifiche che lo differenziano dal tennis. In primo
            luogo, è fondamentale che il giocatore{" "}
            <strong>
              stia dietro la linea di servizio, quindi non può calpestarla
            </strong>{" "}
            durante il colpo perché verrebbe contato come un punto perso. Prima
            di colpire la palla e mandarla dall'altra parte del campo, bisogna
            farla rimbalzare una volta sul terreno di gioco e successivamente
            eseguire il colpo. Infine, è necessario che il contatto della
            racchetta con la palla avvenga al massimo{" "}
            <strong>all'altezza del bacino</strong>.
          </p>
          <p className="font-medium">
            Quando la palla viene colpita al servizio, deve attraversare l'altro
            lato del campo senza toccare la rete. Al minimo tocco, il servizio
            verrebbe considerato nullo. Inoltre, il servizio deve essere
            effettuato nella direzione opposta, cioè in{" "}
            <strong>diagonale</strong>. Per far si che il servizio sia buono, è
            anche necessario che la palla rimbalzi all'interno del campo
            avversario, ovvero dentro la{" "}
            <strong>linea di servizio avversaria</strong>, se rimbalza al di
            fuori, o colpisce direttamente un muro o una parete, il servizio non
            è valido. Ovviamente il servizio che rimbalzerà all'interno del
            campo avversario non potrà mai colpire con un secondo rimbalzo la
            zona della griglia, al contrario di una parete laterale o di fondo
            la griglia è considerata fuori campo.
          </p>
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="palla-racchetta" className="font-anton text-3xl">
            LA PALLA E LA RACCHETTA DA PADEL
          </h4>
          <p className="font-medium my-8">
            Le caratteristiche della palla da padel e della racchetta da padel
            giocano ench'esse un ruolo importante nelle regole ufficiali. Questo
            significa che devono avere qualità e caratteristiche specifiche per
            essere ufficialmente accettate. Nel regolamento si specifica che “La
            palla deve essere una <strong>sfera di gomma</strong> con una
            superficie esterna uniforme di colore{" "}
            <strong>bianco o giallo</strong>.
          </p>
          <p className="font-medium">
            Il suo diametro dovrebbe essere compreso tra{" "}
            <strong>6,35 e 6,77 cm</strong> e il suo peso tra{" "}
            <strong>56,0 e 59,4 grammi</strong>. Deve avere un rimbalzo tra{" "}
            <strong>135 e 145 cm</strong>
            quando viene lasciata cadere su una superficie dura da 2,54 m. La
            palla deve avere una <strong>pressione interna</strong> compresa tra{" "}
            <strong>4,6 kg e 5,2 kg per 2,54 centimetri quadrati</strong>.
          </p>
          <p className="font-medium my-8">
            Per quanto riguarda la racchetta, le regole affermano che “La
            racchetta è composta da due parti: testa e manico”.
          </p>
          <ul className="list-disc list-outside font-medium">
            <li className="mb-6">
              Manico: <strong>lunghezza massima</strong>: 20 cm,{" "}
              <strong>larghezza massima</strong> (compreso il ponte, escluso lo
              spazio vuoto tra i due bracci): 50 mm,{" "}
              <strong>spessore massimo</strong>: 50 mm.
            </li>
            <li>
              Testa: lunghezza variabile. La lunghezza della testa più la
              lunghezza del manico non può superare i 45,5 cm, larghezza
              massima: 26 cm, spessore massimo: 38 mm. La lunghezza totale della
              racchetta, testa più manico, non può superare i{" "}
              <strong>45,5 cm</strong>.
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="punteggio" className="font-anton text-3xl">
            IL SISTEMA DI PUNTEGGIO NEL PADEL
          </h4>
          <p className="font-medium my-8">
            Questo sistema è molto simile a quello del tennis. Il primo punto
            equivale a <strong>15 punti</strong>, il secondo a{" "}
            <strong>30</strong>, il terzo a 40 e il quarto{" "}
            <strong>è il punto che decide il game</strong>. Questo cambia solo
            se il punteggio è di parità a 40. In questo caso, il quarto punto
            diventa <strong>un punto di vantaggio</strong>, per poter chiudere
            il gioco quindi, è necessario vincere due punti consecutivi.
          </p>
          <p className="font-medium mb-8">
            Le partite di padel sono composte da{" "}
            <strong>set e game(giochi)</strong>. Generalmente, si gioca{" "}
            <strong>il meglio di tre set</strong>, e ognuno di questi set è
            composto da game. Affinché una squadra vinca un set, è necessario
            <strong> vincere 6 game</strong>, mantenendo almeno un{" "}
            <strong>vantaggio di due game</strong>. Se le squadre sono in{" "}
            <strong>parità a 5-5</strong>, allora per vincere la partita è
            necessario <strong>vincere 7 game</strong>, con un punteggio di 7-5.
            Ma, se si verifica un pareggio 6-6, allora deve essere giocato
            quello che è noto come <strong>spareggio o tie break</strong>.
          </p>
          <p className="font-medium">
            In un tie break, la squadra con <strong>7 punti vince</strong>,
            mantenendo un
            <strong>vantaggio di due punti</strong>. Se questo vantaggio di due
            punti non viene raggiunto, allora il tie break continuerà fino a
            quando una delle due squadre ottiene la differenza di due punti. In
            un tie break o spareggio non si conta più come nel game 15, 30, 40…
            ma si conta in modo naturale a partire da{" "}
            <strong>1, 2, 3, 4, 5, 6, 7</strong> e così via.
          </p>
        </div>
        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="punti-falli" className="font-anton text-3xl">
            I PUNTI BUONI, CATTIVI E I FALLI
          </h4>
          <p className="font-medium my-8">
            Ci sono diverse situazioni in cui un punto può essere vinto o perso.
            Come abbiamo visto prima, al servizio, la palla deve passare
            dall'altra parte senza toccare la rete, e rimbalzando sempre prima
            della linea di servizio avversaria. La palla{" "}
            <strong>deve sempre colpire prima il terreno</strong> e poi
            rimbalzare sulle pareti o sulle griglie del campo. Il giocatore
            vince o perde il punto quando accade nei seguenti casi:
          </p>
          <ul className="list-disc list-outside font-medium">
            <li className="mb-6">
              Punto valido: La palla rimbalza sul terreno e successivamente va
              <strong> fuori dal campo</strong>. La palla rimbalza due volte nel
              campo dell'avversario. La palla rimbalaza sul terreno e su una
              delle pareti (laterale o di fondo) senza che l'avversario riesca a
              rispondere.
            </li>
            <li>
              Punto nullo: La palla <strong>tocca la rete</strong> e attraversa
              il lato avversario del campo (non valido sul servizio). In questo
              caso si ripete sempre che non si colpisca la rete metallica dopo
              il rimbalzo, in quel caso non si ripete ma vale come primo
              tentativo di servizio.
            </li>
            <li>
              Punto perso: Quando gli avversari mandano la palla fuori dal campo
              o essa tocca direttamente un muro senza prima rimbalzare sul
              terreno. Quando la palla rimbaza sul terreno ma finisce sulla
              griglia o rete metallica.
            </li>
          </ul>
          <p className="font-medium my-8">
            È anche importante sapere che ai giocatori{" "}
            <strong>è proibito toccare la rete</strong> o appoggiarsi ad essa.
            Se il giocatore commette questo errore, è un punto perso. Come nel
            tennis durante il servizio, i giocatori hanno{" "}
            <strong>due possibilità</strong> di servire correttamente, se dopo
            il secondo tentativo falliscono di nuovo, allora si perde il punto.
          </p>
        </div>
      </div>
    </>
  );
};

export default PadelR;
