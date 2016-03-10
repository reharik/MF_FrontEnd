"use strict";

var React = require("react");
import { connect } from 'react-redux'
import { navDown } from './../actions'
var Browser = require("./../components/slidingNav2");
//var Layout = require("./layout");


const Root = ({path, items, onMenuItemClick})=> (
    <div>
      <Browser path={path} items={items} onMenuItemClick={onMenuItemClick} />
    </div>
);


const mapDispatchToProps = (dispatch) => {
  return {
    onMenuItemClick: (index, item) => {
      dispatch(navDown(index, item))
    }
  }
};

export default connect(
    state => ({items: state.menu.items, path: state.menu.path}),
    mapDispatchToProps
)(Root);

