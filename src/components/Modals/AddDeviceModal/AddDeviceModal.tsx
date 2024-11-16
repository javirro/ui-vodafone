import { useState } from 'react'
import BaseModal from '../BaseModal/BaseModal'
import { AddDeviceForm } from '../../../types/types'
import { addDevice } from '../../../api/addDevice'
import useErrorLoading from '../../../hooks/useErrorLoading'
import Spinner from '../../Spinner/Spinner'
import FormAddDevice from './FormAddDevice'

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
      <FormAddDevice data={data} handleChange={handleChange} handleOnSubmit={handleOnSubmit} loading={loading} />
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
