import { getMapServices, getMapServiceByName } from 'lib/map-services';

describe( 'lib::map-services', () => {
  describe( 'getMapServices', () => {
    it( 'should get a list of available map services', () => {
      const services = getMapServices();
      expect( services[0].name ).toMatch( 'OpenStreetMap' );
    });
  });

  describe( 'getMapServiceByName', () => {
    it( 'should get a service by name', () => {
      const name = 'OpenStreetMap';
      const service = getMapServiceByName( name );
      expect( service.name ).toMatch( name );
    });

    it( 'should get a service by name when passing in additional services', () => {
      const name = 'TestService';
      const testService = {
        name
      };
      const service = getMapServiceByName( name, [testService]);
      expect( service.name ).toMatch( name );
    });
  });
});
