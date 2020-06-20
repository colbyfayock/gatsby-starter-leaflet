import { getMapServiceByName } from 'lib/map-services';
import MapService from 'models/map-service';

export default function useMapServices({ names = [], services: userServices } = {}) {
  const services = names.map(( name ) => getMapServiceByName( name, userServices ));

  return services.map(( service ) => new MapService( service ));
}
