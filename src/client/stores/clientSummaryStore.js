"use strict";

var Luxxor = require("./../services/luxxor");

var clientSummaryStore = Luxxor.createStore({
  initialize: function() {
      this.loading = false;
      this.error = null;
      this.clientSummaries = [];

      this.bindActions2({
          servicesActions: [Luxxor.constants.CLIENTS.LOAD_CLIENT_SUMMARIES],
          directActions: {}
      });
  },

  onLoadClientSummariesSuccess: function(payload) {
    this.loading = false;
    this.error = null;

    this.clientSummaries = payload.clientSummaries;
    this.emit("change");
  },

  getClientSummaries: function(){
    return this.clientSummaries;
  },
  getLoading: function(){
    return this.loading;
  },
  getError: function(){
    return this.errror;
  }

});
module.exports = clientSummaryStore;
