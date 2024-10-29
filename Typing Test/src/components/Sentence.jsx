import React from 'react';
import PropTypes from 'prop-types';


const Sentence = ({ sentence }) => {
    return (
        <div className="sentence-display">
            <p>Type the following sentence as quickly as you can:</p>
            <blockquote>{sentence}</blockquote>
        </div>
    );
};

export default Sentence;
