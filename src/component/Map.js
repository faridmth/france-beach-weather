import React, { useRef,useState,useEffect } from 'react'
import { MapContainer, TileLayer,GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css'
import * as franceDepartements from './GeoJsonData/departements.json'
import * as countries from './GeoJsonData/countries.json'
//map Elements
import TempElm from './mapElemnts/TempElm';
import SeaElm from './mapElemnts/SeaElm';
import WindElm from './mapElemnts/WindElm';
import UvElm from './mapElemnts/UvElm';

const Map = ({data,dtType,uvData}) => {
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

      // set zoom depending on window width 
      const mapRef = useRef(null);
      const [map, setMap] = useState(null);
      // ressponcive
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    useEffect(()=>{
      if(width<1100 && width>500){
        if(map){
          map.setZoom(5.5)
        }
      }else if(width<500){        
        if(map){
        map.setZoom(5)
        }
      }else{
        if(map){
          map.setZoom(5.7)
        }

      }
    },[width,map])
  return (
      <MapContainer 
        center={[47.3, 2.4]}
        zoom={5.7}
        scrollWheelZoom={false} 
        zoomControl={false} zoomSnap={0.25}
        ref={(mapInstance) => {
          if (mapInstance) {
            mapRef.current = mapInstance;
            setMap(mapInstance);
          }
        }}
        >
        <GeoJSON data={countries} style={countryStyles}/>
        <GeoJSON data={franceDepartements} style={regionsStyles}/>
        {dtType===0&&<TempElm data={data}/>}
        {dtType===1&&<SeaElm data={data}/>}
        {dtType===2&&<WindElm data={data}/>}
        {dtType===3&&<UvElm uvData={uvData}/>}
        
    </MapContainer>

  )
}

export default Map
