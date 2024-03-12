import { useState } from "react";
import { getMonthCurrentDays, getWeekDaysName } from "../../utilities/month";
import MonthEventModal from "./month/MonthEventModal";

const texts = {
  "it-IT": {
    TODAY_BUTTON: "Oggi",
    MORE_BOX_TEXT: "Vedi tutti",
  },
  "en-EN": {
    TODAY_BUTTON: "Today",
    MORE_BOX_TEXT: "Show more",
  },
};

const MonthView = ({
  lang = "it-IT",
  events = [],
  onDayClick = () => {},
  onMoreEventsClick = () => {},
  onEditEventClick = () => {},
  onDeleteEventClick = () => {},
}) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const weekDaysNames = getWeekDaysName(lang);
  const monthCurrentDays = getMonthCurrentDays(
    currentYear,
    currentMonth,
    events
  );

  const handleNextMonth = () => {
    setCurrentMonth((m) => {
      if (m < 11) return (m += 1);
      else {
        setCurrentYear((y) => (y += 1));
        return 0;
      }
    });
  };

  const handlePrevMonth = () => {
    setCurrentMonth((m) => {
      if (m > 0) return (m -= 1);
      else {
        setCurrentYear((y) => (y -= 1));
        return 11;
      }
    });
  };

  const handleNextYear = () => {
    setCurrentYear((y) => (y += 1));
  };

  const handlePrevYear = () => {
    setCurrentYear((y) => (y -= 1));
  };

  const handleSetToday = () => {
    setCurrentYear(new Date().getFullYear());
    setCurrentMonth(new Date().getMonth());
  };

  const handleSelectEvent = (
    e,
    { id, name, content, date, timeString, color, is_more_box }
  ) => {
    e.stopPropagation();

    is_more_box
      ? onMoreEventsClick(date)
      : setSelectedEvent({ id, name, content, date, timeString, color });
  };

  return (
    <>
      <div className="relative">
        <div className="container mx-auto mt-10 relative">
          <div className="wrapper bg-white rounded shadow w-full ">
            <div className="header flex justify-between border-b p-2">
              <div className="buttons flex items-center">
                <button className="p-1" onClick={handlePrevYear}>
                  <svg
                    width="1em"
                    fillRule="gray"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-left-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                    />
                  </svg>
                </button>
                <div className="mx-4 capitalize w-16 text-center">
                  {currentYear}
                </div>
                <button className="p-1" onClick={handleNextYear}>
                  <svg
                    width="1em"
                    fillRule="gray"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </div>
              <div className="buttons flex items-center">
                <button
                  className="mr-3 border rounded px-4 py-1 flex gap-1 items-center"
                  onClick={handleSetToday}
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                  </svg>
                  {texts[lang].TODAY_BUTTON}
                </button>
                <button className="p-1" onClick={handlePrevMonth}>
                  <svg
                    width="1em"
                    fillRule="gray"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-left-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                    />
                  </svg>
                </button>
                <div className="mx-4 capitalize w-16 text-center">
                  {new Date(currentYear, currentMonth).toLocaleString(lang, {
                    month: "long",
                  })}
                </div>
                <button className="p-1" onClick={handleNextMonth}>
                  <svg
                    width="1em"
                    fillRule="gray"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  {weekDaysNames.map((weekDayName, i) => (
                    <th
                      key={`week-day-name-${i}`}
                      className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                      <span className="xl:block lg:block md:block sm:block hidden">
                        {weekDayName}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthCurrentDays.map((rows, i) => (
                  <tr key={`month-day-rows-${i}`} className="text-center h-20">
                    {rows.map(
                      (
                        { d, dateTs, events, is_current_month, is_current_day },
                        j
                      ) => (
                        <td
                          key={`month-day-item-${j}`}
                          onClick={() => onDayClick(dateTs)}
                          className={
                            is_current_month
                              ? `${
                                  is_current_day
                                    ? "border border-blue-400 bg-blue-50"
                                    : "border"
                                } p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto cursor-pointer duration-500 ease hover:bg-gray-300`
                              : `${
                                  is_current_day
                                    ? "border border-blue-400 bg-blue-50"
                                    : "border"
                                } bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto cursor-pointer duration-500 ease hover:bg-gray-300`
                          }
                        >
                          <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                            <div className="top h-5 w-full relative">
                              <span className="text-gray-500">{d}</span>
                              {events &&
                                events.length > 0 &&
                                events.map(
                                  (
                                    {
                                      id,
                                      name,
                                      content,
                                      date,
                                      timeString,
                                      color,
                                      is_more_box,
                                    },
                                    k
                                  ) => (
                                    <div
                                      key={`month-day-item-${j}-event-${k}`}
                                      className="bottom flex-grow h-30 p-1 w-full cursor-pointer relative"
                                    >
                                      <div
                                        onClick={(e) =>
                                          handleSelectEvent(e, {
                                            id,
                                            name,
                                            content,
                                            date,
                                            timeString,
                                            color,
                                            is_more_box,
                                          })
                                        }
                                        className={[
                                          !is_more_box
                                            ? `event flex flex-col gap-2 bg-blue-400 cursor-pointer hover:bg-blue-500 transition text-white rounded p-1 text-sm mb-1`
                                            : "rounded border border-transparent text-gray-500 hover:border hover:border-blue-300 hover:bg-blue-50 transition bg-white cursor-pointer text-sm py-1",
                                        ].join("")}
                                      >
                                        <div className="event-name truncate">
                                          {!is_more_box ? (
                                            name
                                          ) : (
                                            <span className="flex items-center justify-center gap-2">
                                              {texts[lang].MORE_BOX_TEXT}{" "}
                                              <svg
                                                className="fill-gray-500 h-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                              >
                                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                              </svg>
                                            </span>
                                          )}
                                        </div>
                                        {timeString && (
                                          <div className="time">
                                            {timeString.start
                                              .split(":")
                                              .splice(0, 2)
                                              .join(":")}{" "}
                                            -{" "}
                                            {timeString.end
                                              .split(":")
                                              .splice(0, 2)
                                              .join(":")}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                            <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                          </div>
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <MonthEventModal
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          onEditEventClick={onEditEventClick}
          onDeleteEventClick={onDeleteEventClick}
        />
      </div>
    </>
  );
};

export default MonthView;
