import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markericon from "../images/icon-location.svg";
const customIcon = new L.Icon({
  iconUrl: markericon, // put marker.png in /public folder
  iconSize: [35, 48],
  iconAnchor: [13, 58],
});
function Map({ position }) {
  function ChangeMapView({ position }) {
    const map = useMap();
    useEffect(() => {
      map.flyTo(position, 13);
    }, [position, map]);

    return null;
  }
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ChangeMapView position={position} />
    </MapContainer>
  );
}

export default Map;
