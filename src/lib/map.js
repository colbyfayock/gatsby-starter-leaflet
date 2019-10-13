/**
 * promiseToZoomIn
 * @description
 */

export function promiseToZoomIn( map, zoom ) {
  return new Promise(( resolve, reject ) => {
    if ( !map.flyTo ) {
      reject( 'Failed to zoom: no flyTo method on map' );
    }

    if ( typeof zoom !== 'number' ) {
      reject( `Failed to zoom: zoom invalid number ${zoom}` );
    }

    const center = map.getCenter();

    map.flyTo( center, zoom, {
      duration: 2
    });

    map.once( 'moveend', () => {
      resolve();
    });
  });
}
