import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../../utilities/createNewUser";

const RegistrationUser = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [inputValues, setInputValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        inputConfirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setInputValues((actualValues) => ({
          ...actualValues,
          [name]: value,
        }));
    };

    const handleNextStep = () => {
        if (inputValues.first_name && inputValues.last_name) {
          setStep(2);
        } else {
          alert('Inserisci tutti i valori prima di passare al passo successivo.');
        }
    };

    const handleFinalStep = () => {
        if (inputValues.password !== inputValues.inputConfirmPassword) {
            alert(`Attenzione! Password non confermata correttamente!`);
            return;
        } else {
            if (inputValues.first_name && inputValues.last_name && inputValues.email && inputValues.password && inputValues.inputConfirmPassword) {
                
                const { inputConfirmPassword, ...formData } = inputValues;

                createNewUser(formData, (error, response) => {
                    if (error) {
                        alert(`${error.message}`);
                        return;
                    } else {
                        alert("E' stata inviata un e-mail all'indirizzo utilizzato per la registrazione, clicca sul link all'interno per completare la registrazione!");
                        navigate("/login");
                        // console.log(response);
                    }
                })
            } else {
              alert('Inserisci tutti i valori prima di passare al passo successivo.');
            }
        }
    };

    const handleStepOne = useCallback(() => {
        setStep(1);
    }, []);

    return (
        <>
            {
                step === 1 &&
                (
                    <div className="bg-[#7C7C7C] flex items-center min-h-screen bg-gray-50">
                        <div className="flex-1 min-h-[500px] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl h-[500px]">
                            <div className="flex flex-col md:flex-row h-[100%]">
                                <div className="md:h-auto md:w-1/2">
                                    <img className="object-cover w-full h-full rounded-l-2xl" 
                                        src="https://static.vecteezy.com/ti/vettori-gratis/p3/5911683-premium-member-icon-account-premium-utente-premium-gratuito-vettoriale.jpg"  
                                        alt="img" />
                                </div>
                                <div className="flex items-center justify-center p-6 sm:px-12 sm:py-10 md:w-1/2">
                                    <div className="w-full h-full">
                                        <div className="flex flex-col items-center">
                                            <h3 className="mb-4 text-xl font-bold text-blue-600">
                                                Registrazione utente
                                            </h3>
                                            <div className="w-[80%] bg-gray-200 rounded-full flex">
                                                <div className="flex flex-row justify-start">
                                                    <div className="w-36 p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full">
                                                        Step 1
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-4">
                                            <label className="block mb-2 text-sm"> 
                                                Nome<span className="text-red-600">*</span> 
                                            </label>
                                            <input type="text" className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none 
                                                focus:ring-1 focus:ring-blue-600" placeholder="Nome" name="first_name" 
                                                value={inputValues.first_name} onChange={handleInputChange} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm"> 
                                                Cognome<span className="text-red-600">*</span>
                                            </label>
                                            <input type="text" className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none 
                                                focus:ring-1 focus:ring-blue-600" placeholder="Cognome" name="last_name" 
                                                value={inputValues.last_name} onChange={handleInputChange} />
                                        </div>
                                        <div className="flex justify-end mt-[98px]">
                                            <button className="px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors
                                                duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none" 
                                                href="#" onClick={handleNextStep}>
                                                Prossimo
                                            </button>
                                        </div>
                                        <div className="mt-4 text-center flex flex-row gap-2 w-[100%] justify-end">
                                            <Link to="/login" className="text-sm">
                                                Hai già un account?
                                            </Link>
                                            <Link to="/login" className="text-sm text-blue-600 hover:underline hover:text-blue-900">Accedi</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                step === 2 &&
                (
                    <div className="bg-[#7C7C7C] flex items-center min-h-screen bg-gray-50">
                        <div className="flex-1 h-[500px] min-h-[500px] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl">
                            <div className="flex flex-col md:flex-row h-[100%]">
                                <div className="md:h-auto md:w-1/2">
                                    <img className="object-cover w-full h-full rounded-l-2xl" 
                                        src="https://static.vecteezy.com/ti/vettori-gratis/p3/5911683-premium-member-icon-account-premium-utente-premium-gratuito-vettoriale.jpg"  
                                        alt="img" />
                                </div>
                                <div className="flex items-center justify-center p-6 sm:px-12 sm:py-10 md:w-1/2">
                                    <div className="w-full h-full">
                                        <div className="flex flex-col items-center">
                                            <h3 className="mb-4 text-xl font-bold text-blue-600">
                                                Registrazione utente
                                            </h3>
                                            <div className="bg-gray-200 rounded-full flex justify-end w-[80%]">
                                                <div>
                                                    <div className="w-36 p-1 text-xs font-medium leading-none text-center text-blue-100 bg-blue-600 rounded-full enterDivAnimation">
                                                        Step 2
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 mt-4">
                                            <label className="block mb-2 text-sm"> 
                                                E-mail<span className="text-red-600">*</span>
                                            </label>
                                            <input className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                focus:ring-1 focus:ring-blue-600" placeholder="emailpersonale@esempio.com" type="email" name="email" 
                                                value={inputValues.email} onChange={handleInputChange} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm"> 
                                                Password<span className="text-red-600">*</span>
                                            </label>
                                            <input className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                focus:ring-1 focus:ring-blue-600" placeholder="••••••••" type="password" name="password" 
                                                value={inputValues.password} onChange={handleInputChange} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block mb-2 text-sm">
                                                Confirm your password<span className="text-red-600">*</span>
                                            </label>
                                            <input className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none
                                                focus:ring-1 focus:ring-blue-600" placeholder="••••••••" type="password" name="inputConfirmPassword" 
                                                value={inputValues.inputConfirmPassword} onChange={handleInputChange} />
                                        </div>
                                        <div className="flex justify-between">
                                            <div onClick={handleStepOne} className="cursor-pointer mt-[22px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2563eb" className="w-6 h-6 hover:stroke-[#6191FB]">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </div>
                                            <button onClick={handleFinalStep} className="px-6 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors
                                                duration-150 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none" 
                                                href="#">
                                                Registrati
                                            </button>
                                        </div>
                                        <div className="mt-4 text-center flex flex-row gap-2 w-[100%] justify-end">
                                            <p className="text-sm">
                                                Hai già un account?
                                            </p>
                                            <Link to="/login" className="text-sm text-blue-600 hover:underline hover:text-blue-900">Accedi</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default RegistrationUser;