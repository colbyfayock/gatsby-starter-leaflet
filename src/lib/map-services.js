import { mapServices } from "data/map-services";

/**
 * getMapServicesByName
 * @description Returns all preconfigured services
 */

export function getMapServices() {
  return mapServices || [];
}

/**
 * getMapServiceByName
 * @description Tries to find a service given the name. Allows additional services passed in.
 */

export function getMapServiceByName(name, userServices = []) {
  const services = [...getMapServices(), ...userServices];
  return services.find((service) => service.name === name);
}
