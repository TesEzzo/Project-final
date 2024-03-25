import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createNewClub } from "../../utilities/createNewClub";
import Constants from "../../constants";

const RegistrationClub = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [sport, setSport] = useState([]);
  const [inputValues, setInputValues] = useState({
    name: "",
    owner: {
      first_name: "",
      last_name: "",
    },
    info: {
      sports: [],
      opening: {
        hours: "",
        days: ""
      }
    },
    business_info: {
      p_iva: "",
      address: "",
      city: "",
      cap: "",
    },
    email: "",
    password: "",
    inputConfirmPassword: "",
    location: {
      address: "",
      num: "",
      city: "",
      cap: "",
    },
  });

  const handleSelectSport = (event) => {
    const selectedOption = event.target.value;

    if (!inputValues.info.sports.includes(selectedOption)) {
      setInputValues((actualValues) => ({
        ...actualValues,
        info: {
          ...actualValues.info,
          sports: [...actualValues.info.sports, selectedOption]
        },
      }));
    } else {
      const filteredSports = inputValues.info.sports.filter(item => item !== event.target.value);
      setInputValues((actualValues) => ({
        ...actualValues,
        info: {
          ...actualValues.info,
          sports: filteredSports
        },
      }));
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${Constants.API_HOST}/api/sports`);
      const result = await response.json();

        if (response.ok) {
          setSport(result);
        } else {
          throw new Error("Sports not found");
        }
    } catch (error) {
        console.log(error.message);
    }
  };

  const updateObjState = (actualValues, objectName, name, value) => ({
    ...actualValues,
    [objectName]: {
      ...actualValues[objectName],
      [name]: value,
    },
  });

  const handleInputObjChange = (event, objName) => {
    const { name, value } = event.target;

    setInputValues((actualValues) =>
      updateObjState(actualValues, objName, name, value)
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputValues((actualValues) => ({
      ...actualValues,
      [name]: value,
    }));
  };

  const handleHoursChange = (event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      info: {
        ...prevValues.info,
        opening: {
          ...prevValues.info.opening,
          hours: event.target.value
        }
      }
    }));
  };

  const handleDaysChange = (event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      info: {
        ...prevValues.info,
        opening: {
          ...prevValues.info.opening,
          days: event.target.value
        }
      }
    }));
  };

  const handleToSecondStep = () => {
    if (inputValues.name && inputValues.business_info.p_iva) {
      setStep(2);
    } else {
      alert("Inserisci tutti i valori prima di passare al passo successivo.");
    }
  };

  const handleToThirdStep = () => {
    if (inputValues.password !== inputValues.inputConfirmPassword) {
      alert(`Attenzione! Password non confermata correttamente!`);
    } else {
      if (
        inputValues.name &&
        inputValues.business_info.p_iva &&
        inputValues.email &&
        inputValues.password &&
        inputValues.inputConfirmPassword
      ) {
        setStep(3);
      } else {
        alert("Inserisci tutti i valori prima di passare al passo successivo.");
      }
    }
  };

  const handleToFourthStep = () => {
    if (
      inputValues.name &&
      inputValues.business_info.p_iva &&
      inputValues.email &&
      inputValues.password &&
      inputValues.inputConfirmPassword &&
      inputValues.business_info.address &&
      inputValues.business_info.city &&
      inputValues.business_info.cap && 
      inputValues.info.opening.hours && 
      inputValues.info.opening.days
    ) {
      fetchData();
      setStep(4);
    } else {
      alert("Inserisci tutti i valori prima di passare al passo successivo.");
    }
  };

  const handleFinalStep = () => {
    if (
      inputValues.name &&
      inputValues.business_info.p_iva &&
      inputValues.email &&
      inputValues.password &&
      inputValues.inputConfirmPassword &&
      inputValues.business_info.address &&
      inputValues.business_info.city &&
      inputValues.business_info.cap && 
      inputValues.info.opening.hours && 
      inputValues.info.opening.days &&
      inputValues.location.address &&
      inputValues.location.city &&
      inputValues.location.cap &&
      inputValues.location.num &&
      inputValues.info.sports.length > 0
    ) {
      const { inputConfirmPassword, ...formData } = inputValues;

      createNewClub(formData, (error, response) => {
        if (error) {
          alert(`${error.message}`);
          return;
        } else {
          alert(
            "E' stata inviata un e-mail all'indirizzo utilizzato per la registrazione, clicca sul link all'interno per completare la registrazione!"
          );
          navigate("/loginClub");
          // console.log(response);
        }
      });
    } else {
      alert("Inserisci tutti i valori prima di passare al passo successivo.");
    }
  };

  const handlePreviousStep = useCallback(() => {
    setStep((e) => Number(e) - 1);
  }, []);

  return (
    <>
      {step === 1 && (
        <div className="bg-[#7C7C7C] flex items-center min-h-screen bg-gray-50">
          <div className="flex-1 min-h-[500px] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl h-[500px]">
            <div className="flex flex-col md:flex-row h-[100%]">
              <div className="md:h-auto md:w-1/2">
                <img
                  className="object-cover w-full h-full rounded-l-2xl"
                  src="https://static.vecteezy.com/ti/vettori-gratis/p3/5911683-premium-member-icon-account-premium-utente-premium-gratuito-vettoriale.jpg"
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:px-12 sm:py-10 md:w-1/2">
                <div className="w-full h-full">
                  <div className="flex flex-col items-center">
                    <h3 className="mb-4 text-xl font-bold text-blue-600">
                      Registrazione Azienda
                    </h3>
                    <div className="w-[80%] bg-gray-200 rounded-full flex">
                      <div className="flex flex-row justify-start">
                        <div className="w-20 p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full">
                          Step 1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <label className="block mb-2 text-sm">
                      Nome club sportivo<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none 
                                                focus:ring-1 focus:ring-blue-600"
                      placeholder="Nome club sportivo"
                      name="name"
                      value={inputValues.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-4 mb-4">
                      <label className="block mb-2 text-sm">
                        Nome proprietario
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none 
                                                    focus:ring-1 focus:ring-blue-600"
                        name="first_name"
                        value={inputValues.first_name}
                        onChange={(e) => handleInputObjChange(e, "owner")}
                        placeholder="Nome"
                      />
                    </div>
                    <div className="mt-4 mb-4">
                      <label className="block mb-2 text-sm">
                        Cognome proprietario
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none 
                                                    focus:ring-1 focus:ring-blue-600"
                        name="last_name"
                        placeholder="Cognome"
                        value={inputValues.last_name}
                        onChange={(e) => handleInputObjChange(e, "owner")}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm">
                      Partita IVA<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none 
                                                focus:ring-1 focus:ring-blue-600"
                      placeholder="Partita IVA"
                      name="p_iva"
                      value={inputValues.business_info.p_iva}
                      onChange={(e) => handleInputObjChange(e, "business_info")}
                    />
                  </div>
                  <div className="flex justify-end mt-[10px]">
                    <button
                      className="px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors
                                                duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none"
                      href="#"
                      onClick={handleToSecondStep}
                    >
                      Prossimo
                    </button>
                  </div>
                  <div className="mt-4 text-center flex flex-row gap-2 w-[100%] justify-end">
                    <Link to="/loginClub" className="text-sm">
                      Hai già un account?
                    </Link>
                    <Link
                      to="/loginClub"
                      className="text-sm text-blue-600 hover:underline hover:text-blue-900"
                    >
                      Accedi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="bg-[#7C7C7C] flex items-center min-h-screen bg-gray-50">
          <div className="flex-1 h-[500px] min-h-[500px] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row h-[100%]">
              <div className="md:h-auto md:w-1/2">
                <img
                  className="object-cover w-full h-full rounded-l-2xl"
                  src="https://static.vecteezy.com/ti/vettori-gratis/p3/5911683-premium-member-icon-account-premium-utente-premium-gratuito-vettoriale.jpg"
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:px-12 sm:py-10 md:w-1/2">
                <div className="w-full h-full">
                  <div className="flex flex-col items-center">
                    <h3 className="mb-4 text-xl font-bold text-blue-600">
                      Registrazione Azienda
                    </h3>
                    <div className="bg-gray-200 rounded-full flex w-[80%]">
                      <div>
                        <div className="w-20 ml-[70px] p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full enterDivAnimation">
                          Step 2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 mt-4">
                    <label className="block mb-2 text-sm">
                      E-mail<span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                focus:ring-1 focus:ring-blue-600"
                      placeholder="emailpersonale@esempio.com"
                      type="email"
                      name="email"
                      value={inputValues.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm">
                      Password<span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                focus:ring-1 focus:ring-blue-600"
                      placeholder="••••••••"
                      type="password"
                      name="password"
                      value={inputValues.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm">
                      Conferma password<span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                focus:ring-1 focus:ring-blue-600"
                      placeholder="••••••••"
                      type="password"
                      name="inputConfirmPassword"
                      value={inputValues.inputConfirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div
                      onClick={handlePreviousStep}
                      className="cursor-pointer mt-[22px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2563eb"
                        className="w-6 h-6 hover:stroke-[#6191FB]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <button
                      onClick={handleToThirdStep}
                      className="px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors
                                                duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none"
                      href="#"
                    >
                      Prossimo
                    </button>
                  </div>
                  <div className="mt-4 text-center flex flex-row gap-2 w-[100%] justify-end">
                    <Link to="loginClub" className="text-sm">
                      Hai già un account?
                    </Link>
                    <Link
                      to="/loginClub"
                      className="text-sm text-blue-600 hover:underline hover:text-blue-900"
                    >
                      Accedi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="bg-[#7C7C7C] flex items-center min-h-screen bg-gray-50">
          <div className="flex-1 h-[500px] min-h-[500px] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row h-[100%]">
              <div className="md:h-auto md:w-1/2">
                <img
                  className="object-cover w-full h-full rounded-l-2xl"
                  src="https://static.vecteezy.com/ti/vettori-gratis/p3/5911683-premium-member-icon-account-premium-utente-premium-gratuito-vettoriale.jpg"
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:px-12 sm:py-10 md:w-1/2">
                <div className="w-full h-full">
                  <div className="flex flex-col items-center">
                    <h3 className="mb-4 text-xl font-bold text-blue-600">
                      Registrazione Azienda
                    </h3>
                    <div className="bg-gray-200 rounded-full flex justify-end w-[80%]">
                      <div>
                        <div className="w-20 mr-[70px] p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full enterDivAnimation">
                          Step 3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="mb-4 mt-4 w-full">
                      <label className="block mb-2 text-sm">
                        Indirizzo sede legale
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                    focus:ring-1 focus:ring-blue-600"
                        placeholder="Indirizzo sede legale"
                        type="text"
                        name="address"
                        onChange={(e) =>
                          handleInputObjChange(e, "business_info")
                        }
                        value={inputValues.business_info.address}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">
                        Città<span className="text-red-600">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                  focus:ring-1 focus:ring-blue-600"
                        placeholder="Città"
                        type="text"
                        name="city"
                        onChange={(e) => handleInputObjChange(e, "business_info")}
                        value={inputValues.business_info.city}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">
                        CAP<span className="text-red-600">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                  focus:ring-1 focus:ring-blue-600"
                        placeholder="Codice di avviamento postale"
                        type="text"
                        name="cap"
                        onChange={(e) => handleInputObjChange(e, "business_info")}
                        value={inputValues.business_info.cap}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mb-4">
                      <p className="block mb-2 text-[12px]">
                        Orario apertura e chiusura<span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                  focus:ring-1 focus:ring-blue-600"
                        placeholder="8:00 - 23:00"
                        type="text"
                        name="hours"
                        onChange={(e) => handleHoursChange(e)}
                        value={inputValues.info.opening.hours}
                      />
                    </div>
                    <div className="mb-4">
                      <p className="block mb-2 text-sm">
                        Giorni della settimana<span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                  focus:ring-1 focus:ring-blue-600"
                        placeholder="7/7"
                        type="text"
                        name="days"
                        onChange={(e) => handleDaysChange(e)}
                        value={inputValues.info.opening.days}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div
                      onClick={handlePreviousStep}
                      className="cursor-pointer mt-[22px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2563eb"
                        className="w-6 h-6 hover:stroke-[#6191FB]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <button
                      onClick={handleToFourthStep}
                      className="px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors
                                                duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none"
                      href="#"
                    >
                      Prossimo
                    </button>
                  </div>
                  <div className="mt-4 text-center flex flex-row gap-2 w-[100%] justify-end">
                    <Link to="/loginClub" className="text-sm">
                      Hai già un account?
                    </Link>
                    <Link
                      to="/loginClub"
                      className="text-sm text-blue-600 hover:underline hover:text-blue-900"
                    >
                      Accedi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="bg-[#7C7C7C] flex items-center min-h-screen bg-gray-50">
          <div className="flex-1 h-[500px] min-h-[500px] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row h-[100%]">
              <div className="md:h-auto md:w-1/2">
                <img
                  className="object-cover w-full h-full rounded-l-2xl"
                  src="https://static.vecteezy.com/ti/vettori-gratis/p3/5911683-premium-member-icon-account-premium-utente-premium-gratuito-vettoriale.jpg"
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:px-12 sm:py-10 md:w-1/2">
                <div className="w-full h-full">
                  <div className="flex flex-col items-center">
                    <h3 className="mb-4 text-xl font-bold text-blue-600">
                      Registrazione Azienda
                    </h3>
                    <div className="bg-gray-200 rounded-full flex justify-end w-[80%]">
                      <div>
                        <div className="w-20 p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full enterDivAnimation">
                          Step 4
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="mb-4 mt-4">
                      <label className="block mb-2 text-sm">
                        Indirizzo club sportivo
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                    focus:ring-1 focus:ring-blue-600"
                        placeholder="Indirizzo club sportivo"
                        type="text"
                        name="address"
                        value={inputValues.location.address}
                        onChange={(e) => handleInputObjChange(e, "location")}
                      />
                    </div>
                    <div className="mb-4 mt-4 w-[33%]">
                      <label className="block mb-2 text-sm">
                        n° della via<span className="text-red-600">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                    focus:ring-1 focus:ring-blue-600"
                        placeholder="n° della via"
                        type="text"
                        name="num"
                        value={inputValues.location.num}
                        onChange={(e) => handleInputObjChange(e, "location")}
                      />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="mb-4">
                      <label className="block mb-2 text-sm">
                        Città<span className="text-red-600">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                    focus:ring-1 focus:ring-blue-600"
                        placeholder="Città"
                        type="text"
                        name="city"
                        value={inputValues.location.city}
                        onChange={(e) => handleInputObjChange(e, "location")}
                      />
                    </div>
                    <div className="mb-4 w-[33%]">
                      <label className="block mb-2 text-sm">
                        CAP<span className="text-red-600">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                    focus:ring-1 focus:ring-blue-600"
                        placeholder="CAP"
                        type="text"
                        name="cap"
                        value={inputValues.location.cap}
                        onChange={(e) => handleInputObjChange(e, "location")}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm">
                      Seleziona gli Sport del Club
                      <span className="text-red-600">*</span>
                    </label>
                    {
                      sport.length > 0 && sport.map(item => (
                        <button key={item._id} value={item._id} 
                        className={`${inputValues.info.sports.includes(item._id) ? 
                          "text-black border border-green-700 bg-[#89EDAF] hover:bg-[#89EDAF]/80 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2" 
                          : 
                          "text-gray-900 border border-gray-800 hover:bg-[#EBEBEB] focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"}`}
                        onClick={handleSelectSport}
                        >
                          {item.name}
                        </button>
                      ))
                    }
                  </div>
                  <div className="flex justify-between">
                    <div
                      onClick={handlePreviousStep}
                      className="cursor-pointer mt-[22px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2563eb"
                        className="w-6 h-6 hover:stroke-[#6191FB]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <button
                      onClick={handleFinalStep}
                      className="px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors
                                  duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none">
                      Registrati
                    </button>
                  </div>
                  <div className="mt-4 text-center flex flex-row gap-2 w-[100%] justify-end">
                    <Link to="/loginClub" className="text-sm">
                      Hai già un account?
                    </Link>
                    <Link
                      to="/loginClub"
                      className="text-sm text-blue-600 hover:underline hover:text-blue-900"
                    >
                      Accedi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationClub;
