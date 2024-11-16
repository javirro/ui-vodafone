import { useNavigate } from 'react-router-dom'
import { useGetPaginatedDevices } from '../../../hooks/useGetData'
import { images } from '../../../images/general'
import Spinner from '../../Spinner/Spinner'

import './TableDevices.css'

interface BaseTableProps {
  setDeleteDeviceModal: (s: number) => void
  setEditDeviceModal: (s: number) => void
}
interface TableDevicesProps extends BaseTableProps {
  page: number
  limit: number
}

interface CommonColumnProps extends BaseTableProps {
  id: number
}

const CommonColumn = ({ setDeleteDeviceModal, setEditDeviceModal, id }: CommonColumnProps) => {
  const handleDelete = () => {
    setDeleteDeviceModal(id)
  }
  const handleEdit = () => {
    setEditDeviceModal(id)
  }
  return (
    <td>
      <img src={images.editIcon} alt="edit" onClick={handleEdit} />
      <img src={images.deleteIcon} alt="delete" onClick={handleDelete} />
    </td>
  )
}

const TableDevices = ({ setDeleteDeviceModal, setEditDeviceModal, page, limit }: TableDevicesProps) => {
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
  return (
    <table id="table-devices">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Last connection</th>
          <th>Longitude</th>
          <th>Latitude</th>
          <th>Actions</th>
        </tr>
      </thead>
      {!isLoading && (
        <tbody>
          {devices?.map((device) => (
            <tr key={device.id}>
              <td onClick={() => handleNavigate(device.id)}>{device.id}</td>
              <td onClick={() => handleNavigate(device.id)}>{device.name}</td>
              <td onClick={() => handleNavigate(device.id)}>{device.phone}</td>
              <td onClick={() => handleNavigate(device.id)}>{device.lastConnection}</td>
              <td onClick={() => handleNavigate(device.id)}>{device.lon}</td>
              <td onClick={() => handleNavigate(device.id)}>{device.lat}</td>
              <CommonColumn setDeleteDeviceModal={setDeleteDeviceModal} id={device.id} setEditDeviceModal={setEditDeviceModal} />
            </tr>
          ))}
        </tbody>
      )}
    </table>
  )
}

export default TableDevices
