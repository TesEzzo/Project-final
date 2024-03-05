import Test_Logo from "../assets/Test_Logo.svg";

export const AdsCard = () => {
  return (
    <>
      <div className="flex flex-col items-center m-8">
        <h2 className="text-3xl font-anton my-6"> Eventi Principali</h2>
        <div className="flex flex-row gap-8">
          {/* //NOTE - card1}*/}
          <div className="flex flex-col border-2 rounded-3xl border-none w-1/3 h-max shadow-xl bg-white transition ease-in-out delay-100  items-center justify-between p-8">
            <div className="group/item flex flex-col ">
              <img
                src={Test_Logo}
                alt="A vertebra di molfetta"
                className="w-[150px] h-[150px] self-center rounded-full group-hover/item:scale-[1.3] duration-300"
              />
              <h3 className="text-2xl font-semibold text-center my-4 self-center">
                {" "}
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-2xl text-justify self-center text-ellipsis overflow-hidden w-full h-32 hover:overflow-y-auto  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quisquam illo magni quidem excepturi quas architecto alias consequatur, veritatis, deserunt error incidunt quis similique repellat iste, inventore labore nam. Quod?
              </p>
            </div>
            <button className="flex flex-row justify-center items-center my-2 hover:shadow-black bg-c_button rounded-full  h-14 w-max px-8 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
              <a
                className="text-xl"
                href=""
              >
                Scopri di più
              </a>
            </button>
          </div>
          {/* //NOTE - card2}*/}
          <div className="flex flex-col border-2 rounded-3xl border-none w-1/3 h-max shadow-xl bg-white transition ease-in-out delay-100  items-center justify-between p-8">
            <div className="group/item flex flex-col ">
              <img
                src={Test_Logo}
                alt="A vertebra di molfetta"
                className="w-[150px] h-[150px] self-center rounded-full group-hover/item:scale-[1.3] duration-300"
              />
              <h3 className="text-2xl font-semibold text-center my-4 self-center">
                {" "}
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-2xl text-justify self-center text-ellipsis overflow-hidden w-full h-32 hover:overflow-y-auto  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, facilis consectetur? Reiciendis voluptate impedit commodi voluptatibus expedita voluptas delectus doloribus.
              </p>
            </div>
            <button className="flex flex-row justify-center items-center my-2 hover:shadow-black bg-c_button rounded-full  h-14 w-max px-8 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
              <a
                className="text-xl"
                href=""
              >
                Scopri di più
              </a>
            </button>
          </div>
          {/* //NOTE - card3}*/}
          <div className="flex flex-col border-2 rounded-3xl border-none w-1/3 h-max shadow-xl bg-white transition ease-in-out delay-100  items-center justify-between p-8">
            <div className="group/item flex flex-col ">
              <img
                src={Test_Logo}
                alt="A vertebra di molfetta"
                className="w-[150px] h-[150px] self-center rounded-full group-hover/item:scale-[1.3] duration-300"
              />
              <h3 className="text-2xl font-semibold text-center my-4 self-center">
                {" "}
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-2xl text-justify self-center text-ellipsis overflow-hidden w-full h-32 hover:overflow-y-auto  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, facilis consectetur? Reiciendis voluptate impedit commodi voluptatibus expedita voluptas delectus doloribus.
              </p>
            </div>
            <button className="flex flex-row justify-center items-center my-2 hover:shadow-black bg-c_button rounded-full  h-14 w-max px-8 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
              <a
                className="text-xl"
                href=""
              >
                Scopri di più
              </a>
            </button>
          </div>
        </div>
        <button className="flex flex-row justify-center items-center my-8 hover:shadow-black bg-c_button rounded-full h-14 w-max px-8 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">Mostra altri eventi</button>
      </div>
    </>
  );
};

export default AdsCard;
