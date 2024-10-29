import React from 'react';
import PropTypes from 'prop-types';


const Typing = ({ value, onChange, inputRef }) => {
    return (
        <input
            type="text"
            className="typing-input"
            value={value}
            onChange={onChange}
            ref={inputRef}
            placeholder="Start typing here..."
            autoFocus
        />
    );
};


export default Typing;
