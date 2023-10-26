// React
import React from 'react'
// Leaflet
import { MapContainer, TileLayer, GeoJSON, useMapEvents , CircleMarker } from 'react-leaflet'
// Styles
import 'leaflet/dist/leaflet.css'
// Data
import DataFiltered from '../../../grassData/filtered_data.json'
import * as turf from "@turf/turf"

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

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;

    geoJson.features.map(city => {
      console.log(city)
    })

    console.log(e)


    alert(`Clicked at: ${lat}, ${lng}`);
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEventsHandler handleMapClick={handleMapClick} />
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

const MapEventsHandler = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

export default Map
