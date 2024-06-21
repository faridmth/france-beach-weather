import React from 'react'
import WindMarker from './WindMarker'
const WindElm = ({data}) => {
  return (
    <div>
      {
        data.map((elm)=>{
            return <WindMarker coords={[elm.latitude,elm.longitude]} tooltipInf={elm.wind} 
            popupInf={elm.label} imgUrl={elm['wind-image-url'] }imgRotaion={elm['wind-rotation']}/>
        })
       }
    </div>
  )
}

export default WindElm
