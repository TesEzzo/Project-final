import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/authSlice";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginClub = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleInput = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const results = await axios({
        url: "http://localhost:3000/users/loginClub",
        method: "POST",
        data: form
      });

      const data = results.data; // -> { user: { ... }, token: ... }
      dispatch(login(data));
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {/* <section className="bg-cover bg-center h-screen flex items-center justify-center" 
        style={{backgroundImage: "url('https://wallpaperbat.com/img/110673-tennis-court-wallpaper-top-free-tennis-court-background.jpg')"}}> */}
        {/* sostituire il link dell'img della section con il percorso nell'assets */}
        {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-full">
          <div className="w-full md:mt-0 sm:max-w-md xl:p-0 h-full">
            <div className="p-[38px] space-y-4 md:space-y-6 bg-white bg-opacity-60 rounded-lg shadow h-full">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#313131] md:text-2xl">
                Accedi al tuo account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input onInput={handleInput} value={form.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 
                    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="nome@esempio.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input onInput={handleInput} value={form.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 
                    text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
                        focus:ring-3 focus:ring-primary-300" required="" />
                    </div>
                    <div className="ml-2 text-sm">
                      <label htmlFor="remember" className="text-black">
                        Ricordati di me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                    font-medium rounded-lg text-sm px-10 py-2.5 mb-2 focus:outline-none w-fit">
                      Login
                  </button>
                  <Link to="/login" className="text-sm font-medium text-slate-900 mx-2 hover:underline hover:text-blue-900">
                    Ritorna al login utente
                  </Link>
                </div>
                <p className="text-sm font-light text-black font-normal">
                  Non hai ancora un account? 
                  <Link to="/registrationclub" className="font-medium text-slate-900 mx-2 hover:underline hover:text-blue-900">
                    Registrati
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      <div className="bg-cover bg-center h-full flex items-center justify-start w-3/4 m-auto rounded-md mt-10" 
        style={{backgroundImage: "url('https://wallpaperbat.com/img/110673-tennis-court-wallpaper-top-free-tennis-court-background.jpg')"}}>
        {/* sostituire il link dell'img della section con il percorso nell'assets */}
        <div className="flex flex-col items-center justify-center md:h-full h-full w-[50%]">
          <div className="w-full md:mt-0 xl:p-0 h-full">
            <div className="p-[38px] space-y-4 md:space-y-6 bg-white bg-opacity-40 shadow h-full w-full flex flex-col justify-between">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#313131] md:text-2xl text-center pt-[30px]">
                Accedi al tuo account
              </h1>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 flex flex-col items-center">
                  <div className="w-[50%]">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input onInput={handleInput} value={form.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 
                      sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                      placeholder="nome@esempio.com" required="" />
                  </div>
                  <div className="w-[50%]">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <input onInput={handleInput} value={form.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 
                      text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
                          focus:ring-3 focus:ring-primary-300" required="" />
                      </div>
                      <div className="ml-2 text-sm">
                        <label htmlFor="remember" className="text-black">
                          Ricordati di me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-center">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                      font-medium rounded-lg text-sm px-10 py-2.5 mb-2 focus:outline-none w-fit">
                        <Link to="/loginClub">Accedi</Link>
                    </button>
                    <Link to="/login" className="text-sm font-medium text-slate-900 mx-2 hover:underline hover:text-blue-900">
                      Accedi come utente
                    </Link>
                  </div>
                </form>
                <p className="text-sm font-light text-black font-medium text-center">
                  Non hai ancora un account? 
                  <Link to="/registrationClub" className="font-medium text-slate-900 mx-2 hover:underline hover:text-blue-900">
                    Registrati
                  </Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginClub;