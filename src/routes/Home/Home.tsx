import Map from '../../components/Maps/Map/Map'
import MetaTags from '../../components/MetaTags/MetaTags'

import './Home.css'

const Home = () => {
  return (
    <section className="page">
      <MetaTags title="Vodafone Iot: Devices Map"/>
      <header className="home-header">
        <h1>Devices location</h1>
      </header>
      <section className="map-box">
        <Map />
      </section>
    </section>
  )
}

export default Home
