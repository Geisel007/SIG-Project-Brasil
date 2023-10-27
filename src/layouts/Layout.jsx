// React
import React, { useState } from 'react'
// Components
import View from '../components/Wrappers/View/View'
import Map from '../components/Map/Map'
import TopCities from '../components/TopCities/TopCities'
import Viewer from '../components/Viewer/Viewer'
import InfoCity from '../components/InfoCity/InfoCity'
// Constatnts
import { Constants } from '../constants/Constants'
// Data
import GeoJSON from '../../grassData/results/GeoJson/BRA_adm3.json'
// Styles
import './Layout.styles.css'

const Layout = () => {

  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState(0)
  
  return (
    <View
      className={'layout'}
    >
      <View
        className={'container'}
      >
        <View
          className={'sub-container'}
        >
          <h2>MEJORES CLIMAS DE BRASIL</h2>
          <TopCities
            selectedPlaceIndex={selectedPlaceIndex}
            setSelectedPlaceIndex={setSelectedPlaceIndex}
          />
        </View>
        <View
          className={'sub-container'}
        >
          <Map
            latitude={-15}
            longitude={-55}
            zoom={4}
            geoJson={GeoJSON}
          />
        </View>
      </View>
      <View
        className={'container'}
      >
        <View
          className={'sub-container'}
        >
          <h2>{Constants.bestCities[selectedPlaceIndex]}</h2>
          <InfoCity
            selectedPlaceIndex={selectedPlaceIndex}
          />
        </View>
        <View
          className={'sub-container'}
        >
          <Viewer/>
        </View>
      </View>
    </View>
  )
}

export default Layout
