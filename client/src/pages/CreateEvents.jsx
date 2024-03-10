// L'azienda:
//  ci deve essere:
//  nome dell'evento= Torneo
//  numero partecipanti
//  sport
//  quantità di partite
//  durata effetiva dell'evento= Torneo
//  durata iscrizione per la partecipazione

import { useState } from "react";
import axios from "axios";

const CreateEvents = () => {
  const [form, setForm] = useState({
    NomeEvento: "",
    NumeroPartecipanti: "",
    Sport: "",
    QuantitàPartite: "",
    DurataEvento: "",
    DurataIscrizione: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const results = await axios({
        url: "{--//ANCHOR - inserire url per inviare al server i dati}",
        method: "POST",
        data: form,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="font-semibold text-2xl">Crea il tuo Evento</h2>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center border-2 rounded-3xl border-none w-3/4 py-10 h-max shadow-lg bg-white mt-2 ">
            {/* <img
              src={}
              alt="medals"
              className="w-[120px] h-[120px] self-center "
            /> */}

            <form
              className="flex flex-col justify-center items-center mx-32 "
              onSubmit={handleSubmit}
            >
              <label className="font-semibold text-md" for="NomeEvento">
                Nome Evento
              </label>
              <input
                className="border-2 border-black w-3/4 mr-2 mb-2 placeholder-shown:border-gray-500"
                placeholder="Nome Evento"
                type="text"
                id="NomeEvento"
                name="NomeEvento"
                onInput={handleInput}
                value={form.NomeEvento}
              />
              <label className="font-semibold text-md" for="SportSel">
                Sport
              </label>
              <input
                className="border-2 border-black w-3/4 mr-2 mb-2 placeholder-shown:border-gray-500"
                placeholder="Sport"
                type="text"
                id="Sport"
                name="SportSel"
                onInput={handleInput}
                value={form.Sport}
              />
              <label className="font-semibold text-md" for="NumeroPartecipanti">
                Numero partecipanti
              </label>
              <input
                className="border-2 border-black w-3/4 mr-2 mb-2 placeholder-shown:border-gray-500"
                placeholder="Numero partecipanti"
                type="text"
                id="NumeroPartecipanti"
                name="NumeroPartecipanti"
                onInput={handleInput}
                value={form.NumeroPartecipanti}
              />
              <label className="font-semibold text-md" for="QuantitàPartite">
                Quantità di partite
              </label>
              <input
                className="border-2 border-black w-3/4 mr-2 mb-2 placeholder-shown:border-gray-500"
                placeholder="Quantità di partite"
                type="text"
                id="QuantitàPartite"
                name="QuantitàPartite"
                onInput={handleInput}
                value={form.QuantitàPartite}
              />
              <label className="font-semibold text-md" for="DurataEvento">
                Durata dell'Evento
              </label>
              <input
                className="border-2 border-black w-3/4 mr-2 mb-2 placeholder-shown:border-gray-500"
                placeholder="Durata effetiva dell'evento"
                type="text"
                id="DurataEvento"
                name="DurataEvento"
                onInput={handleInput}
                value={form.DurataEvento}
              />
              <label className="font-semibold text-md" for="DurataIscrizione">
                Durata iscrizione per la partecipazione
              </label>
              <input
                className="border-2 border-black w-3/4 mr-2 mb-2 placeholder-shown:border-gray-500"
                placeholder="Durata iscrizione per la partecipazione"
                type="text"
                id="DurataIscrizione"
                name="DurataIscrizione"
                onInput={handleInput}
                value={form.DurataIscrizione}
              />
              <button
                className="font-semibold mt-2 text-sm border-black rounded-2xl w-16 bg-c_button hover:shadow-sec font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300"
                type="submit"
              >
                Invia
              </button>
            </form>
            <div>
              <textarea
                className="border border-pri placeholder-shown:border-gray-500 "
                placeholder="Descrizione Evento"
                name=""
                id=""
                cols="30"
                rows="15"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvents;
