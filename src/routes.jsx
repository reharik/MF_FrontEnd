/**
 * Created by reharik on 3/5/16.
 */
"use strict";

var React = require("react");
var reactRouter = require('react-router');
var { Route, IndexRoute } = reactRouter;
var pages = require(__dirname + '/pages/index');


var routes = (
        <Route path="/" component={pages.Root}>

        </Route>);

module.exports = routes;




//<IndexRoute component={pages.Home}/>
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