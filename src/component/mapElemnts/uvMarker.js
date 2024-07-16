import React from 'react';
import { Popup, Marker, Tooltip } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { getUvColor } from '../function';

const UvMarker = ({ coords, tooltipInf, popupInf }) => {
  let circleRadius = 10;


  const circle = new divIcon({
    className: 'leaflet-div-icon',
    html: `<div id="uv-square" style="width: ${2 * circleRadius}px; height: ${2 * circleRadius}px; background-color: ${getUvColor(tooltipInf)};">${Math.ceil(tooltipInf)}</div>`,
    iconSize: [2 * circleRadius, 2 * circleRadius],
    iconAnchor: [circleRadius, circleRadius],
  });

  return (
    <Marker position={coords} icon={circle} eventHandlers={{
      mouseover: (e) => {
        e.target.openPopup();
      },
      click: (e) => {
        e.target.openPopup();
      },
      mouseout: (e) => {
        e.target.closePopup();
      },
    }}>
      <Popup autoPan={false}>{popupInf}</Popup>
    </Marker>
  );
};

export default UvMarker;
