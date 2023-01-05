import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export const MapSection = ({coordinate = [-38.005269, -57.541442]}) => {

  return (
    <MapContainer center={[...coordinate]} zoom={13} scrollWheelZoom={false} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[...coordinate]} />
    </MapContainer>
  )
}
