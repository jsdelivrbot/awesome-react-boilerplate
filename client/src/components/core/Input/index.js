import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createField } from '../../../utiles'

const component = ({ meta: { touched, error, warning }, input, type, label }) => {

    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {error}
            </div>
        </div>
    );

};

export default createField(component, {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
});


