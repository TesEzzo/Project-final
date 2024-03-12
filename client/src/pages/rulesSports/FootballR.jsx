import football from "../../assets/rulesSport/football.jpg";
import rArrow from "../../assets/rulesSport/right-arrow.png";
import lArrow from "../../assets/rulesSport/left-arrow.png";
const FootballR = () => {
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
            <h2 className="font-anton text-8xl">Regole del Calcio</h2>
            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[5.2rem] max-2xl:group-hover:translate-x-[2.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("generali")}
              >
                REGOLE GENERALI DEL CAMPE E DELLE MISURE
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[5.2rem] max-2xl:group-hover:-translate-x-[2.7rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[3.2rem] max-2xl:group-hover:translate-x-[2.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("ufficiali")}
              >
                RUOLI E RESPONSABILITA' DEGLI UFFICIALI DI GARA
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[3.2rem] max-2xl:group-hover:-translate-x-[2.7rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[5.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("durata")}
              >
                INIZIO E DURATA DELLA PARTITA
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[5.2rem] max-2xl:group-hover:-translate-x-[3.7rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[5.2rem] max-2xl:group-hover:translate-x-[3.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("arbitro")}
              >
                GIOCO E DECISIONI DELL'ARBITRO
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[5.2rem] max-2xl:group-hover:-translate-x-[3.7rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full group">
              <img
                src={rArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:translate-x-[5.2rem] max-2xl:group-hover:translate-x-[2.7rem] max-[1300px]:group-hover:translate-x-[1.4rem] max-lg:group-hover:translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
              <h3
                className="font-anton text-4xl cursor-pointer mx-8 max-lg:text-2xl max-md:text-xl"
                onClick={() => scrollToSection("rimessa")}
              >
                PROCEDURE DI RIMESSA E CALCI SPECIALI
              </h3>
              <img
                src={lArrow}
                alt=""
                className="w-8 h-8 opacity-0 transform transition-transform group-hover:-translate-x-[5.2rem] max-2xl:group-hover:-translate-x-[2.7rem] max-[1300px]:group-hover:-translate-x-[1.4rem] max-lg:group-hover:-translate-x-[2.1rem] group-hover:opacity-100 duration-500"
              />
            </div>
          </div>
          <img src={football} alt="" className="w-2/4 h-screen" />
        </div>
        <div className="flex flex-col items-center text-justify w-2/4 mt-16">
          <h4 id="generali" className="font-anton text-3xl">
            REGOLE GENERALI DEL CAMPE E DELLE MISURE
          </h4>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Il campo da calcio:</h5>
            <p className="font-medium">
              Il terreno di giuoco deve essere un rettangolo della lunghezza
              massima di m.120 e minima di m.90; della larghezza massima di m.
              90 e minima di m. 45. Per le gare internazionali le misure devono
              essere: lunghezza massima m.110, minima m.100; larghezza massima
              m.75, minima m.64. In ogni caso la lunghezza deve essere maggiore
              della larghezza.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Il pallone:</h5>
            <p className="font-medium">
              Deve essere sferico. L'involucro esterno deve essere di cuoio o di
              altro materiale approvato. Per la sua confezione non potrà essere
              utilizzato alcun materiale che possa costituire pericolo per i
              calciatori. Il pallone deve avere una circonferenza massima di cm.
              70 e minima di cm. 68. All'inizio della gara esso deve avere il
              peso massimo di gr.450 e minimo di 410. La pressione deve essere
              pari a 0,6-1,1 atmosfere, ossia da 600 a 1.100 gr. per centimetro
              quadrato al livello del mare. Il pallone non potrà essere cambiato
              durante la gara, senza l'autorizzazione dell'arbitro.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Numero dei giocatori:</h5>
            <p className="font-medium">
              La gara sarà giocata da due squadre, formate ciascuna da un
              massimo di 11 calciatori, uno dei quali giocherà da portiere. Si
              possono sostituire un certo numero di giocatori secondo le regole
              della manifestazione a cui si prende parte. Il Regolamento della
              competizione deve precisare il numero dei calciatori di riserva
              designabili, che può variare da 3 a 7 massimo.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">
              Equipaggiamento dei giocatori:
            </h5>
            <p className="font-medium">
              L'equipaggiamento di base obbligatorio di un calciatore comprende:
              maglia o camiciola, calzoncini, calzettoni, parastinchi e
              calzature. Un calciatore non deve portare alcun oggetto pericoloso
              per gli altri calciatori. I parastinchi obbligatori per tutti, che
              devono essere completamente coperti dai calzettoni, devono essere
              di un materiale adeguato (gomma, plastica, poliuretano o sostanze
              analoghe) e devono garantire un sufficiente livello di protezione.
              Il portiere deve indossare la maglia di un colore che lo distingua
              dagli altri calciatori e dall'arbitro.
            </p>
          </div>

          <h4 id="ufficiali" className="font-anton text-3xl">
            RUOLI E RESPONSABILITA' DEGLI UFFICIALI DI GARA
          </h4>
          <div className="my-8">
            <h5 className="font-anton text-2xl">L'arbitro:</h5>
            <p className="font-medium">
              Per la direzione di ogni gara deve essere designato un arbitro. La
              sua autorità e l'esercizio dei poteri che gli sono conferiti dalle
              Regole del Giuoco iniziano nel momento in cui egli arriva al campo
              di giuoco. Il suo potere di infliggere punizioni si estende alle
              infrazioni commesse durante le interruzioni del giuoco e anche
              quando il pallone non è in giuoco. Le sue decisioni per questioni
              di fatto relative al giuoco includono la decisione secondo cui una
              rete è segnata oppure no ed il risultato della gara e sono
              inappellabili.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Gli assistenti di linea:</h5>
            <p className="font-medium">
              Sono due, collaborano con l'arbitro e in particolare segnalano le
              irregolarità, la decisione definitiva è, comunque, sempre quella
              dell'arbitro.
            </p>
          </div>

          <h4 id="durata" className="font-anton text-3xl">
            INIZIO E DURATA DELLA PARTITA
          </h4>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Durata della partita:</h5>
            <p className="font-medium">
              La gara deve essere suddivisa in due periodi eguali di 45 minuti
              ciascuno, salvo il caso di preventivo accordo diverso, restando
              stabilito quanto segue:
            </p>
            <ol className="list-decimal font-medium">
              <li className="my-8">
                l'arbitro deve prolungare ciascun periodo di tutto il tempo che
                egli giudicherà sia stato perduto per sostituzione, trasporto di
                calciatori infortunati fuori dal terreno di giuoco,
                comportamento ostruzionistico o per altre cause;{" "}
              </li>
              <li className="mb-8">
                la durata di ciascun periodo deve essere prolungata per
                consentire che sia battuto un calcio di rigore.{" "}
              </li>
            </ol>
            <p className="font-medium">
              L'intervallo, a metà gara, non deve superare 15 minuti. Il
              regolamento di ogni competizione deve indicare chiaramente la
              durata dell'intervallo fra i due tempi. La durata fra i due tempi
              non può essere modificata senza il consenso dell'arbitro. Il tempo
              varia nelle gare del settore giovanile.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Calcio d'inizio:</h5>
            <p className="font-medium">
              Il lancio in aria di una moneta decide la scelta del campo in cui
              giocare e stabilisce chi batte il calcio d'inizio. Tutti i
              giocatori devono essere nella propria metà campo, i giocatori
              della squadra avversaria devono stare 9,15 Mt. dal pallone. Chi
              tocca per primo il pallone non può colpirlo una seconda volta
              prima che non sia calciato da un altro giocatore. Nel secondo
              tempo le squadre si scambieranno il campo e giocherà il pallone la
              squadra che non l'aveva battuto ad inizio gara.
            </p>
          </div>

          <h4 id="arbitro" className="font-anton text-3xl">
            GIOCO E DECISIONI DELL'ARBITRO
          </h4>
          <div className="my-8">
            <h5 className="font-anton text-2xl">
              Pallone in gioco e non in gioco:
            </h5>
            <p className="font-medium">
              E' in gioco se colpisce i pali della porta, l'asta della
              bandierina del corner; se colpisce l'arbitro o i guardalinee
              nell'interno del campo; fino a quando l'arbitro non decide di
              interrompere il gioco. Non è in gioco quando supera interamente a
              linea che delimita il campo; quando la gara è stata interrotta
              dall'arbitro.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Segnatura delle reti:</h5>
            <p className="font-medium">
              Salvo le eccezioni previste dalle Regole del Giuoco, una rete
              risulta segnata quando il pallone ha interamente oltrepassato la
              linea di porta, tra i pali e sotto la sbarra trasversale,
              sempreché non sia stato lanciato, portato o colpito
              intenzionalmente con la mano o con il braccio da un calciatore
              della squadra attaccante, fatta eccezione per il portiere che si
              trovi all'interno della propria area di rigore. La squadra che
              avrà segnato il maggior numero di reti vincerà la gara. Se non
              sarà stata segnata alcuna rete o se le squadre hanno segnato
              eguale numero di reti, la gara risulterà conclusa in parità.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Fuori gioco:</h5>
            <p className="font-medium">
              Un giocatore è in fuori gioco se si trova senza pallone, vicino la
              linea della porta avversaria, a meno che: egli si trovi nella
              propria metà campo; vi siano due giocatori avversari tra la porta
              e lui; il pallone sia stato toccato per ultimo da un avversario;
              riceva il pallone direttamente da un calcio d'angolo o qualora sia
              stato rimesso dall'arbitro.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Falli e scorrettezze:</h5>
            <p className="font-medium">
              Un giocatore che commette uno qualsiasi dei falli qui sotto
              descritti procurerà un calcio di punizione contro la propria
              squadra , nel caso si trovi nell'area di rigore, avverrà
              addirittura un calcio di rigore: se dà un calcio all'avversario o
              tenta di farlo; se fa lo sgambetto o getta a terra un avversario;
              se carica un avversario; se carica un avversario dalle spalle (a
              meno che questi faccia ostruzione); se colpisce o tenta di colpire
              un avversario; se trattiene un avversario con le mani o con le
              braccia; se spinge un avversario con le mani e con le braccia; se
              tocca il pallone con le mani; se entra in gioco pericoloso.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Calci di punizione:</h5>
            <p className="font-medium">
              Può essere diretto o indiretto sarà deciso dall'arbitro: il calcio
              di punizione diretto; chi batte può indirizzare la palla
              direttamente in porta. Il calcio di punizione indiretto chi batte
              la punizione deve necessariamente passare la palla ad un
              compagno.Se si tira direttamente in porta e segna senza che
              nessuno tocchi il pallone la rete non viene convalidata. In
              entrambi i casi gli avversari devono essere ad una distanza di
              9,15 Mt. nel momento in cui la punizione viene battuta. Se chi sta
              per calciare la punizione non chiede la distanza può calciare,
              senza il fischio dell'arbitro.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Calcio di rigore:</h5>
            <p className="font-medium">
              Il calcio di rigore deve essere battuto dal punto del calcio di
              rigore. Prima di essere battuto, tutti i calciatori - tranne colui
              designato al tiro (debitamente identificato) e il portiere
              avversario - devono rimanere all'interno del terreno di giuoco ma
              fuori dell'area di rigore, ad almeno m.9,15 (10 yards) dal punto
              del calcio di rigore e più indietro del punto stesso. Il portiere
              avversario deve trovarsi sulla propria linea di porta, fra i pali
              della stessa di fronte a chi batte, fino a quando non viene
              calciato il pallone. Colui che batte il calcio di rigore deve
              calciare il pallone in avanti e non potrà giocarlo una seconda
              volta fino a quando lo stesso non sarà stato giocato o toccato da
              un altro calciatore. Il pallone sarà considerato in giuoco non
              appena avrà percorso una distanza pari alla sua circonferenza. Una
              rete può essere segnata direttamente su calcio di rigore. Se il
              calcio di rigore viene concesso allo scadere di uno dei tempi
              regolamentari o supplementari e la gara viene prolungata per la
              sola esecuzione di detto calcio di rigore, la rete sarà
              considerata valida anche se il pallone tocca uno o entrambi i pali
              di porta, oppure la sbarra trasversale o il portiere o una
              combinazione di uno o più suddetti elementi, purché non sia stata
              commessa alcuna infrazione.
            </p>
          </div>

          <h4 id="rimessa" className="font-anton text-3xl">
            PROCEDURE DI RIMESSA E CALCI SPECIALI
          </h4>
          <div className="my-8">
            <h5 className="font-anton text-2xl">
              Rimessa dalla linea laterale:
            </h5>
            <p className="font-medium">
              Quando il pallone oltrepassa interamente, sia a terra sia in aria,
              una linea laterale, deve essere rimesso in giuoco da un calciatore
              della squadra opposta a quella cui appartiene il calciatore che lo
              ha toccato per ultimo, lanciandolo in qualsiasi direzione dal
              punto in cui ha oltrepassato la linea. Il calciatore che effettua
              la rimessa, nel momento di lanciare il pallone, deve far fronte al
              terreno di giuoco ed avere una parte qualsiasi di ciascun piede
              sulla linea laterale o all'esterno di detta linea. Il calciatore
              che effettua la rimessa deve usare ambedue le mani e deve lanciate
              il pallone dal di dietro ed al di sopra della testa. Il pallone è
              in giuoco immediatamente dopo essere entrato nel terreno di giuoco
              ma il calciatore che lo ha lanciato non può giocarlo di nuovo fino
              a quando non sia stato giocato o toccato da un altro calciatore.
              Una rete non può essere segnata direttamente su rimessa dalla
              linea laterale.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Calcio di rinvio:</h5>
            <p className="font-medium">
              Quando il pallone, toccato per ultimo da un calciatore della
              squadra attaccante, oltrepassa interamente la linea di porta, sia
              a terra sia in aria, al di fuori del tratto compreso tra i pali,
              dovrà essere collocato in un qualsiasi punto dell'area di porta e
              verrà calciato direttamente in giuoco al di fuori dell'area di
              rigore da un calciatore della squadra difendente, il quale non
              potrà rigiocarlo prima che il pallone sia stato giocato o toccato
              da un altro calciatore. Il portiere non potrà ricevere tra le mani
              il pallone su calcio di rinvio, al fine di rilanciarlo in giuoco.
              Se il pallone non è stato calciato all'esterno dell'area di
              rigore, ossia direttamente in giuoco, il calcio di rinvio deve
              essere ripetuto. Una rete può essere segnata direttamente su
              calcio di rinvio. I calciatori della squadra avversaria di quella
              cui appartiene il calciatore che batte il calcio di rinvio, devono
              restare fuori dell'area di rigore fino a quando il pallone non sia
              stato calciato al di fuori della stessa.
            </p>
          </div>
          <div className="my-8">
            <h5 className="font-anton text-2xl">Il calcio d'angolo:</h5>
            <p className="font-medium">
              Quando il pallone toccato per ultimo da un calciatore della
              squadra difendente, oltrepassa interamente la linea di porta, sia
              in terra sia in aria, al di fuori del tratto compreso tra i pali,
              un calciatore della squadra attaccante batterà il calcio d'angolo.
              Il pallone dovrà essere collocato interamente all'interno del
              quarto di cerchio che costituisce l'area d'angolo più prossima al
              punto in cui esso è uscito dal terreno di giuoco e verrà calciato
              da tale posizione. La bandierina d'angolo non potrà essere
              spostata. Una rete può essere segnata direttamente su calcio
              d'angolo. I calciatori della squadra opposta a quella cui
              appartiene il calciatore che batte il calcio d'angolo non possono
              avvicinarsi a meno di m.9,15 dal pallone fino a quando questo non
              sia in giuoco, cioè fino a quando viene calciato e si muove. Il
              calciatore che ha battuto il calcio d'angolo non può rigiocare il
              pallone fino a quando lo stesso non è stato giocato o toccato da
              un altro calciatore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootballR;
