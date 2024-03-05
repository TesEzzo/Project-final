// import { useDispatch, useSelector } from "react-redux"
// import { logout } from "../../store/reducers/authSlice";
import Test_logo from "../../assets/Test_logo.svg";

const ProfileUser = () => {
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  // const handleLogout = () => {
  //     dispatch(logout());
  // }

  return (
    <>
      {/* <pre>
                {JSON.stringify(auth, null, 2)}
            </pre>
            <button onClick={handleLogout}>LOGOUT</button> */}
      <div className="flex flex-row justify-center">
        <div className="flex flex-col rounded-3xl shadow-xl bg-white my-16 h-max w-3/4 p-16">
          <div className="flex flex-row items-center h-full w-full gap-10">
            <div className="max-w-32 max-h-32 rounded-full">
              <img
                src={Test_logo}
                alt="Logo aziendale"
                className="max-w-32 rounded-full"
              />{" "}
              {/* //NOTE - foto profilo */}
            </div>
            <div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold" htmlFor="nameU">
                  Nome:
                </label>{" "}
                {/* //NOTE - nome utente */}
                <input
                  type="text"
                  name="nameU"
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
          </div>
          <div className="flex flex-row h-full">
            <textarea
              className="border-2 border-sec rounded"
              cols="50"
              rows="14"
              placeholder="Descrizione"
            ></textarea>
            <div className="h-[500px] border-2 border-sec rounded mx-10">Lista amici</div>
            <div className="h-[500px] border-2 border-sec rounded mx-10">Richieste di amicizia ricevute/inviate</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
