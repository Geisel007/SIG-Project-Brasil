// React
import React from 'react'
// Leaflet
import { MapContainer, TileLayer, GeoJSON, Marker, CircleMarker } from 'react-leaflet'
// Styles
import 'leaflet/dist/leaflet.css'
// Data
import DataFiltered from '../../../grassData/filtered_data.json'

/**
Map component that renders the React Router, is the root component of the application,
@returns {JS.Element} The JS code that represents the component.
*/
const Map = ({
  latitude,
  longitude,
  zoom,
  geoJson
}) => {

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geoJson} />
      {
        DataFiltered.map((point, index) => {
          return (
            point.pass_filter && (
              (
                <CircleMarker 
                  key={index}
                  center={[point.lat, point.lng]} 
                  color={'blue'} 
                  radius={1} 
                /> 
              )
            )
          )
        })
      }      
    </MapContainer> 
  )
}

export default Map
