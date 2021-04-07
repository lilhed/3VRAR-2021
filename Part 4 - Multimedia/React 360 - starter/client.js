import { ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface (as needed #lh)
  r360.renderToLocation(
    r360.createRoot('Cinema', { /* initial props */ }),
    r360.getDefaultLocation()
  );
}

window.React360 = {init};
