import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import DevTools from './DevTools';
import {Router} from 'react-router';
import {Notifs} from 'redux-notifications';

const Root = ({store, history}) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <Notifs />
      <DevTools />
    </div>
  </Provider>);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
