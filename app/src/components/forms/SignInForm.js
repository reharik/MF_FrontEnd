import React, {Component} from 'react';
import SubmissionFor from './../../containers/SubmissionForContainer';
import {Notifs} from 'redux-notifications';
import {Form} from 'freakin-react-forms';

class SignInForm extends Component {
  componentWillMount() {
    const fields = Form.buildModel('signIn',this.props.fields, {onChange: this.changeHandler})
    this.setState({fields, formIsValid: false})
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const result = Form.prepareSubmission(this.state.fields);
    console.log(`==========result=========`);
    console.log(result);
    console.log(`==========END result=========`);
    if(result.formIsValid){
      this.props.loginUser(result.fields);
    }
    this.setState(result);
  };

  changeHandler = (e) => {
    e.preventDefault();
    const result = Form.onChangeHandler(this.state.fields)(e);
    this.setState(result);
  };

  render() {
    const model = this.state.fields
    if (!model) {
      return null;
    }
    
    return (
      <div className="signIn">
        <div className="signIn__outer">
          <div className="signIn__header"></div>
          <div className="signIn__content">
            <Notifs containerName="signIn"/>
            <form onSubmit={this.onSubmitHandler}>
              <div className="signIn__form__header">
                <label className="signIn__form__header__label">Sign In</label>
              </div>
              <div className="signIn__form__row">
                <SubmissionFor data={model.userName} />
              </div>
              <div className="signIn__form__row">
                <SubmissionFor data={model.password} />
              </div>
              <div className="signIn__form__footer">
                <button type="submit" className="signIn__form__footer__button">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
