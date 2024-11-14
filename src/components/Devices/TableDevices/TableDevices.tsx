import { images } from '../../../images/general'
import './TableDevices.css'

const CommonColumn = () => {
  return(
    <td>
      <img src={images.editIcon} alt="edit" />
      <img src={images.deleteIcon} alt="delete" />
    </td>
  )
}
const TableDevices = () => {
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Device 1</td>
          <td>123456789</td>
          <td>2021-09-01</td>
          <td>1.234</td>
          <td>5.678</td>
          <CommonColumn />
        </tr>
        <tr>
          <td>2</td>
          <td>Device 2</td>
          <td>987654321</td>
          <td>2021-09-02</td>
          <td>5.678</td>
          <td>1.234</td>
          <CommonColumn />
        </tr>
        <tr>
          <td>3</td>
          <td>Device 3</td>
          <td>456789123</td>
          <td>2021-09-03</td>
          <td>9.876</td>
          <td>3.214</td>
          <CommonColumn />
        </tr>
        <tr>
          <td>3</td>
          <td>Device 3</td>
          <td>456789123</td>
          <td>2021-09-03</td>
          <td>9.876</td>
          <td>3.214</td>
          <CommonColumn />
        </tr>
      </tbody>
    </table>
  )
}

export default TableDevices
