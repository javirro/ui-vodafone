import Spinner from '../../Spinner/Spinner'
import FormAddDevice from '../AddDeviceModal/FormAddDevice'
import BaseModal from '../BaseModal/BaseModal'
import { useGetDevice } from '../../../hooks/useGetData'
import useErrorLoading from '../../../hooks/useErrorLoading'
import { AddDeviceForm, Device } from '../../../types/types'
import { useState } from 'react'
import { updateDevice } from '../../../api/updateDevice'

interface EditDeviceModalProps {
  closeModal: () => void
  refreshDevices: () => void
  deviceId: number
}

const EditForm = ({ device, closeModal, refreshDevices }: { device: Device; closeModal: () => void; refreshDevices: () => void }) => {
  const { error, setError, loading, setLoading } = useErrorLoading(5000)
  const [data, setData] = useState<AddDeviceForm>({
    name: device?.name as string,
    phone: device?.phone as string,
    lastConnection: new Date(device?.lastConnection as number),
    lon: device?.lon as number,
    lat: device?.lat as number,
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!device) return
    try {
      setLoading(true)
      await updateDevice(device?.id, data)
      refreshDevices()
    } catch (error) {
      console.error('Error editing device', error)
      setError(true)
    } finally {
      if (!error) closeModal()
      setLoading(false)
    }
  }
  return (
    <div className="add-device-modal">
      <FormAddDevice data={data} handleChange={handleChange} handleOnSubmit={handleOnSubmit} loading={loading} />
      {error && <p className="error-message">An error occurred while editing device information</p>}
      {loading && <Spinner size={'small'} />}
    </div>
  )
}

const EditDeviceModalBody = ({ closeModal, deviceId, refreshDevices }: EditDeviceModalProps) => {
  const { device, isLoading } = useGetDevice(Number(deviceId))
  if (isLoading) {
    return (
      <div className="add-device-modal">
        <Spinner size="big" />
      </div>
    )
  }
  if (device && !isLoading) {
    return <EditForm device={device} closeModal={closeModal} refreshDevices={refreshDevices} />
  } else {
    return <p>Device not found</p>
  }
}

const EditDeviceModal = ({ closeModal, deviceId, refreshDevices }: EditDeviceModalProps) => {
  return (
    <BaseModal title="Edit Device" closeModal={closeModal}>
      <EditDeviceModalBody refreshDevices={refreshDevices} closeModal={closeModal} deviceId={deviceId} />
    </BaseModal>
  )
}

export default EditDeviceModal
