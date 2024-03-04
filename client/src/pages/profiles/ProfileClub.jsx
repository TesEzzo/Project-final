// import { useDispatch, useSelector } from "react-redux"
// import { logout } from "../../store/reducers/authSlice";
import Test_logo from "../../assets/Test_logo.svg";

const ProfileClub = () => {
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
        <div className="flex flex-row items-center justify-between border-2 rounded-3xl border-none  shadow-xl bg-white transition ease-in-out delay-100 my-16 w-3/4 p-16">
          <div className="max-w-32 max-h-32 rounded-full">
            <img
              src={Test_logo}
              alt="Logo aziendale"
              className="max-w-32 rounded-full"
            />{" "}
            {/* //NOTE - logo azienda */}
          </div>
          <div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="nameC">Nome del club:</label>{" "}
              {/* //NOTE - nome club */}
              <input
                type="text"
                name="nameC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="numberC">Numero di telefono:</label>{" "}
              {/* //NOTE - numero di telefono club*/}
              <input
                type="text"
                name="numberC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="addressC">Via dell'attività:</label>{" "}
              {/* //NOTE - address club*/}
              <input
                type="text"
                name="addressC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="emailC">Email:</label> {/* //NOTE - email */}
              <input
                type="text"
                name="emailC"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="IdCode">Codice fiscale:</label>{" "}
              {/* //NOTE - c fiscale */}
              <input
                type="text"
                name="IdCode"
                className="border-2 border-sec rounded"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="font-semibold" htmlFor="iva">Partita iva:</label>{" "}
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
