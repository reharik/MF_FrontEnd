"use strict";
var root = require("path").normalize(__dirname + "/..");

module.exports = {
  paths: {
    "in": {
      less: root + "/src/client/less/*.less",
      jsx: root + "/src/client/**/*.jsx",
      js: root + "/src/client/**/*.js",
      app: root + "/build/app",
      rootfiles: [root + "/Dockerfile", root + "/nginx.conf", root + "/Makefile"]
    },
    out: {
      build_info: root + "/build-info.json",
      build_js: root + "/build",
      public_js: root + "/../MF_BuildFiles/CDN/public/js",
      public_css: root + "/../MF_BuildFiles/CDN/public/css",
      deploy: root + "/../MF_BuildFiles/CDN"
    }
  }
};
