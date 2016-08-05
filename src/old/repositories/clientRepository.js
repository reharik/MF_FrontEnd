/*jslint node: true */
'use strict';
let request = require('superagent');
let requestPromise = require('././promiseSuperAgent');

let URLS = {
  CLIENTS: '/clients'
};


module.exports = {
  LoadClientSummaries: function() {
    return requestPromise( request.get(URLS.CLIENTS)
        .set('Accept', 'application/json')
    );
  }
};
