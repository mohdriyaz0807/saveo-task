import React from 'react';
import mapboxgl from 'mapbox-gl';


const Mapview = ({lng,lat,zoom}) => {
  
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className="map-container" id='maps'/>
    </div>
  );
};

export default Mapview