import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Constants from "../constants";
import user_stock from "../assets/stock_user.jpg";
import cover_stock from "../assets/stock_cover.jpg";
import { Link } from "react-router-dom";

export const Map = () => {
  const [locations, setLocations] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [waitingForPosition, setWaitingForPosition] = useState(true);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);
  const [clubIds, setClubIds] = useState([]);
  const [selectedClubData, setSelectedClubData] = useState(null);

  const position = [41.90382101620244, 12.499597185654247];

  const zoomLevel = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: `${Constants.API_HOST}/api/clubs`,
          method: "GET",
        });
        console.log(response.data.docs);
        const coordinatesArray = response.data.docs.map((club) => {
          return [club.location.coordinates.lat, club.location.coordinates.lon];
        });
        setLocations(coordinatesArray);

        const ids = response.data.docs.map((club) => club._id);
        setClubIds(ids);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchData();

    const successCallback = (position) => {
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
      setWaitingForPosition(false);
    };

    const errorCallback = () => {
      setWaitingForPosition(false);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  useEffect(() => {
    const fetchClubData = async () => {
      if (selectedMarkerId) {
        try {
          const response = await axios({
            url: `${Constants.API_HOST}/api/clubs/${selectedMarkerId}`,
            method: "GET",
          });
          setSelectedClubData(response.data);
        } catch (error) {
          console.error("Error fetching club data:", error);
        }
      }
    };

    fetchClubData();
  }, [selectedMarkerId]);

  const handleMarkerClick = async (id) => {
    setSelectedMarkerId(id);
  };

  if (waitingForPosition) {
    return <p>Caricamento della mappa...</p>;
  }

  return (
    <div className="flex flex-row items-center justify-center gap-2 w-full">
      <MapContainer
        center={currentPosition || position}
        zoom={zoomLevel}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentPosition && <Marker position={currentPosition} />}
        {locations.length > 0 &&
          locations.map((p, index) => (
            <Marker
              position={p}
              key={index}
              eventHandlers={{
                click: () => {
                  handleMarkerClick(clubIds[index]);
                },
              }}
            ></Marker>
          ))}
      </MapContainer>
      {selectedClubData && (
        <div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center justify-between rounded-3xl shadow-xl bg-white transition ease-in-out delay-100 h-max p-8">
              <div className=" w-full h-52 relative mb-20">
                <img
                  src={selectedClubData.info.cover !== null ? selectedClubData.info.cover : cover_stock}
                  alt=""
                  className="absolute h-full w-full rounded-3xl"
                />
                <img
                  src={selectedClubData.info.cover !== null ? selectedClubData.info.cover : user_stock}
                  alt=""
                  className="absolute h-36 w-36 top-2/4 left-2/4 translate-y-1/4 -translate-x-1/2 rounded-full border-8 border-white"
                />
              </div>
              <div>
                {selectedClubData.name && (
                  <div className="flex flex-col my-2">
                    <h3 className="font-semibold" htmlFor="nameC">
                      Nome del club:
                    </h3>
                    <p
                      type="text"
                      name="nameC"
                      className="border-2 border-sec rounded"
                    >
                      {selectedClubData.name}
                    </p>
                  </div>
                )}
                {selectedClubData.number && (
                  <div className="flex flex-col mb-2">
                    <h3 className="font-semibold" htmlFor="numberC">
                      Numero di telefono:
                    </h3>
                    <p
                      type="text"
                      name="numberC"
                      className="border-2 border-sec rounded"
                    >
                      {selectedClubData.number}
                    </p>
                  </div>
                )}
                {selectedClubData.location && (
                  <div className="flex flex-col mb-2">
                    <h3 className="font-semibold" htmlFor="addressC">
                      Via dell'attività:
                    </h3>
                    <p
                      type="text"
                      name="addressC"
                      className="border-2 border-sec rounded w-full h-max"
                    >
                      {selectedClubData.location.address +
                        ", " +
                        selectedClubData.location.num +
                        ", " +
                        selectedClubData.location.city +
                        ", " +
                        selectedClubData.location.cap}
                    </p>
                  </div>
                )}
                {selectedClubData.email && (
                  <div className="flex flex-col mb-2">
                    <h3 className="font-semibold" htmlFor="emailC">
                      Email:
                    </h3>
                    <p
                      type="text"
                      name="emailC"
                      className="border-2 border-sec rounded"
                    >
                      {selectedClubData.email}
                    </p>
                  </div>
                )}
                {selectedClubData.info.sports && (
                  <div className="flex flex-col mb-2">
                    <h3 className="font-semibold" htmlFor="emailC">
                      Sports disponibili:
                    </h3>
                    <p
                      type="text"
                      name="emailC"
                      className="border-2 border-sec rounded"
                    >
                      {selectedClubData.info.sports.map((sport) => sport.name).join(", ")}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <textarea
                  className="border-2 border-sec rounded block w-full px-3 py-2 placeholder-center placeholder-gray-400 text-gray-700 disabled:bg-gray-100 disabled:cursor"
                  placeholder="Non ha descrizione."
                  disabled={true}
                ></textarea>
              </div>
              <div>
                <Link to="/services/events" className="flex flex-row justify-center items-center mt-2 hover:shadow-black bg-c_button rounded-full px-5 h-8 h-max w-max font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">Eventi del campo</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
