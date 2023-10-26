// React
import React, { useState } from 'react'
// Data
import { Constants } from '../../constants/Constants'

// Styles
import './TopCities.styles.css'

/**
TopCities component that renders the React Router, is the root component of the application,
@returns {JS.Element} The JS code that represents the component.
*/
const TopCities = ({
  selectedPlaceIndex, 
  setSelectedPlaceIndex
}) => {

  const handlePlaceClick = (index) => {
    setSelectedPlaceIndex(index)
  }

  return (
    <div className="place-list-container">
      <div className="place-list">
        {Constants.bestCities.map((place, index) => (
          <div
            key={index}
            onClick={() => handlePlaceClick(index)}
            className={`place-item ${selectedPlaceIndex === index ? 'selected' : ''}`}
          >
            {place}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCities
