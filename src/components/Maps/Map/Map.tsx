import { MapContainer, TileLayer } from 'react-leaflet'
import CustomMarker from '../CustomMarker/CustomMarker'
import { LatLngExpression } from 'leaflet'
import { useGetDevices } from '../../../hooks/useGetData'
import Spinner from '../../Spinner/Spinner'

import 'leaflet/dist/leaflet.css'
import './Map.css'


const Map = () => {
  const mapCenterMadrid: LatLngExpression = [40.31, -3.48] as LatLngExpression
  const { devices, isLoading } = useGetDevices()
  if (isLoading) {
    return <Spinner size='big' />
  }
  return (
    <MapContainer className="map" center={mapCenterMadrid} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> {/* This is the OpenStreetMap tile layer */}
      {devices?.map((d) => <CustomMarker device={d} key={d.id}/>)}
    </MapContainer>
  )
}

export default Map
