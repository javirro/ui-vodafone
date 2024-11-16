import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { images } from '../../../images/general'
import { Device } from '../../../types/types'
import { useNavigate } from 'react-router-dom'

import './CustomMarker.css'
interface CustomMarkerProps {
  device: Device
}
const CustomMarker = ({ device }: CustomMarkerProps) => {
  const navigate = useNavigate()
  const { lat, lon, name } = device
  const customIcon = new L.Icon({
    iconUrl: images.pointer,
    iconSize: [25, 25],
  })

  const handleNavigate = () => {
    navigate(`/devices/${device.id}`)
  }
  return (
    <Marker position={[lat, lon]} icon={customIcon}>
      <Popup>
        <div className="popup">
          <strong>{name}</strong>
          <button onClick={() => handleNavigate()}>View details</button>
        </div>
      </Popup>
    </Marker>
  )
}

export default CustomMarker
