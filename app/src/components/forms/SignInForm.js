import React from 'react';
import InputContainer from './../../containers/InputContainer';
import {Notifs} from 'redux-notifications';
import {Form} from 'freakin-react-forms';
import uuid from 'uuid';

let SignInForm = ({model, loginUser}) =>
{
  if(!model){return null;}
  return (
    <div className="signIn">
      <div className="signIn__outer">
        <div className="signIn__header"></div>
        <div className="signIn__content">
          <Notifs />
          <Form submitHandler={x=>loginUser(x)} model={model} >
            <div className="signIn__form__header">
              <label className="signIn__form__header__label">Sign In</label>
            </div>
            <div className="signIn__form__row">
              <InputContainer frfProperty={model.userName} />
            </div>
            <div className="signIn__form__row">
              <InputContainer frfProperty={model.password} />
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
