/**
 * Created by reharik on 3/5/16.
 */
'use strict';

import React from 'react';
import { Route } from 'react-router';

import AppContainer from './containers/AppContainer';
import ClientList from './components/ClientList';
import TrainersList from './components/TrainersList';
import Trainer from './components/Trainer';

//import { App, Home, Foo, Bar } from './components'


let routes = (
    <Route path="/" component={AppContainer}>
        <Route path="clients" component={ClientList} />
        <Route path="trainers" component={TrainersList} />
        <Route path="trainer/:trainerId" component={Trainer} />
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
//    <Route path="/profile" component={pages.NullPage}>
//        <Route path="/profile/signin" component={pages.SignInPage}/>
//        <Route path="/profile/signout" component={pages.SignOutPage}/>
//    </Route>
    */
