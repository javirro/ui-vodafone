import { MapContainer, TileLayer } from 'react-leaflet'
import CustomMarker from '../CustomMarker/CustomMarker'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

const Map = () => {
  const mapCenterMadrid: LatLngExpression = [40.31, -3.48] as LatLngExpression
  return (
    <MapContainer className="map" center={mapCenterMadrid} zoom={2}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> {/* This is the OpenStreetMap tile layer */}
      <CustomMarker lat={40.31} lon={-3} name={'Madrid'} />
    </MapContainer>
  )
}

export default Map
