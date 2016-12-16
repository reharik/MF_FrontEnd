import React, { Component } from 'react';
import {Form} from 'freakin-react-forms';
import ContentHeader from '../ContentHeader';
import EditableFor from './../formElements/elementsFor/EditableFor';
import {browserHistory} from 'react-router';

class UpdateTrainerForm extends Component {
  state = {
    editingTrainerName: false
  };

  componentWillMount() {
    this.loadData();
  }

  // componentWillReceiveProps(newProps) { this.loadData(); }

  loadData() {
    this.props.fetchTrainerAction(this.props.params.trainerId);
  }

  toggleEditTrainerName = (rollBack) => {
    if(rollBack){
      this.props.rollBackTrainerName({
        firstName: this.model.firstName.originalValue,
        lastName: this.model.lastName.originalValue
      })
    }
    this.setState({ editingTrainerName:!this.state.editingTrainerName })
  };

  render() {

    if (this.props.isFetching) {
      return (<p style={{ 'padding-top': '100px' }}> Loading... </p>);
    }
    if (this.props.errorMessage) {
      return (<p style={{ 'padding-top': '100px' }}>ERROR! -> {this.props.errorMessage}</p>);
    }
    return (
      <div className='trainerForm'>
        <ContentHeader >
          <div className="trainerForm__header">
            <div className="trainerForm__header__left">
  
              <button className="contentHeader__button__new" title="New"
                      onClick={() => browserHistory.push('/trainer')}/>
            </div>
            <div className="trainerForm__header__center">
              <div className="trainerForm__header__center__title">Trainer</div>
            </div>
            <div className="trainerForm__header__right">
            </div>
          </div>
        </ContentHeader>
        <div className="form-scroll-inner">
          <div className="content-inner">
            <div className="trainerForm__section__header">
              <label className="trainerForm__section__header__label">Contact Info</label>
            </div>
            <div className="trainerForm__section__row">
              <Form submitHandler={x => this.props.updateTrainerName(x)} model={this.model}
                    formName="updateTrainerName"
                    className="trainerForm__content">
                <EditableFor frfProperty={this.props.model.firstName} editing={this.state.editingTrainerName}/>
                <EditableFor frfProperty={this.props.model.lastName} editing={this.state.editingTrainerName}/>
                {this.state.editingTrainerName
                  ? (<div className="trainerForm__footer">
                  <button type="submit" className="trainerForm__footer__button"> Submit </button>
                  <button onClick={() => this.toggleEditTrainerName(true)}>Cancel</button>
                </div>)
                  : (<button onClick={this.toggleEditTrainerName}>edit</button>)
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateTrainerForm;




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


