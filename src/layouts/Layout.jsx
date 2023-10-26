// React
import React from 'react'
// Components
import View from '../components/Wrappers/View/View'
import Map from '../components/Map/Map'
import Label from '../components/Wrappers/Label/Label'
import TopCities from '../components/TopCities/TopCities'
import Viewer from '../components/Viewer/Viewer'
// Data
import GeoJSON from '../../grassData/results/GeoJson/BRA_adm0.json'
// Styles
import './Layout.styles.css'

const Layout = () => {
  
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
          top cities
          <TopCities 
            cities={GeoJSON.features}
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
          city info
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
