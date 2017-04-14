import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createField } from 'redux-form-field';

const component = ({ meta: { touched, error, warning, invalid }, input, type, label }) => {

    return (
        <div className={`form-group ${touched && invalid ? 'has-danger': ''}`}>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && error}
            </div>
        </div>
    );

};

export default createField(component, {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
});


