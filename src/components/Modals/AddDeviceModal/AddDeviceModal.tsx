import { useState } from 'react'
import BaseModal from '../BaseModal/BaseModal'
import { AddDeviceForm } from '../../../types/types'
import TextInputBox from './TextInputBox/TextInputBox'
import { addDevice } from '../../../api/addDevice'
import useErrorLoading from '../../../hooks/useErrorLoading'
import Spinner from '../../Spinner/Spinner'

import './AddDeviceModal.css'

interface AddDeviceModalProps {
  closeModal: () => void
  refreshDevices: () => void
}

const AddDeviceModalContent = ({ refreshDevices, closeModal }: AddDeviceModalProps) => {
  const { error, setError, loading, setLoading } = useErrorLoading(5000)
  const [data, setData] = useState<AddDeviceForm>({
    name: '',
    phone: '',
    lastConnection: new Date(),
    lon: 0,
    lat: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      await addDevice(data)
      refreshDevices()
    } catch (error) {
      console.error('Error adding device', error)
      setError(true)
    } finally {
      if(!error) closeModal()
      setLoading(false)
    }
  }

  return (
    <div className="add-device-modal">
      <form onSubmit={handleOnSubmit}>
        <TextInputBox label="Name" name="name" type="text" placeholder="Enter device name" value={data.name} onChange={handleChange} />
        <TextInputBox label="Phone number" name="phone" type="text" placeholder="Enter phone number" value={data.phone} onChange={handleChange} />
        <TextInputBox
          label="Last connection"
          name="lastConnection"
          type="date"
          placeholder="Select last connection"
          value={data.lastConnection.toString()}
          onChange={handleChange}
        />
        <TextInputBox
          label="Latitude"
          name="lat"
          type="number"
          placeholder="Enter latitude"
          value={data.lat.toString()}
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
          value={data.lon.toString()}
          onChange={handleChange}
          max={180}
          min={-180}
          step={0.0001}
        />

        <button type="submit" disabled={loading}>
          Add Device
        </button>
      </form>
      {error && <p className="error-message">An error occurred while adding the device</p>}
      {loading && <Spinner size={'small'} />}
    </div>
  )
}

const AddDeviceModal = ({ closeModal, refreshDevices }: AddDeviceModalProps) => {
  return (
    <BaseModal title="Add Device" closeModal={closeModal}>
      <AddDeviceModalContent refreshDevices={refreshDevices} closeModal={closeModal}/>
    </BaseModal>
  )
}
export default AddDeviceModal
