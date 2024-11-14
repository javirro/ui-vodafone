import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { images } from '../../../images/general'
interface CustomMarkerProps {
  lat: number
  lon: number
  name: string
}
const CustomMarker = ({ lat, lon, name }: CustomMarkerProps) => {
  const customIcon = new L.Icon({
    iconUrl: images.pointer,
    iconSize: [25, 41],
  })
  return (
    <Marker position={[lat, lon]} icon={customIcon}>
      <Popup> {name} </Popup>

    </Marker>
  )
}

export default CustomMarker
