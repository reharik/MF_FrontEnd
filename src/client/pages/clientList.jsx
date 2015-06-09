"use strict";
var React = require("react");
var Luxxor = require("./../services/luxxor");
var Griddle = require('griddle-react');
var Authentication = require("../mixins/authentication");
var _ = require("lodash");
var Json = require("JSON");
var GridLinkComponent = require('./../components/gridConcerns/GridLinkComponent');
var clientSummaryStore = require('../stores/clientSummaryStore');


module.exports = React.createClass({
  displayName: "Client List",
  mixins: [clientSummaryStore.mixin,Authentication ],


  getStateFromStores: function(){
    console.log("summaries" + Json.stringify(clientSummaryStore.getClientSummaries(), null, 2));
    return {
        loading: clientSummaryStore.getLoading(),
        error: clientSummaryStore.getError(),
        clientSummaries: clientSummaryStore.getClientSummaries()
    };
  },
  render: function() {
      var columnDefs = [
          {
              'columnName': 'FirstName',
              'displayName': 'First Name',
              //'customComponent': GridLinkComponent
          },
          {
              'columnName': 'LastName',
              'displayName': 'Last Name'
          },
          {
              'columnName': 'EmailAddress',
              'displayName': 'Email'
          }
      ];

      var columns = ['FirstName', 'LastName', 'EmailAddress', 'Phone'];

      return (
      <div>
        <h2>Client List</h2>
        <Griddle results={this.state.clientSummaries} columns={columns} columnMetadata={columnDefs} enableInfiniteScroll={true} resultsPerPage={5}/>
      </div>
    );
  }
});
