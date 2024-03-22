import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Constants from "../constants";

const Events = () => {
    const [newEvent, setNewEvent] = useState(false);
    const [clubData, setClubData] = useState(null);
    const [space, setSpace] = useState(null);
    const [maxPlayers, setMaxPlayers] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [slotFromDate, setSlotFromDate] = useState([]);
    const [eventInfo, setEventInfo] = useState({
        club: "",
        space: "",
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

    const handleNewEvent = () => {
        if (newEvent) {
            setNewEvent(false);
        } else {
            setNewEvent(true);
        }
    };

    const handleSelectSpace = (event) => {
        const selectedOption = event.target.value;
    
        if (eventInfo.space !== selectedOption) {
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
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

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
                url: `${Constants.API_HOST}/api/events/${eventInfo.space}?date=${eventInfo.start_date}&sport=${eventInfo.sport}`,
                method: "GET",
              });
              setSlotFromDate(response.data);
            } catch (error) {
              console.error("Error fetching club data:", error);
            }
        };
        fetchDateAvailability();
    }

    useEffect(() => {
        setTimeout(() => {
            const extractedSport = space.find((item) => item._id === eventInfo.space );
            setEventInfo((actualValues) => ({
                ...actualValues,
                sport: extractedSport ? extractedSport.sport._id : ""
            }));
            setMaxPlayers(extractedSport ? extractedSport.sport.players : null);
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
            setEventInfo((actualValues) => ({
                ...actualValues,
                  start_date: formatDate(selectedDate)
            }));
        }
    }, [selectedDate]);

    const prova = () => {
        // console.log(clubData);
        // console.log(eventInfo);
        // console.log(space);
        // console.log(maxPlayers);
        // console.log(selectedDate);
        console.log(slotFromDate);
    }


    return (
        <>
            <h4 className="flex flex-row justify-center mt-6 items-center text-3xl italic self-center">Crea il tuo evento o partecipa ad un evento in corso</h4>
            <div className="flex flex-row justify-center items-center">
                <button onClick={handleNewEvent} className="flex flex-row justify-center  items-center m-2 font-semibold text-sm border-black rounded-2xl w-16 bg-c_button hover:shadow font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
                    Prenota un campo
                </button>
                <button className="flex flex-row justify-center items-center font-semibold text-sm border-black rounded-2xl w-16 bg-c_button hover:shadow font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
                    Unisciti a una partita
                </button>
            </div>
            {
                newEvent && (
                    <div className="flex justify-center w-full ">
                        <div className="flex flex-col justify-center items-center border-2 rounded-3xl border-none max-w-[500px] max-h shadow-md bg-white m-2 p-2 gap-5">
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                {/* SCEGLIERE LO SPORT NON MI SERVE PERCHE' SCEGLIENDO LO SPACE SCELGO AUTOMATICAMENTE ANCHE L'ID DELLO SPORT */}
                                {/* <div className="relative z-0 w-full mb-5">
                                    {
                                        clubData.info.sports.length > 0 
                                        && 
                                        <div>
                                            {
                                                clubData.info.sports.map((item) => (
                                                    <button key={item._id} value={item._id} 
                                                        className={`${eventInfo.sport === item._id ? 
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
                                    }
                                </div> */}
                                <div className="relative z-0 w-full mb-5">
                                    <h4>scegli lo sport ed il relativo campo</h4>
                                    {
                                        space.length > 0
                                        &&
                                        <div>
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
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5">
                                        {
                                            eventInfo.sport !== "" ?
                                            <div>
                                                <h6>Numero giocatori</h6>
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
                                                <h6>Numero giocatori</h6>
                                                <p>Seleziona prima il campo</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5">
                                        {
                                            maxPlayers.length > 0 ?
                                            <div>
                                                <label htmlFor="data">data:</label>
                                                <input type="date" id="data" name="data" value={selectedDate} onChange={handleDateChange} />
                                            </div>
                                            :
                                            <div>Seleziona prima il campo</div>
                                        }
                                    </div>
                                    <div className="relative z-0 w-full mb-5">
                                        <button onClick={handleDateAvailability}>cerca disponibilità per il giorno selezionato</button>
                                    </div>
                                    <div className="relative z-0 w-full mb-5">
                                    </div>
                                    <div className="relative z-0 w-full mb-5">
                                    </div>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crea Evento</button>
                            </form>
                        </div>
                    </div>
                )
            }
            <button onClick={prova}>stampa</button>
        </>
    )
}

export default Events;