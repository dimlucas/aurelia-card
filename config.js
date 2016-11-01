System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
    "bootstrap": "npm:bootstrap@4.0.0-alpha.5",
    "npm:aurelia-polyfills@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:bootstrap@4.0.0-alpha.5": {
      "jquery": "npm:jquery@2.2.4",
      "tether": "github:HubSpot/tether@1.3.7"
    }
  }
});
