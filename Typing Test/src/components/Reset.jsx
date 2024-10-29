import React from 'react';
import PropTypes from 'prop-types';


const Reset = ({ onClick }) => {
    return (
        <button className="reset-button" onClick={onClick}>
            Reset Test
        </button>
    );
};


export default Reset;
