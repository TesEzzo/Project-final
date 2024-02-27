import CalendarClub from "../../components/CalendarClub";
import SubscriptionsClub from "../../components/SubscriptionsClub";

const HomeClub = () => {
  return (
    <>
      <header className="flex flex-col items-center my-8">
        <p className="text-2xl font-black tracking-wide ">
          Benvenuto {} Nome Club, ecco i tuoi eventi
        </p> {/*//NOTE - name club */}
        <div className="flex flex-col items-center m-3 gap-2">
          <div>{<CalendarClub />}</div>
          <button className="mt-2 hover:shadow-emerald-800 bg-c_button rounded-full px-5 h-8 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
            MODIFICA GLI APPUNTAMENTI
          </button>
        </div>
      </header>
      <main>
        <section className="mb-8">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ">
                Read more
              </button>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <SubscriptionsClub />
        </section>
      </main>
    </>
  );
};

export default HomeClub;
