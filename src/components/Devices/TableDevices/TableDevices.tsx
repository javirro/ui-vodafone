import { useGetDevices } from '../../../hooks/useGetData'
import { images } from '../../../images/general'
import Spinner from '../../Spinner/Spinner'

import './TableDevices.css'

interface TableDevicesProps {
  setDeleteDeviceModal: (s: number) => void
  setEditDeviceModal: (s: number) => void
}

interface CommonColumnProps extends TableDevicesProps {
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
      <img src={images.editIcon} alt="edit" onClick={handleEdit}/>
      <img src={images.deleteIcon} alt="delete" onClick={handleDelete} />
    </td>
  )
}

const TableDevices = ({ setDeleteDeviceModal, setEditDeviceModal }: TableDevicesProps) => {
  const { devices, isLoading } = useGetDevices()
  if (isLoading) {
    return (
      <div className="devices-loading">
        <Spinner size="big" />
      </div>
    )
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
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.phone}</td>
              <td>{device.lastConnection}</td>
              <td>{device.lon}</td>
              <td>{device.lat}</td>
              <CommonColumn setDeleteDeviceModal={setDeleteDeviceModal} id={device.id}  setEditDeviceModal={setEditDeviceModal}/>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  )
}

export default TableDevices
