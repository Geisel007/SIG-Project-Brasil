// React
import React, { useEffect, useState } from 'react'
// Turf
import * as turf from "@turf/turf"
// Data
import DataFiltered from '../../../grassData/filtered_data.json'

/**
TopCities component that renders the React Router, is the root component of the application,
@returns {JS.Element} The JS code that represents the component.
*/
const TopCities = ({
  cities
}) => {

  const [points, setPoints] = useState()

  const generatePoints = () => {
    return DataFiltered.map((point) => {
      return {
        type: "Feature",
        properties: { pass_filter: point.pass_filter },
        geometry: {
          type: "Point",
          coordinates: [point.lng, point.lat], 
        },
      }
    })
  }

  const getBestCities = () => {
    const results = []

    points.forEach((point) => {
        cities.map((city) => {
          console.log('point: ', point.geometry.coordinates)
          console.log(city.geometry.coordinates[0])
          if(city.geometry.coordinates[0].includes(point.geometry.coordinates)){
            print('true')
          }
        })
    })

  }

  useEffect(() => {
    setPoints(generatePoints())
  }, [])

  useEffect(() => {
    if(points !== undefined) {
      //getBestCities()
    }
  }, [points])

  console.log('points', points)

  
  

  //const isPointInPolygon = turf.booleanPointInPolygon(punto, geojson)



  return (
    <ul>

    </ul>
  )
}

export default TopCities
