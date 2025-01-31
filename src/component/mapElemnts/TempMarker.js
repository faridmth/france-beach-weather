import React from 'react'
import {Popup,Marker,Tooltip } from 'react-leaflet'
import {Icon} from 'leaflet'
const Fmarker = ({coords,tooltipInf,popupInf,imgUrl}) => {
    let icon = new Icon({
        iconUrl : `https://www.meteocity.com${imgUrl}`,
        iconSize : [36,36],
        iconAnchor : [18,30], 
        className: 'map-icon',
        popupAnchor: [0, -30] ,
    })
  return (
    <Marker
    position={coords}
    icon={icon}
    eventHandlers={{
        mouseover: (e) => {
        e.target.openPopup()
        },
        click: (e) => {
            e.target.openPopup()    
            },
        mouseout: (e) => {
            e.target.closePopup()
        },
    }}
>
    <Tooltip className="tooltip" offset={[0,-17]} direction='top' permanent={true} opacity={1}>{tooltipInf}</Tooltip>
    <Popup autoPan={false} offset={[0,30]}>{popupInf}</Popup>
</Marker>
  )
}

export default Fmarker
