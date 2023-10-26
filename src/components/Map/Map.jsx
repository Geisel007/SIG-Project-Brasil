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

    const point = turf.point([lng, lat]);

    geoJson.features.forEach(city => {
      const polygon = turf.polygon(city.geometry.coordinates);
      const isInside = turf.booleanPointInPolygon(point, polygon);
      if (isInside) {

        const NAME_0 = city.properties.NAME_0;
        const NAME_1 = city.properties.NAME_1;
        const NAME_2 = city.properties.NAME_2;
        const NAME_3 = city.properties.NAME_3;

        const data = [NAME_0, NAME_1, NAME_2, NAME_3].join(', ')
        alert(`Clicked at: ${lat}, ${lng}.\nCity ${data}`);
        return;
      }
    });
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
