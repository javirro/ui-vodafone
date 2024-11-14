import { useState } from 'react'
import PageSelector from '../../components/Devices/PageSelector/PageSelector'
import { images } from '../../images/general'
import './Devices.css'

const Devices = () => {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value))
  }

  return (
    <section className="page">
      <div className="devices">
        <div className="options">
          <button className="actions">
            <img src={images.engine} alt="engine" />
            <span>Actions</span>
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
      </div>
    </section>
  )
}

export default Devices
