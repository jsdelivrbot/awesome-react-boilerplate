import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createField } from 'redux-form-field';

const component = ({ meta: { touched, error, warning }, input, label }) => {

    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                <textarea {...input} placeholder={label} className="form-control"/>
                {error}
            </div>
        </div>
    );

};

export default createField(component, {
    label: PropTypes.string.isRequired
});


