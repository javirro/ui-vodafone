import BaseModal from '../BaseModal/BaseModal'
import './AddDeviceModal.css'

interface AddDeviceModalProps {
  closeModal: () => void
}

const AddDeviceModalContent = () => {
  return <div className="add-device-modal">
    <form>

    </form>
  </div>
}

const AddDeviceModal = ({ closeModal }: AddDeviceModalProps) => {
  return (
    <BaseModal title="Add Device" closeModal={closeModal}>
      <AddDeviceModalContent />
    </BaseModal>
  )
}
export default AddDeviceModal
