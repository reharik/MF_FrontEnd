/*jslint node: true */
"use strict";
var request = require("superagent");
var requestPromise = require("././promiseSuperAgent");

var URLS = {
  CLIENTS: "/clients"
};


module.exports = {
  LoadClientSummaries: function () {
    return requestPromise( request.get(URLS.CLIENTS)
        .set("Accept", "application/json")
    );
  }
};
