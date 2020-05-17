import { isDomAvailable } from 'lib/util';

describe( 'lib::util', () => {
  describe( 'isDomAvailable', () => {
    let windowSpy;

    beforeEach(() => {
      windowSpy = jest.spyOn( global, 'window', 'get' );
    });

    afterEach(() => {
      windowSpy.mockRestore();
    });

    it( 'should return true when document create is available', () => {
      windowSpy.mockImplementation(() => ({
        document: {
          createElement: () => {},
        },
      }));
      expect( isDomAvailable()).toEqual( true );
    });

    it( 'should return false with window not available', () => {
      windowSpy.mockImplementation(() => undefined );
      expect( isDomAvailable()).toEqual( false );
    });

    it( 'should return false with document create not available', () => {
      windowSpy.mockImplementation(() => ({
        document: undefined,
      }));
      expect( isDomAvailable()).toEqual( false );
    });
  });
});
