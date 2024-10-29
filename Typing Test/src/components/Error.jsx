import React from 'react';
import PropTypes from 'prop-types';


const Error = ({ sentence, typedText }) => {
    const originalWords = sentence.split(" ");
    const typedWords = typedText.split(" ");

    return (
        <div className="error-highlight">
            {originalWords.map((word, index) => (
                <span
                    key={index}
                    className={typedWords[index] === word ? 'correct' : 'incorrect'}
                >
                    {word} 
                </span>
            ))}
        </div>
    );
};


export default Error;
