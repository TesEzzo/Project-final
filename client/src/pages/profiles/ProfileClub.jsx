import Test_logo from "../../assets/Test_logo.svg";

const ProfileClub = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center justify-between rounded-3xl shadow-xl bg-white transition ease-in-out delay-100 my-16 h-max p-8">
          <div className=" w-full h-52 relative mb-20">
            <img
              src={Test_logo}
              alt=""
              className="absolute h-full w-full rounded-3xl"
            /> {/* //NOTE - cover club */}
            <img
              src={Test_logo}
              alt=""
              className="absolute h-36 w-36 top-2/4 left-2/4 translate-y-1/4 -translate-x-1/2 rounded-full border-8 border-white"
            /> {/* //NOTE - img club */}
          </div>
          <div>
            <div className="flex flex-col my-2">
              <label className="font-semibold" htmlFor="nameC">
                Nome del club:
              </label>{" "}
              {/* //NOTE - nome club */}
              <input
                type="text"
                name="nameC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="numberC">
                Numero di telefono:
              </label>{" "}
              {/* //NOTE - numero di telefono club*/}
              <input
                type="text"
                name="numberC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="addressC">
                Via dell'attività:
              </label>{" "}
              {/* //NOTE - address club*/}
              <input
                type="text"
                name="addressC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="emailC">
                Email:
              </label>{" "}
              {/* //NOTE - email */}
              <input
                type="text"
                name="emailC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="IdCode">
                Codice fiscale:
              </label>{" "}
              {/* //NOTE - c fiscale */}
              <input
                type="text"
                name="IdCode"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="iva">
                Partita iva:
              </label>{" "}
              {/* //NOTE - partita iva */}
              <input
                type="text"
                name="iva"
                className="border-2 border-sec rounded"
              />
            </div>
          </div>
          <div>
            <textarea
              className="border-2 border-sec rounded"
              cols="50"
              rows="14"
              placeholder="Descrizione"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileClub;
