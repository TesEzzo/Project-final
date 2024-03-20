import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Constants from "../constants";

export const Map = () => {
  const [locations, setLocations] = useState([]);
  const [nameClubs, setnameClubs] = useState([]);
  const [sportsList, setsportsList] = useState([]);
  const position = [41.90382101620244, 12.499597185654247];

  const zoomLevel = 13;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: `${Constants.API_HOST}/api/clubs`,
          method: "GET",
        });
        const coordinatesArray = response.data.docs.map((club) => {
          return [club.location.coordinates.lat, club.location.coordinates.lon];
        });
        setLocations(coordinatesArray);
        const name = response.data.docs.map((club) => {
          return club.name;
        });
        setnameClubs(name);
        const infos = response.data.docs.map((club) => {
          return club.info.sports;
        });
        setsportsList(infos);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchData();
    console.log(sportsList);
  }, []);
  return (
    <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.length > 0 &&
        locations.map((p, index) => (
          <Marker position={p} key={index}>
            <Popup>
              <div>
                <h2>{nameClubs[index]}</h2>
                <p>{sportsList[index].join(" ")}</p>
                <button>Profilo</button>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};
