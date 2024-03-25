import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Constants from "../constants";
import { useSelector } from "react-redux";

const Events = () => {
    const userToken = useSelector((state) => state.auth.token);
    const userId = useSelector((state) => state.auth.user._id);
    const navigate = useNavigate();

    const [newEvent, setNewEvent] = useState(false);
    const [participation, setParticipation] = useState(false);
    const [eventId, setEventId] = useState('');
    const [allEvent, setAllEvent] = useState([]);
    const [searchEvent, setSearchEvent] = useState(false);
    const [clubData, setClubData] = useState(null);
    const [space, setSpace] = useState(null);
    const [maxPlayers, setMaxPlayers] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [reverseFormatDate, setReverseFormatDate] = useState('');
    const [slotFromDate, setSlotFromDate] = useState([]);
    const [eventInfo, setEventInfo] = useState({
        club: "",
        space: null,
        sport: "",
        players_max_count: null,
        start_date: "" // Tue Mar 19 2024 15:30:00 GMT+0100
    });

    const { clubId } = useParams();

    const formatDate = (dateString) => {
        const parts = dateString.split('-');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
      };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleConfirmPartecipation = (eventId) => {
        if (participation) {
            setParticipation(false);
            setEventId('');
        } else {
            setParticipation(true);
            setEventId(eventId);
        }
    }

    const handleSelectStartDate = (event) => {
        const selectedStartDate = event.target.value;

        if (eventInfo.start_date !== selectedStartDate) {
            setEventInfo((actualValues) => ({
                ...actualValues,
                  start_date: selectedStartDate
            }));
        } else {
            setEventInfo((actualValues) => ({
                ...actualValues,
                  start_date: ""
            }));
        }
    };

    const handleNewEvent = () => {
        setSearchEvent(false);
        if (newEvent) {
            setNewEvent(false);
        } else {
            setNewEvent(true);
        }
    };

    const handleSearchEvent = () => {
        setNewEvent(false);
        if (searchEvent) {
            setSearchEvent(false);
        } else {
            setSearchEvent(true);
        }
    }

    const handleSelectSpace = (event) => {
        const selectedOption = event.target.value;
    
        if (eventInfo.space !== selectedOption) {
            setSlotFromDate([]);
            setEventInfo((actualValues) => ({
                ...actualValues,
                space: selectedOption
                }));
        } else {
            setEventInfo((actualValues) => ({
                ...actualValues,
                  space: "",
                  sport: ""
            }));
            setMaxPlayers([]);
            setSelectedDate('');
            setSlotFromDate([]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleDisagreeParticipation = () => {
        setParticipation(false);
        setEventId('');
    }

    const handleMaxPlayers = (event) => {
        const maxPlayers = event.target.value;
        if (eventInfo.players_max_count === null) {
            setEventInfo((actualValues) => ({
                ...actualValues,
                  players_max_count: maxPlayers
            }));
        } else {
            setEventInfo((actualValues) => ({
                ...actualValues,
                  players_max_count: null
            }));
        }
    };

    const handleDateAvailability = () => {
        const fetchDateAvailability = async () => {
            try {
              const response = await axios({
                url: `${Constants.API_HOST}/api/events/${eventInfo.space}?date=${reverseFormatDate}&sport=${eventInfo.sport}`,
                method: "GET",
              });
              setSlotFromDate(response.data);
            } catch (error) {
              console.error("Error fetching club data:", error);
            }
        };
        fetchDateAvailability();
    };

    const createEvent = async (data, token) => {
        if (eventInfo.club && eventInfo.space && eventInfo.sport && eventInfo.players_max_count && eventInfo.start_date) {
            try {
                const response = await axios({
                    url: `${Constants.API_HOST}/api/events`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data
                });
                if(response.status === 201) {
                    alert("Evento creato correttamente, torna alla tua Home Page per visualizzare gli eventi a cui parteciperai");
                    navigate("/services");
                }
            } catch (error) {
                console.error("Error creating event:", error);
            }
        } else {
            alert("Seleziona tutti i campi prima di creare il tuo evento");
        }
    };

    const handleAddUserToEvent = async (data, token) => {
        try {
          const response = await axios({
            url: `${Constants.API_HOST}/api/events/addPlayer/${eventId}`,
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
          });
          
          alert("Complimenti ti sei aggiunto alla partita con successo!")
          navigate("/services");
        } catch (error) {
          console.error('Si è verificato un errore durante l\'aggiunta dell\'utente all\'evento:', error);
        }
    };

    const fetchEventData = async () => {
        try {
          const response = await axios({
            url: `${Constants.API_HOST}/api/events/club/${clubId}`,
            method: "GET",
          });
          setAllEvent(response.data);
        } catch (error) {
          console.error("Error fetching all events data:", error);
        }
    };

    const alertUnselectedDate = () => {
        alert("Selezionare prima una data");
    }

    useEffect(() => {
        setTimeout(() => {
            if(eventInfo.space) {
                
            const extractedSport = space.find((item) => item._id === eventInfo.space );
            setEventInfo((actualValues) => ({
                ...actualValues,
                sport: extractedSport ? extractedSport.sport._id : ""
            }));
            setMaxPlayers(extractedSport ? extractedSport.sport.players : null);
            }
        }, 500);
    }, [eventInfo.space]);

    useEffect(() => {
        const fetchClubData = async () => {
            try {
              const response = await axios({
                url: `${Constants.API_HOST}/api/clubs/${clubId}`,
                method: "GET",
              });
              setClubData(response.data);
            } catch (error) {
              console.error("Error fetching club data:", error);
            }
        };
        fetchClubData();
        setEventInfo((actualValues) => ({
            ...actualValues,
              club: clubId
            }));
    }, []);

    useEffect(() => {
        const fetchSpaceFromClub = async () => {
            try {
              const response = await axios({
                url: `${Constants.API_HOST}/api/spaces/${clubId}`,
                method: "GET",
              });
              setSpace(response.data);

            } catch (error) {
              console.error("Error fetching space from club:", error);
            }
        };
        fetchSpaceFromClub();
    }, [clubData]);

    useEffect(() => {
        if(selectedDate !== '') {
            setReverseFormatDate(formatDate(selectedDate));
        }
    }, [selectedDate]);

    const prova = () => {
        // console.log(clubData);
        // console.log(eventInfo);
        // console.log(space);
        // console.log(maxPlayers);
        // console.log(selectedDate);
        // console.log(slotFromDate);
        // console.log(reverseFormatDate);
        // console.log(allEvent);
        // console.log(eventId);
        // console.log(userId);
        // console.log(userToken);
    };

    return (
        <>
            <h4 className="flex flex-row justify-center mt-6 items-center text-2xl font-bold self-center max-[600px]:text-[20px] text-center">Crea il tuo evento o unisciti ad un evento</h4>
            <div className="flex flex-row justify-center items-center mt-4 gap-8">
                <button onClick={handleNewEvent} className="flex flex-row justify-center items-center m-2 font-semibold text-sm border-black rounded-2xl w-fit bg-c_button 
                    hover:shadow font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 px-4 py-2">
                    Prenota un campo
                </button>
                <button onClick={handleSearchEvent} className="flex flex-row justify-center items-center font-semibold text-sm border-black rounded-2xl w-fit bg-c_button hover:shadow 
                    font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 px-4 py-2">
                    Unisciti a una partita
                </button>
            </div>
            {
                newEvent && (
                    <div className="flex justify-center w-full">
                        <div className="flex flex-col justify-center items-center border-2 rounded-3xl border-none w-[40%] shadow-md bg-white m-2 p-8">
                            <form onSubmit={handleSubmit} className="mx-auto flex flex-col w-3/4">
                                <div className="relative z-0 w-full mb-6 text-center">
                                    <h4 className="font-medium">Scegli lo sport e il numero del campo</h4>
                                    {
                                        space.length > 0
                                        &&
                                        <div className="mt-2">
                                            {
                                                space.map((item) => (
                                                    <button key={item._id} value={item._id} 
                                                        className={`${eventInfo.space === item._id ? 
                                                        "text-black border border-green-700 bg-[#89EDAF] hover:bg-[#89EDAF]/80 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2" 
                                                        : 
                                                        "text-gray-900 border border-gray-800 hover:bg-[#EBEBEB] focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"}`}
                                                        onClick={handleSelectSpace}
                                                        >
                                                        {item.name}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                                <hr className="h-[20px]" />
                                <div className="flex justify-center text-center">
                                    <div className="relative z-0 w-full mb-5">
                                        {
                                            eventInfo.sport !== "" ?
                                            <div>
                                                <h6 className="font-medium mb-2">Numero giocatori</h6>
                                                {
                                                    maxPlayers.length > 0
                                                    &&
                                                    maxPlayers.map((item, index) => (
                                                        <button key={index} value={item} 
                                                            className={`${eventInfo.players_max_count == item ? 
                                                            "text-black border border-green-700 bg-[#89EDAF] hover:bg-[#89EDAF]/80 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2" 
                                                            : 
                                                            "text-gray-900 border border-gray-800 hover:bg-[#EBEBEB] focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"}`}
                                                            onClick={handleMaxPlayers}
                                                            >
                                                            {item}
                                                        </button>
                                                    ))
                                                }
                                            </div>
                                            :
                                            <div>
                                                <h6 className="font-medium mb-4">Numero giocatori</h6>
                                                <p className="text-red-400">SELEZIONA PRIMA UN CAMPO</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <hr className="h-[20px]" />
                                <div className="flex justify-between">
                                    <div className="relative z-0 w-full mb-5">
                                        {
                                            maxPlayers.length > 0 ?
                                            <div className="text-medium flex flex-col items-center gap-4">
                                                <label htmlFor="data">Scegli un giorno</label>
                                                <input className="cursor-pointer border-solid border-2 border-gray-950 p-2 rounded-lg" type="date" id="data" name="data" value={selectedDate} onChange={handleDateChange} />
                                            </div>
                                            :
                                            <div className="text-medium flex flex-col items-center gap-4">
                                                <p>Scegli un giorno</p>
                                                <p className="text-red-400">SELEZIONA PRIMA UN CAMPO</p>
                                            </div>
                                        }
                                    </div>
                                    {
                                        selectedDate !== '' ?
                                        <div className="relative z-0 w-full flex justify-center items-center">
                                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" 
                                                onClick={handleDateAvailability}>
                                                    Scegli un orario
                                            </button>
                                        </div>
                                        :
                                        <div className="relative z-0 w-full flex justify-center items-center">
                                            <button onClick={alertUnselectedDate} className="cursor-default py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                                Scegli un orario
                                            </button>
                                        </div>
                                    }
                                </div>
                                <hr className="h-[20px]" />
                                <div className="relative z-0 w-full mb-5">
                                        {
                                            slotFromDate.length > 0 ?
                                            <div className="grid grid-cols-3 gap-2 border-dashed border-2 border-slate-200 p-4">
                                                {
                                                    slotFromDate.map((item) => (
                                                        <div key={item.start_date} className="flex justify-center">
                                                            {
                                                                item.is_free === true ?
                                                                <button value={item.start_date} 
                                                                    className={`${eventInfo.start_date == item.start_date ? 
                                                                    "w-[130px] text-black border border-green-700 bg-[#89EDAF] hover:bg-[#89EDAF]/80 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1 text-center" 
                                                                    : 
                                                                    "w-[130px] text-gray-900 border border-gray-800 hover:bg-[#EBEBEB] focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center"}`}
                                                                    onClick={handleSelectStartDate}
                                                                    >
                                                                    {item.start_date.substring(item.start_date.indexOf("T") + 1, item.start_date.indexOf(".", item.start_date.indexOf("T")))}
                                                                </button>
                                                                :
                                                                <div className="flex justify-center items-center cursor-default text-center text-[11px]">Non disponibile</div>
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            :
                                            <div className="text-center">Scegli una data per visualizzare gli orari disponibili</div>
                                        }
                                </div>
                                <div className="w-full mb-2 mt-8 flex justify-center">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                                        onClick={() => createEvent(eventInfo, userToken)}>
                                            Crea Evento
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
            {/* <button onClick={prova}>stampa</button> */}
            {
                searchEvent && (
                    <div className="flex flex-col items-center mt-6 mb-6">
                        <button onClick={fetchEventData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
                            Trova eventi attivi nel club
                        </button>
                        <div>
                            {
                                allEvent.length > 0 ?
                                <div className="flex flex-wrap gap-6 justify-center">
                                    {
                                        allEvent.map((item, index) => (
                                            <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                                                <div>
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                                        {item.sport.name}
                                                    </h5>
                                                </div>
                                                <p className="mb-3 font-medium text-gray-700">
                                                    Campo n° : <span className="font-[25px] font-bold">{item.space.name}</span>
                                                </p>
                                                <div>
                                                    - Data: <span className="font-[25px] font-bold">{item.start_date.split("T")[0]}</span>
                                                </div>
                                                <div>
                                                    - Inizio partita: <span className="font-[25px] font-bold">{item.start_date.substring(item.start_date.indexOf("T") + 1, item.start_date.indexOf(".", item.start_date.indexOf("T")))}</span>
                                                </div>
                                                <div>
                                                    - Fine partita: <span className="font-[25px] font-bold">{item.end_date.substring(item.end_date.indexOf("T") + 1, item.end_date.indexOf(".", item.end_date.indexOf("T")))}</span>
                                                </div>
                                                <div>
                                                    - Numero partecipanti iscritti: <span className="font-[25px] font-bold">{item.players.length}</span>
                                                </div>
                                                <div>
                                                    - Numero massimo partecipanti: <span className="font-[25px] font-bold">{item.players_max_count}</span>
                                                </div>
                                                <button onClick={() => handleConfirmPartecipation(item._id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4">
                                                    Partecipa all'evento
                                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        ))
                                    }
                                    {
                                        participation && (
                                            <div className="fixed flex flex-col items-center justify-center bg-white/90 h-screen w-full top-0 z-[999999]">
                                                <h4 className="font-bold text-[20px] mb-8">Sicuro di voler partecipare alla partita?</h4>
                                                <div className="flex gap-8">
                                                    <button onClick={() => handleAddUserToEvent(userId, userToken)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                                                        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                                            Yes
                                                    </button>
                                                    <button onClick={handleDisagreeParticipation} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                                                        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                                            Red
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                :
                                <div></div>
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Events;