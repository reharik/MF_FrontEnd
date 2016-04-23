/////**
//// * Created by reharik on 3/12/16.
//// */
import React from 'react';
import Input from './../FormElements/Input';
import {reduxForm} from 'redux-form';
import { Button } from 'react-bootstrap';
import { loginUser } from './../../actions/authActions.js'
import buildSchema from 'redux-form-schema';

const schema = {
    'userName': {
        label: 'User Name',
        required: true
    },
    'password' :{
        label:'Password',
        required:true
    }
};

var {fields, validate} = buildSchema(schema);


//MenuItemList.propTypes = {
//    items: PropTypes.arrayOf(PropTypes.shape({
//        text: PropTypes.string.isRequired
//    }).isRequired).isRequired,
//    onMenuItemClick: PropTypes.func.isRequired
//};


var SignInForm =({fields: {userName, password}, resetForm, handleSubmit, submitting}) =>
    (<div id="outer-wrapper">
            <div className="content-outer" >
                <div className="content-header"></div>
                <div className="content-inner norequired">
                    <div id="messageContainer"></div>
                    <div className="signin">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="span10">
                                    <label className="big">Sign In</label>
                                </div>
                            </div>
                            <div className="row">
                                <Input property={userName} />
                            </div>
                            <div className="row">
                                <Input property={password}  />
                            </div>
                            <div className="footer">
                                <Button name="save" id="save" type="submit" className="save kyt_submitButton" disabled={submitting}>
                                    {submitting ? <i/> : <i/>} Sign In
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="content-footer"></div>
            </div>
        </div>
    );

export default reduxForm({
    form    : 'login',
    fields ,
    validate,
    onSubmit: loginUser
})(SignInForm);
