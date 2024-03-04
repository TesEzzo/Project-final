import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map = () => {
  const position = [41.90382101620244, 12.499597185654247];
  const positions = [
    [41.90216165776404, 12.493159723961785],
    [45.46398641171503, 9.193249396744442],
    [38.11508510801652, 13.362153460312172],
  ];
  const infos = [
    ["Roma", "https://www.asroma.com/it", "Forza Daje Roma", "Francesco"],
    ["Milano", "https://store.inter.it", "Forza Inter", "Tommaso"],
    ["Palermo", "https://www.palermofc.com/it/", "Forza Palermo", "Tizio"],
  ];
  const zoomLevel = 13;

  return (
    <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((p, index) => (
        <Marker position={p} key={index}>
          <Popup>
            <div>
              <h2>{infos[index][0]}</h2>
              <p>{infos[index][2]}</p>
              <button>
                <a href={infos[index][1]}>Sito</a>
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
