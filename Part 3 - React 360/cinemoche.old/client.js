import { ReactInstance, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360._cameraPosition = [5, 10, 35];
  //r360._cameraQuat = [10 , 0, 0];

  // Render your app content to the default cylinder surface
  r360.renderToSurface(r360.createRoot('World', { }), r360.getDefaultSurface());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg')).catch(console.error);

  // Render the cinemoche
  const location = new Location([0, 0, 0]);
  r360.renderToLocation(r360.createRoot('Cinemoche', { }), location);
}

window.React360 = {init};