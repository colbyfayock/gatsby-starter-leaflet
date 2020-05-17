import { promiseToFlyTo } from 'lib/map';

const LOCATION = {
  lat: 38.9072,
  lng: -77.0369,
};

const CENTER = [LOCATION.lat, LOCATION.lng];

describe( 'lib::map', () => {
  describe( 'promiseToFlyTo', () => {
    it( 'should reject the promise with an invalid map', async () => {
      const flyToSettings = {
        zoom: 10,
        center: CENTER,
      };
      let error;
      try {
        await promiseToFlyTo({}, flyToSettings );
      } catch ( e ) {
        error = e;
      }
      expect( error ).toMatch( 'no flyTo method on map' );
    });

    it( 'should reject the promise with an invalid zoom', async () => {
      const flyToSettings = {
        center: CENTER,
      };
      const mockMap = {
        flyTo: () => {},
      };
      let error;
      try {
        await promiseToFlyTo( mockMap, flyToSettings );
      } catch ( e ) {
        error = e;
      }
      expect( error ).toMatch( 'zoom invalid number' );
    });
  });
});
