import React from 'react';
import {Form} from 'freakin-react-forms';
import ContentHeader from '../ContentHeader';
import SubmissionFor from './../../containers/SubmissionForContainer';
import HiddenFor from './../formElements/elementsFor/HiddenFor';
import {browserHistory} from 'react-router';

const TrainerForm = ({model,
  states,
  submitting,
  upsertTrainer}) => {
  return (
    <div className='trainerForm'>
      <ContentHeader >
        <div className="trainerForm__header">
          <div className="trainerForm__header__left" >

            <button className="contentHeader__button__new" title="New" onClick={() => browserHistory.push('/trainer')} />
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
          <Form submitHandler={x=>upsertTrainer(x)} model={model} className="trainerForm__content">
            <div className="trainerForm__section__header">
              <label className="trainerForm__section__header__label">Contact Info</label>
              <HiddenFor frfProperty={model.id}  isHidden={true} />
            </div>
            <div className="trainerForm__section__row">
              <SubmissionFor frfProperty={model.firstName} validation="top" />
              <SubmissionFor frfProperty={model.lastName} validation="top" />
            </div>
            <div className="trainerForm__section__row">
              <SubmissionFor frfProperty={model.mobilePhone} />
              <SubmissionFor frfProperty={model.secondaryPhone} />
            </div>
            <div className="trainerForm__section__row__single">
              <SubmissionFor frfProperty={model.email} />
            </div>
            <div className="trainerForm__section__row">
              <SubmissionFor frfProperty={model.street1} />
              <SubmissionFor frfProperty={model.street2} />
            </div>
            <div className="trainerForm__section__row">
              <SubmissionFor frfProperty={model.city} containerStyle="trainerForm__section__row__address__city" />
              <SubmissionFor selectOptions={states}
                     frfProperty={model.state}
                     containerStyle="trainerForm__section__row__address__state"
                     />
              <SubmissionFor frfProperty={model.zipCode} containerStyle="trainerForm__section__row__address__zip" />
            </div>
            <div className="trainerForm__section__header">
              <label className="trainerForm__section__header__label">Trainer Info</label>
            </div>
            <div className="trainerForm__section__row">
              <SubmissionFor frfProperty={model.birthDate}/>
              {/*<SubmissionFor frfProperty={model.defaultClientRate} /> */}
              <SubmissionFor frfProperty={model.color} />
            </div>
            <div className="trainerForm__footer">
              <button type="submit" className="trainerForm__footer__button">
               Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>);
};









//
// const TrainerForm = ({fields: {
//   firstName,
//   lastName,
//   email,
//   mobilePhone,
//   secondaryPhone,
//   street1,
//   street2,
//   city,
//   state,
//   zipCode,
//   birthDate,
//   color,
//   defaultClientRate },
//   states,
//     handleSubmit,
//     submitting,
//     createNewTrainer,
//     dispatch}) => {
//
//   return (
//     <div className='trainerForm'>
//       <ContentHeader >
//         <div className="trainerForm__header">
//           <div className="trainerForm__header__left" >
//             <button className="contentHeader__button__new" title="New" onClick={() => createNewTrainer(dispatch)} />
//           </div>
//           <div className="trainerForm__header__center">
//             <div className="trainerForm__header__center__title">Trainer</div>
//           </div>
//           <div className="trainerForm__header__right" >
//           </div>
//         </div>
//       </ContentHeader>
//       <div className="form-scroll-inner" >
//         <div className="content-inner">
//           <form onSubmit={handleSubmit} className="trainerForm__content">
//             <div className="trainerForm__section__header">
//               <label className="trainerForm__section__header__label">Contact Info</label>
//             </div>
//             <div className="trainerForm__section__row">
//               <SubmissionFor property={firstName}  id="raif"/>
//               <Input property={lastName} dispatch={dispatch}/>
//             </div>
//             <div className="trainerForm__section__row__single">
//               <Input property={birthDate} dispatch={dispatch}/>
//             </div>
//             <div className="trainerForm__section__row">
//               <Input property={street1} dispatch={dispatch}/>
//               <Input property={street2} dispatch={dispatch}/>
//             </div>
//             <div className="trainerForm__section__row">
//               <Input property={city} containerStyle="trainerForm__section__row__address__city" dispatch={dispatch}/>
//               <Input type="select"
//                      selectOptions={states}
//                      property={state}
//                      containerStyle="trainerForm__section__row__address__state"
//                      dispatch={dispatch}/>
//               <Input property={zipCode} containerStyle="trainerForm__section__row__address__zip" dispatch={dispatch}/>
//             </div>
//             <div className="trainerForm__section__header">
//               <label className="trainerForm__section__header__label">Trainer Info</label>
//             </div>
//             <div className="trainerForm__section__row">
//               <Input property={defaultClientRate} dispatch={dispatch}/>
//               <ColorPicker property={color} dispatch={dispatch}/>
//             </div>
//             <div className="trainerForm__section__row">
//               <Input property={mobilePhone} dispatch={dispatch}/>
//               <Input property={secondaryPhone} dispatch={dispatch}/>
//             </div>
//             <div className="trainerForm__section__header">
//               <label className="trainerForm__section__header__label">Account Info</label>
//             </div>
//             <div className="trainerForm__section__row__single">
//               <Input property={email} dispatch={dispatch}/>
//             </div>
//             <div className="trainerForm__footer">
//               <button type="submit" className="trainerForm__footer__button" disabled={submitting}>
//                 {submitting ? <i /> : <i />} Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>);
// };

TrainerForm.contextTypes = {
};

export default TrainerForm;
