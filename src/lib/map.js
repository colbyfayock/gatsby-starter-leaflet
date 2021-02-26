/**
 * promiseToFlyTo
 * @description
 */

export function promiseToFlyTo(map, { zoom, center }) {
  return new Promise((resolve, reject) => {
    const baseError = "Failed to fly to area";

    if (!map.flyTo) {
      reject(`${baseError}: no flyTo method on map`);
    }

    if (typeof zoom !== "number") {
      reject(`${baseError}: zoom invalid number ${zoom}`);
    }

    const mapCenter = center || map.getCenter();
    const mapZoom = zoom || map.getZoom();

    map.flyTo(mapCenter, mapZoom, {
      duration: 2,
    });

    map.once("moveend", () => {
      resolve();
    });
  });
}

/**
 * getCurrentLocation
 * @description
 */

export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(err)
    );
  });
}
