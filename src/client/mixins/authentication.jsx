var SignIn = require("../pages/signin");
var authStore = require('../stores/authStore');
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
