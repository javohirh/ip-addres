import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

function Map({ position }) {
  function ChangeMapView({ position }) {
    const map = useMap();
    useEffect(() => {
      map.flyTo(position, 13); // Fly to the new position
    }, [position, map]);

    return null;
  }
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ChangeMapView position={position} />
    </MapContainer>
  );
}

export default Map;
