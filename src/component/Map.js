import React from 'react'
import { MapContainer, TileLayer,GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css'
import * as franceDepartements from './GeoJsonData/departements.json'
import * as countries from './GeoJsonData/countries.json'
const Map = () => {
    const countryStyles={
        fillColor:'#c8a828',
        fillOpacity:1,
        color:'white',
        weight:1
      }
      const regionsStyles={
        fillColor:'#c8a828',
        fillOpacity:1,
        color:'white',
        weight:1,
        zIndex:2000
      }
  return (
      <MapContainer center={[46.7, 2.3]} zoom={5.7} scrollWheelZoom={false} zoomControl={false} zoomSnap={0.25} >
        <GeoJSON data={countries} style={countryStyles}/>
        <GeoJSON data={franceDepartements} style={regionsStyles}/>

    </MapContainer>

  )
}

export default Map
