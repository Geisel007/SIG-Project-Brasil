// React
import React from 'react'
// Leaflet
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
// Components 
import View from '../src/components/Wrappers/View/View'
import Layout from '../src/layouts/Layout'
// Data 
import GeoJson from '../grassData/results/GeoJson/BRA_adm1.json'
import 'leaflet/dist/leaflet.css'

/**
App component that renders the React Router, is the root component of the application,
@returns {JS.Element} The JS code that represents the component.
*/
const App = () => {

  return (
      
      <Layout />  
    
  )
}

export default App
