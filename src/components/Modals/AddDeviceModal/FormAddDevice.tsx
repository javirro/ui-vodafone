import { AddDeviceForm } from '../../../types/types'
import TextInputBox from './TextInputBox/TextInputBox'

interface FormAddDeviceProps {
  data: AddDeviceForm
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
}
const FormAddDevice = ({ data, handleChange, handleOnSubmit, loading }: FormAddDeviceProps) => {
  return (
    <form onSubmit={handleOnSubmit} className='form-add'>
      <TextInputBox label="Name" name="name" type="text" placeholder="Enter device name" value={data.name} onChange={handleChange} />
      <TextInputBox
        label="Phone number"
        name="phone"
        type="text"
        placeholder="Enter phone number"
        value={data.phone}
        onChange={handleChange}
      />
      <TextInputBox
        label="Last connection"
        name="lastConnection"
        type="date"
        placeholder="Select last connection"
        value={data?.lastConnection?.toString()}
        onChange={handleChange}
      />
      <TextInputBox
        label="Latitude"
        name="lat"
        type="number"
        placeholder="Enter latitude"
        value={data?.lat?.toString()}
        onChange={handleChange}
        max={90}
        min={-90}
        step={0.0001}
      />
      <TextInputBox
        label="Longitude"
        name="lon"
        type="number"
        placeholder="Enter longitude"
        value={data?.lon?.toString()}
        onChange={handleChange}
        max={180}
        min={-180}
        step={0.0001}
      />

      <button type="submit" disabled={loading}>
        Add Device
      </button>
    </form>
  )
}

export default FormAddDevice
