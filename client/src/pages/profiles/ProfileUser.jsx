import { useState } from "react";
import { useSelector } from "react-redux";
import cover_stock from "../../assets/stock_cover.jpg";
import user_stock from "../../assets/stock_user.jpg";
import avatar from "../../assets/standard_male_avatar.png";
import cover from "../../assets/cover_profile.jpg";


const ProfileUser = () => {
  const userData = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState(userData);

  console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col rounded-3xl shadow-xl bg-white my-16 h-max w-max p-8">
          <div className="flex flex-col justify-center items-center h-max w-max gap-10">
            <div className=" w-full h-52 relative mb-10">
              <img
                src={formData._id === "65fc13dd4fce4c76aa558cbe" ? cover : cover_stock}
                alt=""
                className="absolute h-full w-full rounded-3xl"
              />{" "}
              {/* //NOTE - cover utente */}
              <img
                src={formData._id === "65fc13dd4fce4c76aa558cbe" ? avatar : user_stock}
                alt=""
                className="absolute h-36 w-36 top-2/4 left-2/4 translate-y-1/4 -translate-x-1/2 rounded-full border-8 border-white"
              />{" "}
              {/* //NOTE - img utente */}
            </div>
            <div>
              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="first_name">
                  Nome:
                </label>{" "}
                {/* //NOTE - nome utente */}
                <input
                  type="text"
                  name="first_name"
                  className="border-2 border-sec rounded"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="font-semibold" htmlFor="last_name">
                  Cognome:
                </label>{" "}
                {/* //NOTE - nome utente */}
                <input
                  type="text"
                  name="last_name"
                  className="border-2 border-sec rounded"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold" htmlFor="number">
                  Numero di telefono:
                </label>{" "}
                {/* //NOTE - numero di telefono utente*/}
                <input
                  type="text"
                  name="email"
                  className="border-2 border-sec rounded"
                  value="3351234567"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold" htmlFor="email">
                  Email:
                </label>{" "}
                {/* //NOTE - email */}
                <input
                  type="text"
                  name="email"
                  className="border-2 border-sec rounded"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row h-full">
              <textarea
                className="border-2 border-sec rounded"
                cols="50"
                rows="14"
                value="Mi chiamo Mario, sono un developer, in Games Plan Italia mi occupo della gestione della mappa e di tutto quello che la riguarda."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
