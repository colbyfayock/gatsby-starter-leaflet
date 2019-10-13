import { promiseToZoomIn } from 'lib/map';

describe( 'lib::map', () => {
  describe( 'promiseToZoomIn', () => {
    it( 'should reject the promise with an invalid map', async () => {
      let error;
      try {
        await promiseToZoomIn({}, 10 );
      } catch ( e ) {
        error = e;
      }
      expect( error ).toMatch( 'Failed to zoom' );
    });

    it( 'should reject the promise with an invalid zoom', async () => {
      let error;
      try {
        await promiseToZoomIn({}, 10 );
      } catch ( e ) {
        error = e;
      }
      expect( error ).toMatch( 'Failed to zoom' );
    });
  });
});
