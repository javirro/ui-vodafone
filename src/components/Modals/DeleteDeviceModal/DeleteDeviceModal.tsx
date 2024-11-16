import { deleteDevice } from '../../../api/deleteDevice'
import BaseModal from '../BaseModal/BaseModal'
import './DeleteDeviceModal.css'

interface DeleteDeviceModalProps {
  deviceId: number
  closeModal: () => void
}

const DeleteDeviceModalContent = ({ deviceId, closeModal }: DeleteDeviceModalProps) => {
  const handleDelete = async () => {
    try {
      await deleteDevice(deviceId)
      closeModal()
    } catch (error) {
      console.error('Error deleting device', error)
    }
  }

  return (
    <div className="delete-device-modal-content">
      <p>Are you sure you want to delete the device?</p>
      <div className="buttons">
        <button onClick={closeModal}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

const DeleteDeviceModal = ({ deviceId, closeModal }: DeleteDeviceModalProps) => {
  return (
    <BaseModal title="Delete device" closeModal={closeModal}>
      <DeleteDeviceModalContent deviceId={deviceId} closeModal={closeModal} />
    </BaseModal>
  )
}

export default DeleteDeviceModal
