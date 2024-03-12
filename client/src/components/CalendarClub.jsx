import { useState } from "react"
import MonthView from "./calendar/MonthView";

const monthEvents = [
  { id: 1, date: new Date(2024, 3, 1), name: "Meeting 1", content: "", time: { start: new Date(2024, 3, 1, 12, 0, 0), end: new Date(2024, 3, 1, 14, 0, 0) } },
  { id: 2, date: new Date(2024, 3, 1), name: "Meeting 2", content: "", time: { start: new Date(2024, 3, 1, 16, 0, 0), end: new Date(2024, 3, 1, 18, 0, 0) } },
  { id: 3, date: new Date(2024, 3, 3), name: "Lessons FS19 with Alessandro D'Antoni", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum pariatur id ea dolorum architecto repellendus.", time: { start: new Date(2024, 3, 3, 9, 0, 0), end: new Date(2024, 3, 3, 12, 0, 0) }, color: "blue" },
]

const CalendarClub = () => {
  const [viewType, setViewType] = useState("MONTH");
  const [lang, setLang] = useState("it-IT");
  
  return (
    <>
      <div className="p-6 flex gap-4">
        <select value={viewType} onChange={(e) => setViewType(e.target.value)}>
          <option value="MONTH">Mese</option>
          <option value="WEEK">Settimana</option>
          <option value="DAY">Giorno</option>
        </select>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="it-IT">Italiano</option>
          <option value="en-EN">Inglese</option>
        </select>
      </div>
      <div>
        {
          viewType === "MONTH" && (
            <MonthView 
              lang={lang} 
              events={monthEvents}
              onDayClick={(date) => alert("Passa al giorno " + date)}
              onMoreEventsClick={(date) => alert("Passa alla visuale del giorno per vedere tutti gli eventi di " + date)}
              onEditEventClick={(id) => alert("Modifica l'evento con id " + id)}
              onDeleteEventClick={(id) => alert("Elimina l'evento con id " + id)}
            />
          )
        }
      </div>
    </>
  )
}

export default CalendarClub
