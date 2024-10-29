import PropTypes from 'prop-types';


const WPM = ({ wpm, bestWpm }) => {
    return (
        <div className="wpm-display">
            <p>Your WPM: <span className="wpm-score">{wpm}</span></p>
            <p>Best WPM: <span className="best-wpm-score">{bestWpm}</span></p>
            {wpm >= bestWpm && wpm > 0 && (
                <p className="congrats-message">🎉 Congratulations on your new best score! 🎉</p>
            )}
        </div>
    );
};

export default WPM;
