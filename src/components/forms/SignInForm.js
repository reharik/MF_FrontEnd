import React from 'react';
import Input from '../formElements/Input';
import {Notifs} from 'redux-notifications';
import {Form} from 'freakin-react-forms';

let SignInForm = ({model, loginUser, dispatch}) =>
{
  return (
    <div className="signIn">
      <div className="signIn__outer">
        <div className="signIn__header"></div>
        <div className="signIn__content">
          <Notifs />
          <Form onSubmit={loginUser} model={model} >
            <div className="signIn__form__header">
              <label className="signIn__form__header__label">Sign In</label>
            </div>
            <div className="signIn__form__row">
              <Input frfProperty="userName" validation="top" dispatch={dispatch}/>
            </div>
            <div className="signIn__form__row">
              <Input frfProperty="password" validation="inline"/>
            </div>
            <div className="signIn__form__footer">
              <button type="submit" className="signIn__form__footer__button" >
                Sign In
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
