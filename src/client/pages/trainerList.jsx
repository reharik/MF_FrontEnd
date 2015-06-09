"use strict";
var React = require("react");
var Griddle = require('griddle-react');
var Authentication = require("../mixins/authentication");
var _ = require("lodash");
var Json = require("JSON");
var GridLinkComponent = require('./../components/gridConcerns/GridLinkComponent');
var trainerSummaryStore = require('../stores/trainerSummariesStore');

module.exports = React.createClass({
  displayName: "Trainer List",
  mixins: [trainerSummaryStore.mixin, Authentication ],

  getStateFromStores: function(){
    console.log("summaries" + Json.stringify(trainerSummaryStore.getTrainerSummaries(), null, 2));
    return {
        loading: trainerSummaryStore.getLoading(),
        error: trainerSummaryStore.getError(),
        clientSummaries: trainerSummaryStore.getTrainerSummaries()
    };
  },
  render: function() {
      var columnDefs = [
          {
              'columnName': 'FirstName',
              'displayName': 'First Name'
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
        <h2>Trainer List</h2>
        <Griddle results={this.state.trainerSummaries} columns={columns} columnMetadata={columnDefs} enableInfiniteScroll={true} resultsPerPage={5}/>
      </div>
    );
  }
});
