import './Spinner.css'

const Spinner = ({ size }: { size: 'big' | 'small' }) => {
  return <div className={`spinner ${size}`} />
}

export default Spinner
