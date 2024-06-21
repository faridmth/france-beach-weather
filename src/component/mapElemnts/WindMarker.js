import React from 'react'
import {Popup,Marker,Tooltip } from 'react-leaflet'
import {divIcon} from 'leaflet'
const WindMarker = ({coords,tooltipInf,popupInf,imgUrl,imgRotaion}) => {
    let circleRadius = 14
    let icon = new divIcon({
        className: 'wind-img',
        html: `<img src='https://www.meteocity.com${imgUrl}' style='transform: rotate(${imgRotaion}deg);width:20px'/>`,
        iconSize: [2 * circleRadius, 2 * circleRadius], // size of the DivIcon
        iconAnchor: [circleRadius, circleRadius], // anchor point of the DivIcon, should be half of iconSize
    
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
    <Tooltip offset={[0,-3]} direction='top' permanent={true} className='tooltip' opacity={1}>{tooltipInf}</Tooltip>
    <Popup autoPan={false}>{popupInf}</Popup>
</Marker>
  )
}

export default WindMarker
