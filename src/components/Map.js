import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Map as BaseMap, TileLayer, ZoomControl } from 'react-leaflet';

import { useConfigureLeaflet, useMapServices, useRefEffect } from 'hooks';
import { isDomAvailable } from 'lib/util';

const Map = props => {
  const {
    children,
    className,
    defaultBaseMap = 'OpenStreetMap',
    mapEffect,
    ...rest
  } = props;

  const mapRef = useRef();

  useConfigureLeaflet();

  useRefEffect({
    ref: mapRef,
    effect: mapEffect
  });

  const services = useMapServices({
    names: ['OpenStreetMap']
  });
  const basemap = services.find(service => service.name === defaultBaseMap);

  let mapClassName = `map`;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  if (!isDomAvailable()) {
    return (
      <div className={mapClassName}>
        <p className="map-loading">Loading map...</p>
      </div>
    );
  }

  const mapSettings = {
    className: 'map-base',
    ...rest
  };

  return (
    <div className={mapClassName}>
      <BaseMap ref={mapRef} {...mapSettings}>
        { children }
        { basemap && <TileLayer {...basemap} /> }
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
