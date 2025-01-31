import React from 'react'
import UvMarker from './uvMarker'
const UvElm = ({uvData}) => {
    
  return (
    <div>
        {
        uvData!==undefined&&uvData.map((elm)=>{
            return <UvMarker coords={[elm.latitude,elm.longitude]} tooltipInf={elm.uvi} popupInf={elm.label} imgUrl={elm['weather-image-url']}/>
        })
       }
    </div>
  )
}

export default UvElm
