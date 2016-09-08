import React from 'react';
import Input from '../formElements/Input';
import {Notifs} from 'redux-notifications';
import { FormState, Form } from 'react-formstate';

export default class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.formState = new FormState(this);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    let submitMessage = null,
      isInvalid = this.formState.isInvalid();

    if (isInvalid) {
      submitMessage = 'Please fix validation errors';
    }

    return (
      <div className="signIn">
        <div className="signIn__outer">
          <div className="signIn__header"></div>
          <div className="signIn__content">
            <Notifs />
            <Form formState={this.formState} onSubmit={this.handleSubmit}>
              <div className="signIn__form__header">
                <label className="signIn__form__header__label">Sign In</label>
              </div>
              <div className="signIn__form__row">
                <Input
                  formField='userName'
                  type='text'
                  required
                  revalidateOnSubmit />
              </div>
              <div className="signIn__form__row">
                <Input  formField='Password'
                        type='password'
                        label='Password'
                        required
                        revalidateOnSubmit validation="inline" />
              </div>
              <div className="signIn__form__footer">
                <button type="submit" className="signIn__form__footer__button" disabled={isInvalid}>
                  Sign In
                </button>
                <span>{submitMessage}</span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let model = this.formState.createUnitOfWork().createModel();
    if (model) {
      alert(JSON.stringify(model)); // proceed with valid data
    }
    // else: createModel called setState to set the appropriate validation messages
  }
}

// export default SignInForm;
