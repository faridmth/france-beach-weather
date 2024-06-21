import React from 'react'
import {Popup,Marker,Tooltip } from 'react-leaflet'
import {divIcon} from 'leaflet'
import styles from './sea.css'

const SeaMarker = ({coords,tooltipInf,popupInf}) => {
    let circleRadius = 14
    let circle = new divIcon({
        className: 'leaflet-div-icon',
        html: `<div style="display: flex; justify-content: center; align-items: center; width: 
        ${2 * circleRadius}px; height: ${2 * circleRadius}px; 
        border-radius: 50%; background-color: rgba(255, 0, 0, 0.5);
         color: white; font-size: 12px; font-weight:bold">${tooltipInf}</div>`,
        iconSize: [2 * circleRadius, 2 * circleRadius], // size of the DivIcon
        iconAnchor: [circleRadius, circleRadius], // anchor point of the DivIcon, should be half of iconSize
      })
  return (
<div>
{tooltipInf!==""&&<Marker
    position={coords}
    icon={circle}
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
    <Popup autoPan={false}>{popupInf}</Popup>
    </Marker>}
</div>
  )
}

export default SeaMarker
