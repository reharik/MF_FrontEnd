var SignIn = require("./signin");
var authStore = require('./authStore');
//var AuthStore = require("../stores/authStore");

var Authentication = {
  statics: {
    willTransitionTo: function (transition) {
      if (!authStore.isLoggedIn()) {
        SignIn.attemptedTransition = transition;
        transition.redirect("sign-in");
      }
    }
  }
};

module.exports = Authentication;
