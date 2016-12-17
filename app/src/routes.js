import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppContainer from './containers/AppContainer';
import ClientList from './components/lists/ClientList';
import TrainersList from './containers/lists/TrainerListContainer';
import Calendar from './containers/CalendarContainer';
import TrainerContainer from './containers/forms/TrainerContainer';
import UpdateTrainerContainer from './containers/forms/UpdateTrainerContainer';

//import { App, Home, Foo, Bar } from './components'

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Calendar} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/clients" component={ClientList} />
    <Route path="/trainers" component={TrainersList} />
      <Route path="/trainer" component={TrainerContainer} />
      <Route path="/trainer(/:trainerId)" component={UpdateTrainerContainer} />
  </Route>);
module.exports = routes;


/*<IndexRoute component={pages.Home}/>
 //<Route path="/clients" component={pages.ClientList}>
 //<Route path="/clients/newclient" component={pages.AddClient}/>
 //<Route path="/clients/:clientid" component={pages.ViewClient}/>
 //</Route>
 //    <Route path="/trainers" component={pages.TrainerList}>
 //        <Route path="/trainers/newclient" component={pages.AddTrainer}/>
 //        <Route path="/trainers/:trainerid" component={pages.ViewTrainer}/>
 //    </Route>
 //    <Route path=m"/profile" component={pages.NullPage}>
 //        <Route path="/profile/signin" component={pages.SignInPage}/>
 //        <Route path="/profile/signout" component={pages.SignOutPage}/>
 //    </Route>
 */
