import { useState } from 'react'
import PageSelector from '../../components/Devices/PageSelector/PageSelector'
import { images } from '../../images/general'
import TableDevices from '../../components/Devices/TableDevices/TableDevices'
import AddDeviceModal from '../../components/Modals/AddDeviceModal/AddDeviceModal'
import DeleteDeviceModal from '../../components/Modals/DeleteDeviceModal/DeleteDeviceModal'

import './Devices.css'

const Devices = () => {
  const [addDeviceModal, setAddDeviceModal] = useState(false)
  const [deleteDeviceModal, setDeleteDeviceModal] = useState<number>(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [refreshDeviceTable, setRefreshDeviceTable] = useState(0)
  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value))
  }

  const refreshDevices = () => {
    setRefreshDeviceTable((prev) => prev + 1)
  }

  return (
    <section className="page">
      {addDeviceModal && <AddDeviceModal closeModal={() => setAddDeviceModal(false)} refreshDevices={refreshDevices} />}
      {deleteDeviceModal > 0 && (
        <DeleteDeviceModal closeModal={() => setDeleteDeviceModal(0)} deviceId={deleteDeviceModal} refreshDevices={refreshDevices} />
      )}
      <div className="devices">
        <div className="options">
          <button className="actions" onClick={() => setAddDeviceModal(true)}>
            <img src={images.engine} alt="engine" />
            <span>Add Device</span>
          </button>
          <section className="right">
            <span>Showing</span>
            <select onChange={handleLimit} value={limit}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <span>rows</span>
            <PageSelector page={page} setPage={setPage} />
          </section>
        </div>
        <TableDevices setDeleteDeviceModal={setDeleteDeviceModal} key={refreshDeviceTable} />
      </div>
    </section>
  )
}

export default Devices
