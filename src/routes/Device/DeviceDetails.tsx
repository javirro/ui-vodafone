import { useParams } from 'react-router-dom'
import { useGetDevice } from '../../hooks/useGetData'
import Spinner from '../../components/Spinner/Spinner'

import './DeviceDetails.css'

const DeviceDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { device, isLoading } = useGetDevice(Number(id))
  return (
    <section className="page">
      {isLoading && <Spinner size="big" />}
      {device && !isLoading && (
        <div className="device-details">
          <h2>{device.name}</h2>
          <p>Device ID: {device.id}</p>
          <p>Phone number: {device.phone}</p>
          <p>Last connection date: {device.lastConnection}</p>
          <p>Latitude: {device.lat}</p>
          <p>Longitude: {device.lon}</p>
        </div>
      )}
    </section>
  )
}

export default DeviceDetails
