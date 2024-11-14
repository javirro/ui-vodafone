import vodafoneLogo from '../../images/vodafone-logo.webp'
import './Navbar.css'
const Navbar = () => {
  return <nav>
    <div className='content'>
      <div className='upper'>

      </div>
      <div className='lower'>
        <img src={vodafoneLogo} alt='Vodafone logo' />
      </div>
    </div>
  </nav>
}

export default Navbar
