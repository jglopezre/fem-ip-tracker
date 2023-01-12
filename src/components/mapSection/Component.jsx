import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export const MapSection = ({ mapData }) => {

  const { fetchedData, isLoading } = mapData;

  if(!isLoading) {
    return (
      <MapContainer center={[fetchedData.location.lat, fetchedData.location.lng]} zoom={13} scrollWheelZoom={false} style={{width: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[fetchedData.location.lat, fetchedData.location.lng]} />
      </MapContainer>
    )
  } else {
    return (
      <div style={{ width: '100%' }}>
        <h1>cargando mapa...</h1>
      </div>
    )
  }

  
}
