import { useSelector } from "react-redux";
import CalendarClub from "../../components/CalendarClub";
import SubscriptionsClub from "../../components/SubscriptionsClub";

const HomeClub = () => {
  const clubInfo = useSelector((state) => state.auth.club);

  return (
    <>
      <header className="flex flex-col items-center my-8">
        <p className="text-2xl font-black tracking-wide ">
          {
            `Bentornato ${clubInfo.name}, ecco il tuo calendario delle prenotazioni`
          }
        </p> {/*//NOTE - name club */}
        <div className="flex flex-col items-center m-3 gap-2">
          <div>{<CalendarClub />}</div>
          <button className="mt-2 hover:shadow-black bg-c_button rounded-full px-5 h-8 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
            MODIFICA GLI APPUNTAMENTI
          </button>
        </div>
      </header>
      <main>
        <section className="mb-8">
          <SubscriptionsClub />
        </section>
      </main>
    </>
  );
};

export default HomeClub;
