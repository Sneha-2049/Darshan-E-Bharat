import React from 'react'
import Map from '../Map/Map'
import Homecards from './Homecards'
import Websitedescription from './Websitedescription'
import './Homecard.css'

function Home() {
  return (
    <div>
      <div className='home-page'>
        <Websitedescription />
        <Map />
      </div>
      <Homecards />
    </div>
  )
}

export default Home