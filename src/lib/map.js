/**
 * promiseToZoomIn
 * @description
 */

export function promiseToZoomIn(map, zoom) {
  return new Promise((resolve, reject) => {
    if ( !map.flyTo ) {
      reject('Failed to zoom: no flyTo method on map');
    };
    map.flyTo(map.getCenter(), zoom, {
      duration: 2
    });
    map.once('moveend', () => {
      resolve();
    });
  })
}