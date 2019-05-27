import React from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css'; // This needs to be included for the map to actually work when compiled
import L from 'leaflet';
import { Map as BaseMap, TileLayer, ZoomControl } from 'react-leaflet';

const Map = ({ children, className, center = [0, 0], zoom = 2 }) => {
  const mapClassName = `map ${className || ''}`;

  if (typeof window === 'undefined') {
    return (
      <div className={mapClassName}>
        <p className="map-loading">Loading map...</p>
      </div>
    );
  }

  // To get around an issue with the default icon not being set up right between using React
  // and importing the leaflet library, we need to reset the image imports
  // See https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });

  const mapSettings = {
    className: 'map-base',
    center,
    zoom,
    zoomControl: false
  };

  const tileSettings = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    continuousWorld: true,
    noWrap: true
  };

  return (
    <div className={mapClassName}>
      <BaseMap {...mapSettings}>
        {children}
        <TileLayer {...tileSettings} />
        <ZoomControl position="bottomright" />
      </BaseMap>
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.array,
  children: PropTypes.node,
  map: PropTypes.string,
  zoom: PropTypes.number,
  className: PropTypes.string
};

export default Map;
