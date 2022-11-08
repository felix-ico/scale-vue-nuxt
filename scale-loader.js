export default async function() {
    if (process.client) {
      const {
        defineCustomElements,
        applyPolyfills
      } = require("@telekom/scale-components/loader");
  
      // Bind the custom elements to the window object
      applyPolyfills().then(() => {
        defineCustomElements(window);
      });
    }
  }
  