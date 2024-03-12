import Test_logo from "../../assets/Test_logo.svg";

const ProfileUser = () => {


  return (
    <>

      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col rounded-3xl shadow-xl bg-white my-16 h-max w-max p-8">
          <div className="flex flex-col justify-center items-center h-max w-max gap-10">
            <div className=" w-full h-52 relative mb-10">
              <img
                src={Test_logo}
                alt=""
                className="absolute h-full w-full rounded-3xl"
              /> {/* //NOTE - cover utente */}
              <img
                src={Test_logo}
                alt=""
                className="absolute h-36 w-36 top-2/4 left-2/4 translate-y-1/4 -translate-x-1/2 rounded-full border-8 border-white"
              /> {/* //NOTE - img utente */}
            </div>
            <div>
              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="nameU">
                  Nome:
                </label>{" "}
                {/* //NOTE - nome utente */}
                <input
                  type="text"
                  name="nameU"
                  className="border-2 border-sec rounded"
                  value={data.first_name}
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="lastNameU">
                  Cognome:
                </label>{" "}
                {/* //NOTE - nome utente */}
                <input
                  type="text"
                  name="lastNameU"
                  className="border-2 border-sec rounded"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold" htmlFor="numberU">
                  Numero di telefono:
                </label>{" "}
                {/* //NOTE - numero di telefono utente*/}
                <input
                  type="text"
                  name="numberU"
                  className="border-2 border-sec rounded"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold" htmlFor="emailU">
                  Email:
                </label>{" "}
                {/* //NOTE - email */}
                <input
                  type="text"
                  name="emailU"
                  className="border-2 border-sec rounded"
                />
              </div>
            </div>
            <div className="flex flex-row h-full">
              <textarea
                className="border-2 border-sec rounded"
                cols="50"
                rows="14"
                placeholder="Descrizione"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
