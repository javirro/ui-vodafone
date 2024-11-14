import { NavLink } from 'react-router-dom'
import vodafoneLogo from '../../images/vodafone-logo.webp'

import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="content">
        <div className="upper">
          <span>Enterprise</span>
        </div>
        <div className="lower">
          <div className="left">
            <img src={vodafoneLogo} alt="Vodafone logo" />
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/devices" className="link">Devices</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
