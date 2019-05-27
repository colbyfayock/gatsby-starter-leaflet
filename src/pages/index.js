import React from 'react';
import Helmet from 'react-helmet';
import { Tooltip, Marker } from 'react-leaflet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';

import img_gatsby from 'assets/images/gatsby-astronaut.png';

const DEFAULT_LOCATION = {
  lat: 38.805850,
  lng: -77.041270
};

const CENTER = [ DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng ];

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map center={CENTER} zoom={14}>
        <Marker position={DEFAULT_LOCATION}>
          <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
            <Container className="gatsby-tooltip" type="content">
              <div className="gatsby-tooltip-image">
                <p className="gatsby-astronaut">
                  <img src={img_gatsby} alt="Build with Gatsby!" />
                </p>
              </div>
              <div className="gatsby-tooltip-content">
                <h1>Gatsby Leaflet Starter</h1>
                <p>
                  Welcome to your new Gatsby site.
                </p>
                <p>
                  Now go build something great!
                </p>
              </div>
            </Container>
          </Tooltip>
        </Marker>
      </Map>    

      <Container type="content" className="text-center home-start">
        <h2>Still Getting Started?</h2>
        <p>
          Run the following in your terminal!
        </p>
        <pre>
          <code>
            gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet
          </code>
        </pre>
        <p className="note">
          Note: Gatsby CLI required globally for the above command
        </p>
      </Container>

    </Layout>
  );
};

export default IndexPage;
