import React from 'react';
import ContentHeader from '../ContentHeader';

const TrainerForm = ({fields: {
  firstName,
  lastName,
  email,
  mobilePhone,
  secondaryPhone,
  street1,
  street2,
  city,
  state,
  zipCode,
  birthDate,
  color,
  defaultClientRate },
  handleSubmit, submitting, dispatch}) => {
  return (
    <div id='trainerForm'>
      <ContentHeader >
        <div className="trainerForm__header">
          <div className="trainerForm__header__left" >
            <button className="contentHeader__button__new" title="New" />
          </div>
          <div className="trainerForm__header__center">
            <div className="trainerForm__header__center__title">Trainer</div>
          </div>
          <div className="trainerForm__header__right" >
          </div>
        </div>
      </ContentHeader>
      <div className="form-scroll-inner" >
        <div className="content-inner">
          <Notifs />
          <form onSubmit={handleSubmit}>
            <div className="trainerForm__header">
              <label className="trainerForm__header__label">Sign In</label>
            </div>
            <div className="trainerForm__row">
              <Input property={firstName} validation="top" dispatch={dispatch}/>
              <Input property={lastName} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__row">
              <Input property={birthDate} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__row">
              <Input property={street1} validation="top" dispatch={dispatch}/>
              <Input property={street2} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__row">
              <Input property={city} validation="top" dispatch={dispatch}/>
              <Inpumt property={state} validation="top" dispatch={dispatch}/>
              <Input property={zipCode} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__row">
              <Input property={color} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__row">
              <Input property={email} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__row">
              <Input property={mobilePhone} validation="top" dispatch={dispatch}/>
              <Input property={secondaryPhone} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__row">
              <Input property={defaultClientRate} validation="top" dispatch={dispatch}/>
            </div>
            <div className="trainerForm__footer">
              <button type="submit" className="trainerForm__footer__button" disabled={submitting}>
                {submitting ? <i /> : <i />} Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>);
};

TrainerForm.contextTypes = {
};

export default TrainerForm;
