import padel from "../../assets/rulesSport/padel.jpg";
import rArrow from "../../assets/rulesSport/right-arrow.png";
import lArrow from "../../assets/rulesSport/left-arrow.png";
const BasketR = () => {
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
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[7.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("punti")}
              >
                COME SI CONTEGGIANO I PUNTI
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
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[7.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("palleggio")}
              >
                IL PALLEGGIO E LE VARIE INFRAZIONI
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
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[7.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("falli")}
              >
                I FALLI E LE RELATIVE PUNIZIONI
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
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[7.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("tempi")}
              >
                L'INPORTANZA DEI TEMPI
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
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[7.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("nba")}
              >
                LE DIFFERENZE TRA FIBA E NBA
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
          <h4 id="punti" className="font-anton text-3xl">
            COME SI CONTEGGIANO I PUNTI
          </h4>
          <p className="font-medium my-8">
            Visto che lo scopo di una partita di pallacanestro è fare{" "}
            <strong>più punti dell'avversario</strong>, cerchiamo prima di tutto
            di chiarire come si calcolano i punteggi in questo sport.
          </p>
          <p className="font-medium">
            In primo luogo, i punti si segnano facendo canestro, cioè
            indirizzando la palla verso il cesto e{" "}
            <strong>facendocela entrare</strong>. A seconda dei tiri, però, e
            della distanza da cui vengono eseguiti e dalle diverse azioni di
            gioco, i canestri possono valere un punteggio diverso.
          </p>
          <p className="font-medium my-8">
            Se guardate il campo (e più avanti in questo articolo trovate anche
            uno schema da poter eventualmente studiare) noterete che a una
            distanza di circa 6-7 metri dal cesto c'è una linea che disegna un
            semicerchio. Si chiama <strong>linea del tiro da tre punti</strong>.
          </p>
          <p className="font-medium">
            Se si tira dietro a quella linea e il tiro va a segno, si incassano
            appunto <strong>3 punti</strong>. Se si tira invece da dentro a
            quell'area l'eventuale canestro vale 2 punti.
          </p>
          <div className="my-8">
            <h5 className="font-anton text-2xl">I falli e le punizioni</h5>
            <p className="font-medium">
              Può capitare, però, come vedremo, che un giocatore subisca un
              fallo, o mentre sta girando per il campo o mentre sta effettuando
              un tiro. In questo caso, può aver diritto a quelli che si chiamano
              <strong>“tiri liberi“</strong>.
            </p>
            <p className="font-medium italic my-8">
              Sono tiri che vengono effettuati a gioco fermo e che il giocatore
              che ha subito il fallo compie all'interno di un cerchio posto a
              poco meno di 6 metri dal canestro. Ogni tiro libero messo a segno
              vale <strong>1 punto</strong>.
            </p>
            <p className="font-medium mb-8">
              Da notare, poi, che tiri liberi e canestri{" "}
              <strong>si possono combinare</strong>. Mettiamo infatti che un
              giocatore stia tirando ma, durante il movimento di tiro, subisca
              un fallo e che comunque il suo pallone vada a bersaglio.
            </p>
            <p className="font-medium">
              In quel caso, gli vengono riconosciuti i 2 o 3 punti del canestro
              e in più gli viene concesso un{" "}
              <strong>tiro libero supplementare</strong> dovuto al fallo.
              Un'azione, così, può portare a siglare fino a 4 punti. Tiri liberi
              supplementari, come vedremo, possono essere assegnati anche per
              falli a gioco fermo o per proteste.
            </p>
            <div className="mt-8">
              <h5 className="font-anton text-2xl">I canestri e i record</h5>
              <p className="font-medium mb-8">
                Ultime due note su questo argomento. La prima: nel caso in cui
                alla fine dei tempi regolamentari le due squadre si trovino in
                situazione di parità si svolgono dei{" "}
                <strong>tempi supplementari ad oltranza</strong>. Nel basket,
                infatti, non esiste il pareggio e una delle due squadre deve
                necessariamente vincere.
              </p>
              <p className="font-medium">
                Così al termine del tempo regolamentare, se le due squadre hanno
                raggiunto lo stesso punteggio, si disputa un{" "}
                <strong className="italic">overtime</strong> di 5 minuti. Se
                anche al termine di questi 5 minuti i punti sono gli stessi, si
                gioca un secondo tempo supplementare. E poi, se serve, un terzo,
                un quarto e così via, fino a quando alla fine di 5 minuti un
                team non prevale.
              </p>
            </div>
          </div>
        </div>

        <div
          id="palleggio"
          className="flex flex-col items-center text-justify w-2/4 mt-16"
        >
          <h4 className="font-anton text-3xl">
            IL PALLEGGIO E LE VARIE INFRAZIONI
          </h4>
          <p className="font-medium my-8">
            Lo scopo principale di una squadra di basket è, come detto, fare
            canestro. Affinché questo obiettivo sia raggiunto, però, bisogna
            prima di tutto portare la palla dall'altra parte del campo e
            avvicinarsi al canestro avversario. E questo - passaggi a parte - lo
            si può fare solo <strong>palleggiando</strong>.
          </p>
          <p className="font-medium">
            Ogni giocatore, per muoversi con la palla, deve infatti far
            <strong>rimbalzare il pallone a terra</strong>. Se non lo fa, cade
            in infrazioni che l'arbitro può e deve punire assegnando la palla
            agli avversari.
          </p>
          <p className="font-medium italic my-8">
            Diciamo subito che in genere non tutti i giocatori di una squadra
            sono chiamati a palleggiare spesso. Cestisti particolarmente alti
            come i <strong>centri</strong> (quelli che giocano sotto canestro),
            infatti, rischierebbero di farsi rubare facilmente il pallone.
          </p>
          <p className="font-medium">
            Quindi in genere ci si affida ai “piccoli” della squadra, cioè il
            <strong>playmaker</strong> e la guardia. Loro due sono agili e
            scattanti e hanno generalmente il compito di portare la palla
            dall'altra parte del campo per dare il via all'azione.
          </p>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Il terzo tempo, i passi</h5>
            <p className="font-medium">
              Le infrazioni, per quanto riguarda il palleggio, possono essere di
              vario tipo. La più comune è quella dei <strong>"passi"</strong> e
              consiste o nel partire da fermo senza palleggiare, o nel compiere
              una serie di passi dopo aver smesso di palleggiare.
            </p>
            <p className="font-medium my-8">
              Però si vedono giocatori smettere di palleggiare, fare uno o due
              passi e tirare o passare la palla senza che l'arbitro fischi
              alcunché. Quel tipo di gesto atletico si chiama infatti terzo
              tempo ed è consentito dal regolamento.
            </p>
            <p className="font-medium">
              In pratica, un giocatore - se riceve il pallone in corsa o se
              smette di palleggiare mentre è in corsa - può fare{" "}
              <strong>due passi</strong>, alternando il piede destro e il
              sinistro, prima di tirare o di passare il pallone.
            </p>
            <p className="font-medium mt-8">
              Attenzione però alle partenze da fermo. Se si riceve palla e si
              spostano entrambi i piedi prima di iniziare a palleggiare (senza
              quindi usarne uno come <strong>"piede perno"</strong>, come si usa
              dire) vengono fischiati i passi e si perde il possesso.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="falli" className="font-anton text-3xl">
            I FALLI E LE RELATIVE PUNIZIONI
          </h4>
          <p className="font-medium my-8">
            Visto che l'abbiamo anticipato, parliamo un po' dei principali tipi
            di fallo che si possono commettere. I più comuni sono i cosiddetti
            <strong>falli personali</strong>. Ovvero falli che si commettono
            tramite un contatto fisico con un avversario.
          </p>
          <p className="font-medium italic">
            Di solito c'è ampia tolleranza nei{" "}
            <strong>contatti considerati di gioco</strong>. Non è raro, infatti,
            vedere giocatori - magari durante un'azione di “post basso” - che si
            spingono petto contro schiena, o che cercano di strapparsi
            vicendevolmente la palla. O, ancora, che cozzano a grande velocità
            l'uno contro l'altro durante un blocco regolare.
          </p>
          <p className="font-medium mt-8">
            Sono invece sanzionati tutti i{" "}
            <strong>tocchi che incidono su un tiro</strong> (ad esempio un colpo
            sul braccio del tiratore). Oppure quegli scontri in cui un giocatore
            non mantiene la propria posizione ma la muta proprio per procurare
            il contatto con l'avversario.
          </p>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Lo sfondamento e il tecnico</h5>
            <p className="font-medium">
              Un altro fallo molto comune è quello di{" "}
              <strong>sfondamento</strong>, che si può commettere quando si
              attacca.
            </p>
            <p className="font-medium my-8">
              Se infatti un giocatore parte a testa bassa verso il canestro e
              <strong>impatta</strong> contro un avversario che in quel momento
              si trova fermo nella sua posizione (e non si sta quindi spostando
              a sbarrargli la strada) commette fallo di sfondamento. In quel
              caso l'azione viene fermata e la palla assegnata alla squadra che
              sta difendendo.
            </p>
            <p className="font-medium">
              Esistono poi dei falli che avvengono a gioco fermo, ma non sono
              meno importanti. Il più comune è il <strong>fallo tecnico</strong>
              , che l'arbitro fischia contro un giocatore o un allenatore che
              eccede in proteste o che fa gesti di scherno nei confronti degli
              avversari.
            </p>
            <p className="font-medium mt-8">
              La punizione consiste in due tiri liberi e possesso alla squadra
              avversaria. Inoltre, quando si commettono due falli tecnici in una
              partita, si viene <strong>espulsi</strong>.
            </p>
            <div className="my-8">
              <h5 className="font-anton text-2xl">I falli più violenti</h5>
              <p className="font-medium">
                C'è poi il <strong>fallo antisportivo</strong> o intenzionale,
                che consiste in un fallo pericoloso compiuto senza aver
                intenzione di rubare la palla. Questo costa due tiri liberi e
                possesso agli avversari. Infine, per falli molto pericolosi o
                per proteste troppo veementi c'è anche la possibile espulsione
                diretta.
              </p>
              <p className="font-medium">
                Nell'NBA, questi ultimi falli hanno un nome lievemente diverso e
                anche le punizioni possono variare. Il{" "}
                <strong className="italic">technical foul</strong> comporta un
                tiro libero per gli avversari ma non necessariamente il
                possesso.
              </p>
              <p className="font-medium">
                Il <strong>flagrant foul</strong> invece deriva da un fallo
                considerato eccessivo e comporta due tiri liberi e palla agli
                avversari. Nel caso però di “flagrant 2” (cioè il più grave, a
                giudizio degli arbitri) c'è anche l'espulsione del giocatore.
              </p>
            </div>
            <div className="my-8">
              <h5 className="font-anton text-2xl">Le sanzioni</h5>
              <p className="font-medium">
                Vediamo infine anche le sanzioni per i falli comuni. Nel caso in
                cui il fallo avvenga durante il movimento di tiro, quando cioè
                il giocatore ha smesso di palleggiare e sta per tirare, la
                punizione sono i <strong>tiri liberi</strong>. Questi possono
                essere uno (se il canestro va a segno), due (se il tiro era da
                due punti) o tre (se era da tre punti).
              </p>
              <p className="font-medium italic">
                Nel caso in cui, però, il fallo avvenga durante un'azione
                normale di gioco ci sono due possibilità. Generalmente la
                squadra che ha subito il fallo riprende l'azione da una{" "}
                <strong>rimessa laterale</strong>.
              </p>
              <p className="font-medium">
                Può però anche capitare che una delle due formazioni abbia già
                fatto 4 falli in quella frazione di gioco e abbia quindi messo
                gli avversari <strong>in bonus</strong>. In quest'ultimo caso,
                ogni fallo (tranne quelli che si fanno in attacco) comporta due
                tiri liberi per gli avversari.
              </p>
              <p className="font-medium">
                Quando un giocatore commette il <strong>quinto</strong> (in
                Europa) o il sesto (in America) fallo non può infine più
                prendere parte alla partita.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="tempi" className="font-anton text-3xl">
            L'INPORTANZA DEI TEMPI
          </h4>
          <p className="font-medium my-8">
            Come ogni neofita nota immediatamente, il basket è però un gioco in
            cui pesantissima è l'influenza del <strong>tempo</strong> e dei
            ritmi. Tanto è vero che si parla di “tiri in ritmo”, di
            “playmaker-metronomi” e di secondi che stanno per scadere.
          </p>
          <p className="font-medium mb-8">
            Per impedire che il gioco sia rallentato e che si attivino tattiche
            difensivistiche, infatti, nel corso del tempo i vari organismi sia
            europei che statunitensi hanno introdotto una serie di regole che
            servono a <strong>ridurre i tempi di gioco</strong>.
          </p>
          <p className="font-medium">
            L'obiettivo primario di ogni federazione, infatti, è quello di
            garantire la spettacolarità delle partite. E questa viene preservata
            quando le squadre sono costrette a creare gioco, magari anche con un
            timer che morde loro la coda. Vediamo quindi, punto per punto, quali
            sono i principali tempi da tenere a mente quando si gioca.
          </p>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Calcio d'inizio:</h5>
            <p className="font-medium">
              In primo luogo, ogni partita è composta da{" "}
              <strong>4 periodi</strong>, a loro volta raggruppati in 2 tempi.
              Praticamente il primo e il secondo periodo - o quarto -
              costituiscono il primo tempo e il terzo e quarto periodo il
              secondo tempo.
            </p>
            <p className="font-medium my-8">
              In Europa ogni periodo dura 10 minuti, nell'NBA 12. Tra il primo e
              il secondo tempo c'è una <strong>pausa</strong> più lunga, in
              genere di 15 minuti, e le squadre tornano negli spogliatoi.
            </p>
            <p className="font-medium italic mb-8">
              I <strong>cambi</strong> possono avvenire in ogni pausa del gioco.
              Non c'è nessun limite alle sostituzioni e l'importante è che ci
              siano sempre 5 giocatori in campo per ciascuna squadra. In genere
              le panchine, non a caso, sono composte da altri 5-7 giocatori
              pronti a subentrare in qualsiasi momento ai titolari per farli
              rifiatare o per precise esigenze tattiche.
            </p>
            <p className="font-medium">
              Ogni squadra ha 8 secondi per superare la propria metà campo e{" "}
              <strong>24 secondi</strong> per effettuare un tiro che vada a
              segno o tocchi almeno il ferro, cioè l'anello del canestro. Se non
              ci riesce in quel tempo, perde la palla, che passa agli avversari.
            </p>
          </div>
          <div className="mb-8">
            <h5 className="font-anton text-2xl">
              Le regole dei 3 secondi e dei 5 secondi
            </h5>
            <p className="font-medium">
              Anche la presenza di un giocatore all'interno dell'area dei 3
              secondi (la zona pitturata di colore diverso posta sotto al
              canestro) è regolamentata. Quando si è in attacco, un giocatore
              non può infatti stazionare in quella zona per più di{" "}
              <strong>3 secondi</strong>. È difatti costretto costantemente a
              entrare ed uscire da essa, se vuole gravitare lì attorno.
            </p>
            <p className="font-medium my-8">
              Nell'NBA, inoltre, esiste anche la regola dei{" "}
              <strong>3 secondi difensivi</strong>. Per loro neppure un
              difensore può restare nell'area per più di 3 secondi, cosa che
              rende piuttosto difficile mettere in atto una difesa a zona
              efficace.
            </p>
            <p className="font-medium">
              Infine esiste anche una <strong>regola dei 5 secondi</strong>: le
              rimesse laterali infatti vanno eseguite entro 5 secondi, pena la
              perdita del pallone. In Europa, inoltre, un giocatore che in campo
              tiene la palla ferma in mano per 5 secondi in un momento in cui è
              marcato stretto perde automaticamente il pallone.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="nba" className="font-anton text-3xl">
            LE DIFFERENZE TRA FIBA E NBA
          </h4>
          <p className="font-medium my-8">
            Concludiamo sottolineando alcune delle principali differenze tra
            <strong>regolamento NBA e FIBA</strong>. Come abbiamo infatti già
            accennato nel corso di questo articolo, l'NBA - il campionato
            professionistico nordamericano - e la FIBA - la Federazione
            Internazionale che supervisiona le Olimpiadi, i Campionati del Mondo
            e quelli europei - usano regole lievemente diverse.
          </p>
          <p className="font-medium">
            In realtà le differenze si sono negli ultimi anni notevolmente
            <strong>assottigliate</strong>. La FIBA infatti è andata spesso
            incontro alle norme americane, maggiormente votate a garantire lo
            spettacolo. Sappiate però che non tutto quello che vedete fare ai
            grandi campioni d'oltreoceano può essere fatto in Italia.
          </p>
          <p className="font-medium my-8">
            Al di là della differenza nella durata delle partite, che abbiamo
            già spiegato, diversi sono ad esempio anche i{" "}
            <strong>campi da gioco</strong>.
          </p>
          <p className="font-medium">
            Nell'NBA infatti il parquet misura circa 30 metri per 17, mentre in
            Europa ci si accontenta di 28 per 15. Di conseguenza, diversa è
            anche la distanza della linea del tiro da 3 punti dal canestro,
            visto che in America è posta a 7,25 metri (anche se il suo percorso
            è irregolare e negli angoli la distanza è di soli 6,71 metri) mentre
            in Europa è a <strong>6,75 metri</strong>.
          </p>
          <div className="mt-8">
            <h5 className="font-anton text-2xl">I time-out</h5>
            <p className="font-medium mb-8">
              Inoltre diversa è anche la gestione dei{" "}
              <strong className="italic">time-out</strong>, cioè le pause che un
              allenatore può richiedere per parlare coi propri giocatori. In
              America, infatti, il time-out - anche se in questo caso si tratta
              di una pausa breve di soli 20 secondi - può venire chiamato
              direttamente dal giocatore che ha la palla in mano.
            </p>
            <p className="font-medium">
              Questo avviene di solito per <strong>cavarsi d'impiccio</strong>{" "}
              in situazioni in cui si trova chiuso o se sta per esaurire il
              tempo per rimettere la palla in gioco.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">
              Le interpretazioni arbitrali
            </h5>
            <p className="font-medium">
              Infine, diversa è spesso anche l'interpretazione arbitrale davanti
              ai falli e alle infrazioni. Il caso più eclatante è quello dei
              <strong>passi in partenza</strong>, quando cioè un giocatore che
              ha la palla in mano parte da fermo sollevando il piede perno un
              attimo prima di iniziare il palleggio.
            </p>
            <p className="font-medium my-8">
              In Europa in una situazione del genere vengono sempre fischiati i
              passi; in America invece questo comportamento viene più spesso
              <strong>tollerato</strong>. Tutto per non interrompere
              eccessivamente il flusso dell'azione.
            </p>
            <p className="font-medium">
              Inoltre per molti decenni negli Stati Uniti è stata vietata la
              <strong>difesa a zona</strong>, proprio perché ritenuta poco
              spettacolare, difesa che era invece ampiamente usata in Europa.
            </p>
            <p className="font-medium mt-8">
              A partire dal 2002, però, anche nell'NBA si può difendere a zona,
              anche se questa tattica è <strong>poco usata</strong> perché la
              regola dei tre secondi difensivi di cui parlavamo prima tende a
              renderla poco pratica.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketR;
