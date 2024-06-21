import React from 'react'
import SeaMarker from './SeaMarker'
const SeaElm = ({data}) => {
  return (
    <div>
    {
     data.map((elm)=>{
         return <SeaMarker coords={[elm.latitude,elm.longitude]} tooltipInf={elm.sea} popupInf={elm.label}/>
     })
    }
 </div>
  )
}

export default SeaElm
