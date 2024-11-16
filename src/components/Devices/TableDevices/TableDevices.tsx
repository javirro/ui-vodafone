import { useGetDevices } from '../../../hooks/useGetData'
import { images } from '../../../images/general'
import Spinner from '../../Spinner/Spinner'

import './TableDevices.css'

const CommonColumn = ({ setDeleteDeviceModal, id }: { setDeleteDeviceModal: (s: number) => void; id: number }) => {
  const handleDelete = () => {
    setDeleteDeviceModal(id)
  }
  return (
    <td>
      <img src={images.editIcon} alt="edit" />
      <img src={images.deleteIcon} alt="delete" onClick={handleDelete} />
    </td>
  )
}

const TableDevices = ({ setDeleteDeviceModal }: { setDeleteDeviceModal: (s: number) => void }) => {
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
              <CommonColumn setDeleteDeviceModal={setDeleteDeviceModal} id={device.id} />
            </tr>
          ))}
        </tbody>
      )}
    </table>
  )
}

export default TableDevices
