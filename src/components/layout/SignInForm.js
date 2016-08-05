import React from 'react';
import Input from './../FormElements/Input';

var SignInForm = ({fields: {userName, password}, resetForm, handleSubmit, submitting,dispatch}) =>
  (
    <div className="signIn">
      <div className="signIn__outer">
        <div className="signIn__header"></div>
        <div className="signIn__content">
          <div className="signIn__messageContainer"></div>
          <form onSubmit={handleSubmit}>
            <div className="signIn__form__header">
              <label className="signIn__form__header__label">Sign In</label>
            </div>
            <div className="signIn__form__row">
              <Input property={userName} validation="top" dispatch={dispatch} />
            </div>
            <div className="signIn__form__row">
              <Input property={password} validation="inline"/>
            </div>
            <div className="signIn__form__footer">
              <button type="submit" className="signIn__form__footer__button" disabled={submitting}>
                {submitting ? <i/> : <i/>} Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

export default SignInForm;
