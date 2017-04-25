import React, {Component} from 'react';
import {Notifs} from 'redux-notifications';
import {Form} from 'freakin-react-forms';
import ContentHeader from '../ContentHeader';
import SubmissionFor from '../../containers/forms/SubmissionForContainer';
import DisplayFor from './../formElements/elementsFor/DisplayFor';
import {browserHistory} from 'react-router';
import HiddenFor from './../formElements/elementsFor/HiddenFor';

class PurchaseForm extends Component {
  componentWillMount() {
    this.loadData();
    const fields = Form.buildModel('purchaseForm', this.props.model, {onChange: this.changeHandler});
    this.setState({
      fields,
      formIsValid: false
    })
  }

  loadData() {
    if (this.props.params.clientId) {
      this.props.fetchClientAction(this.props.params.clientId);
    }
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const result = Form.prepareSubmission(this.state.fields);
    this.props.notifications(result.errors, this.containerName);
    if (result.formIsValid) {
      const fieldValues = {...result.fieldValues, ...this.purchasePrice(this.state.fields)};
      let finalResult = {...result, fieldValues: fieldValues};
      this.props.purchases(finalResult.fieldValues);
      this.setState(finalResult);
    } else {
      this.setState(result);
    }
  };

  changeHandler = (e) => {
    const result = Form.onChangeHandler(this.state.fields)(e);
    this.props.notifications(result.errors, this.containerName, e.target.name);
    const totals = this.purchasePrice(result.fields);
    this.setState({...result, ...totals});
  };

  formReset = () => {
    const fields = Form.buildModel('PurchaseForm', this.props.model, {onChange: this.changeHandler});
    this.setState({fields, formIsValid: false})
  };

  purchasePrice = (fields) => {
    // this sucks of course, at least move the prices into a constant
    let purchase = {
      fullHourTotal: fields.fullHour.value * 65,
      fullHourTenPackTotal: fields.fullHourTenPack.value * 600,
      halfHourTotal: fields.halfHour.value * 38,
      halfHourTenPackTotal: fields.halfHourTenPack.value * 350,
      pairTotal: fields.pair.value * 45,
      pairTenPackTotal: fields.pairTenPack.value * 400
    };
    purchase.purchaseTotal =
      purchase.fullHourTotal
      + purchase.fullHourTenPackTotal
      + purchase.halfHourTotal
      + purchase.halfHourTenPackTotal
      + purchase.pairTotal
      + purchase.pairTenPackTotal;
    return purchase;
  };

  render() {
    const model = this.state.fields;
    return (
      <div className='form'>
        <ContentHeader >
          <div className="form__header">
            <div className="form__header__left">

              <button className="contentHeader__button__new" title="New"
                      onClick={() => browserHistory.push('/client')}/>
            </div>
            <div className="form__header__center">
              <div className="form__header__center__title">
                Purchase Information
                for {`${this.props.client.contact.firstName} ${this.props.client.contact.lastName}`}
              </div>
            </div>
            <div className="form__header__right">
            </div>
          </div>
        </ContentHeader>
        <Notifs containerName="PurchaseForm"/>
        <div className="form-scroll-inner">
          <div className="content-inner">

            <form onSubmit={this.onSubmitHandler} className="form__content">
              <div className="flexColumn">

                <div style={{marginRight:"150px"}}>
                  <div className="form__section__header">
                    <label className="form__section__header__label">Client Purchase</label>
                    <HiddenFor data={model.clientId} />
                  </div>
                  <div className="form__section__row">
                    <SubmissionFor data={model.fullHour}/>
                    <div>{this.state.fullHourTotal}</div>
                  </div>
                  <div className="form__section__row">
                    <SubmissionFor data={model.fullHourTenPack}/>
                    <div>{this.state.fullHourTenPackTotal}</div>
                  </div>
                  <div className="form__section__row">
                    <SubmissionFor data={model.halfHour}/>
                    <div>{this.state.halfHourTotal}</div>
                  </div>
                  <div className="form__section__row">
                    <SubmissionFor data={model.halfHourTenPack}/>
                    <div>{this.state.halfHourTenPackTotal}</div>
                  </div>
                  <div className="form__section__row">
                    <SubmissionFor data={model.pair}/>
                    <div>{this.state.pairTotal}</div>
                  </div>
                  <div className="form__section__row">
                    <SubmissionFor data={model.pairTenPack}/>
                    <div>{this.state.pairTenPackTotal}</div>
                  </div>
                  <div className="form__section__header">
                    <label className="form__section__header__label">Purchase Total: {this.state.purchaseTotal}</label>
                  </div>
                  <div className="form__section__row">
                    <SubmissionFor data={model.notes}/>
                  </div>
                  <div className="form__footer">
                    <button type="submit" className="form__footer__button">
                      Save
                    </button>
                  </div>
                </div>
                <div>
                  <div className="form__section__header">
                    <label className="form__section__header__label">Current Client Inventory</label>
                    <hr />
                    <div className="form__section__row">
                      <DisplayFor data={this.props.invModel.fullHour} />
                    </div>
                    <div className="form__section__row">
                      <DisplayFor data={this.props.invModel.halfHour} />
                    </div>
                    <div className="form__section__row">
                      <DisplayFor data={this.props.invModel.pair} />
                    </div>

                  </div>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>);
  };
}

export default PurchaseForm;
