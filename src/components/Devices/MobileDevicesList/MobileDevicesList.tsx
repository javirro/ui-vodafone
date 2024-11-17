import { useNavigate } from 'react-router-dom'
import { useGetPaginatedDevices } from '../../../hooks/useGetData'
import { TableDevicesProps } from '../TableDevices/TableDevices'
import Spinner from '../../Spinner/Spinner'
import { images } from '../../../images/general'

import './MobileDevicesList.css'

const MobileDevicesList = ({ setDeleteDeviceModal, setEditDeviceModal, page, limit }: TableDevicesProps) => {
  const { devices, isLoading } = useGetPaginatedDevices(page, limit)
  const navigate = useNavigate()
  if (isLoading) {
    return (
      <div className="devices-loading">
        <Spinner size="big" />
      </div>
    )
  }
  const handleNavigate = (id: number) => {
    navigate(`/devices/${id}`)
  }

  const handleDelete = (id: number) => {
    setDeleteDeviceModal(id)
  }
  const handleEdit = (id: number) => {
    setEditDeviceModal(id)
  }

  return (
    <div className="mobile-devices-list">
      {devices?.map((device) => (
        <div key={device.id} className="item-box">
          <div className="row" onClick={() => handleNavigate(device.id)}>
            <span>Id</span>
            <span>{device.id}</span>
          </div>
          <div className="row" onClick={() => handleNavigate(device.id)}>
            <span>Name</span>
            <span>{device.name}</span>
          </div>
          <div className="row" onClick={() => handleNavigate(device.id)}>
            <span>Phone</span>
            <span>{device.phone}</span>
          </div>
          <div className="row" onClick={() => handleNavigate(device.id)}>
            <span>Last connection</span>
            <span>{device.lastConnection}</span>
          </div>
          <div className="row" onClick={() => handleNavigate(device.id)}>
            <span>Latitude</span>
            <span>{device.lat}</span>
          </div>
          <div className="row" onClick={() => handleNavigate(device.id)}>
            <span>Longitude</span>
            <span>{device.lon}</span>
          </div>
          <div className="row">
            <img src={images.editIcon} alt="edit" onClick={() => handleEdit(device.id)} />
            <img src={images.deleteIcon} alt="delete" onClick={() => handleDelete(device.id)} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MobileDevicesList
