// React
import React from 'react'
// Components
import View from '../Wrappers/View/View'
// Constants
import { Constants } from '../../constants/Constants'

// Styles
import './InfoCity.styles.css'

/**
InfoCity component that renders the React Router, is the root component of the application,
@returns {JS.Element} The JS code that represents the component.
*/
const InfoCity = ({
  selectedPlaceIndex 
}) => {

  return (
    <View 
      className={'info-city-container'}
    >
      {Constants.infoBestCities[selectedPlaceIndex]}
    </View>
  )
}

export default InfoCity
