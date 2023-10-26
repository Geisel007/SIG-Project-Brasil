// React
import React from 'react'
// Components
import View from '../components/Wrappers/View/View'
import Map from '../components/Map/Map'
import Label from '../components/Wrappers/Label/Label'
import TopCities from '../components/TopCities/TopCities'
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
          <Label
            className={'subtitle1'}
          > 
            B R A S I L 
          </Label>
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
          city images
        </View>
      </View>
    </View>
  )
}

export default Layout
