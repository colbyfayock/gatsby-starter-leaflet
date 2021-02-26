import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

import { useConfigureLeaflet, useMapServices } from "hooks";
import { isDomAvailable } from "lib/util";

const DEFAULT_MAP_SERVICE = "OpenStreetMap";

const Map = (props) => {
  const {
    children,
    className,
    defaultBaseMap = DEFAULT_MAP_SERVICE,
    ...rest
  } = props;

  useConfigureLeaflet();

  const services = useMapServices({
    names: [...new Set([defaultBaseMap, DEFAULT_MAP_SERVICE])],
  });
  const basemap = services.find((service) => service.name === defaultBaseMap);

  let mapClassName = `map`;

  if (className) {
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
    className: "map-base",
    zoomControl: false,
    ...rest,
  };

  return (
    <div className={mapClassName}>
      <MapContainer {...mapSettings}>
        {children}
        {basemap && <TileLayer {...basemap} />}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
};

export default Map;
