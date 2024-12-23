import './BaseModal.css'

interface BaseModalProps {
  closeModal: () => void
  title: string
  children: React.ReactNode
}
const BaseModal = ({ closeModal, title, children }: BaseModalProps) => {
  return (
    <div id="base-modal">
      <div className="content">
        <header className='header-modal'>
          <h2>{title}</h2>
          <button className="close" onClick={closeModal}>
            Close
          </button>
        </header>
        {children}
      </div>
    </div>
  )
}

export default BaseModal
