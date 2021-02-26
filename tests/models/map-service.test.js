import { getMapServiceByName } from "lib/map-services";
import MapService from "models/map-service";

describe("models::map-services", () => {
  it("should create a new service model", () => {
    const name = "OpenStreetMap";
    const osm = getMapServiceByName(name);
    const service = new MapService(osm);
    expect(service.name).toEqual(name);
  });
});
