import React from 'react'
import Fmarker from './TempMarker'

const TempElm = ({data}) => {
  return (
    <div>
       {
        data.map((elm)=>{
            return <Fmarker coords={[elm.latitude,elm.longitude]} tooltipInf={elm.weather} popupInf={elm.label} imgUrl={elm['weather-image-url']}/>
        })
       }
    </div>
  )
}

export default TempElm
