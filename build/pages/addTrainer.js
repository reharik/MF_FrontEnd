"use strict";
var React = require("react");
var Col = require("react-bootstrap").Col;
var Input = require("react-bootstrap").Input;
var Button = require("react-bootstrap").Button;
var RHInput = require('./../components/formConcerns/RHInput');
var validators = require('./../components/formConcerns/validatorEnum');
var Authentication = require("../mixins/authentication");
var luxxor = require("./../services/luxxor");

module.exports = React.createClass({
  displayName: "Add Trainer",
  mixins: [Authentication, luxxor.FluxMixin, luxxor.StoreWatchMixin("trainerStore")],
  contextTypes: { router: React.PropTypes.func.isRequired },

  getStateFromFlux: function(){
    var store = this.getFlux().store("trainerStore");
    return {
      loading: store.getLoading(),
      error: store.getError()
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    if(this.refs.firstName.isValid()
      && this.refs.lastName.isValid()
      && this.refs.email.isValid()
      && this.refs.phone.isValid()
      && this.refs.password.isValid()
    ) {
      this.setState({'notInitialLoad':true});
      var newUser = {
        'Contact':{
          'FirstName': this.refs.firstName.getValue(),
          'LastName': this.refs.lastName.getValue(),
          'EmailAddress': this.refs.email.getValue(),
          'Phone': this.refs.phone.getValue(),
          'SecondaryPhone': this.refs.phone2.getValue()
        },
        'Credentials':{
          'EmailAddress': this.refs.email.getValue(),
          'Password': this.refs.password.getValue()
        },
        'DOB': this.refs.dob.getValue()
    };
      var repeatPassword = this.refs.repeatPassword.getValue();
      if (newUser.Credentials.Password === repeatPassword && newUser.Credentials.Password.trim()) {
        var _flux = this.getFlux();
        _flux.actions[luxxor.constants.TRAINERS.ADD_TRAINER](newUser);
      }
    }
  },
  renderErrorBlock: function () {
      return (React.createElement("p", {className: "help-block"}, this.state.notInitialLoad && this.state.error));
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, "Add Trainer"), 
          React.createElement(Col, {md: 4, mdOffset: 4}, 
              React.createElement("form", {onSubmit: this.handleSubmit, className: this.state.error ? "has-error" : null}, 
                  React.createElement(RHInput, {type: "text", ref: "firstName", name: "firstName", validators: [validators.REQUIRED]}), 
                  React.createElement(RHInput, {type: "text", ref: "lastName", name: "lastName", validators: [validators.REQUIRED]}), 
                React.createElement(RHInput, {type: "email", ref: "email", name: "email", validators: [validators.REQUIRED, validators.EMAIL]}), 
                React.createElement(RHInput, {type: "text", ref: "phone", name: "phone", validators: [validators.REQUIRED]}), 
                React.createElement(RHInput, {type: "text", ref: "phone2", name: "secondaryPhone"}), 
                React.createElement(RHInput, {type: "text", ref: "dob", name: "dateOfBirth"}), 
                  React.createElement(RHInput, {type: "password", ref: "password", name: "password", validators: [validators.REQUIRED]}), 
                  React.createElement(RHInput, {type: "password", ref: "repeatPassword", name: "repeatPassword", validators: [validators.REQUIRED]}), 
                  React.createElement(Button, {type: "submit", bsStyle: "success", className: "pull-right"}, "Sign Up"), 
            this.renderErrorBlock()
              )
          )
      )
    );
  }
});
