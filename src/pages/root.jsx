"use strict";

var React = require("react");
var Browser = require("./../components/slidingNav2");
//var Layout = require("./layout");

const data = [
  {name: 'Animal', children: [
    {name: 'Land', children: [
      {name: 'Cheetah'},
      {name: 'Ant'}
    ]},
    {name: 'Air', children: [
      {name: 'Eagle'}
    ]},
    {name: 'Water', children: [
      {name: 'Nessy'}
    ]}
  ]},
  {name: 'Vegetable', children: [
    {name: 'Broccoli'},
    {name: 'IE6'}
  ]},
  {name: 'Mineral', children: [
    {name: 'Granite'},
    {name: 'Uraninite'}
  ]}
];

var Root = React.createClass({
  displayName: "Root",
  getStateFromStores: function(){
    return{
    };
  },

  render: function () {
    return (
      <div>
        <Browser items={data}  />
      </div>
    );
  }
});

module.exports = Root;
