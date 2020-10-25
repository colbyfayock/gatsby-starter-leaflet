import React from 'react';
import { Helmet } from 'react-helmet';
import { CircleMarker, Rectangle, Marker, Popup } from 'react-leaflet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import Snippet from 'components/Snippet';

const json = [
  {
    coords: [51.7527, 0.3394],
    place: 'St. Albans'
  },
  {
    coords: [51.7356, 0.4685],
    place: 'Chelmsford'
  },
  {
    place: 'Canterbury',
    coords: [51.2802, 1.0789]
  }
];

const circleLocation = {
  lat: 51.49,
  lng: -0.08,
};

const rectangleLocation = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const CENTER = [circleLocation.lat, circleLocation.lng];
const DEFAULT_ZOOM = 10;

const ExamplePage = () => {

  async function mapEffect() {

  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="example">
      <Helmet>
        <title>Examples - Gatsby Starter Leaflet</title>
      </Helmet>

      <Map {...mapSettings}>
        <CircleMarker center={circleLocation} color={'blue'} radius="20" />
        <Rectangle bounds={rectangleLocation} color={'black'} />
        { json.map(( item, index ) => (
          <Marker key={index} position={item.coords}>
            <Popup>{ item.place }</Popup>
          </Marker>
        )) }
      </Map>

      <Container type="content" className="text-center home-start">
        <h2>Explore the sample implementations!</h2>
        <p>Run the following in your terminal!</p>
        <Snippet>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet</Snippet>
      </Container>
    </Layout>
  );
};

export default ExamplePage;
