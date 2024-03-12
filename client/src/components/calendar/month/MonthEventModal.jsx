import { useEffect } from "react";

const MonthEventModal = ({
  selectedEvent,
  setSelectedEvent,
  onEditEventClick,
  onDeleteEventClick,
}) => {
  useEffect(() => {
    const escEvent = (e) => e.key === "Escape" && setSelectedEvent(null);
    document.addEventListener("keyup", escEvent);

    return () => {
      document.removeEventListener("keyup", escEvent);
    };
  }, []);

  return (
    <>
      {selectedEvent && (
        <div
          className={`animate__animated animate__fadeIn transition-opacity fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 z-10 flex justify-center items-center`}
        >
          <div className="bg-white rounded-lg w-[400px] h-auto relative animate__animated animate__fadeInDown">
            <div
              onClick={() => setSelectedEvent(null)}
              className="absolute bg-white font-bold p-2 rounded-full text-3xl border -right-10 -top-8 cursor-pointer"
            >
              <svg
                className=" fill-gray-800 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {selectedEvent && selectedEvent?.name}
              </h3>
              {selectedEvent && selectedEvent?.content && (
                <p className="mt-3 mb-2 flex flex-col text-gray-500 gap-1">
                  {selectedEvent.content}
                </p>
              )}
              <p className="mt-4 flex flex-col gap-1">
                <span className="text-sm text-gray-400">
                  {selectedEvent && selectedEvent.name}
                </span>
                <span className="text-md font-bold text-gray-800">
                  {selectedEvent && selectedEvent?.timeString && (
                    <>
                      {selectedEvent.timeString.start
                        .split(":")
                        .splice(0, 2)
                        .join(":")}{" "}
                      -{" "}
                      {selectedEvent.timeString.end
                        .split(":")
                        .splice(0, 2)
                        .join(":")}
                    </>
                  )}
                </span>
              </p>
            </div>
            <div className="px-6 border-t border-gray-100 py-4 flex justify-between">
              <span
                onClick={() => onEditEventClick(selectedEvent.id)}
                className="cursor-pointer text-blue-400 flex gap-1 items-center"
              >
                <svg
                  className="fill-blue-400 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                </svg>
                Modifica
              </span>
              <span
                onClick={() => onDeleteEventClick(selectedEvent.id)}
                className="cursor-pointer text-red-400 flex gap-1 items-center"
              >
                <svg
                  className="fill-red-400 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                </svg>
                Elimina
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MonthEventModal;
