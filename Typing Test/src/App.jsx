import React, { useState, useEffect, useRef } from 'react';
import Sentence from './components/Sentence';
import Typing from './components/Typing';
import WPM from './components/WPD';
import Reset from './components/Reset';
import './App.css';

const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Typing speed tests are fun and engaging",
    "Practice makes perfect",
    "A journey of a thousand miles begins with a single step",
    "Consistency is the key to success"
];

function App() {
    const [sentence, setSentence] = useState("");
    const [typedText, setTypedText] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(null);
    const [bestWpm, setBestWpm] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        setSentence(getRandomSentence());
    }, []);

    useEffect(() => {
        if (typedText === sentence) {
            calculateWPM();
        }
    }, [typedText]);

    const getRandomSentence = () => {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        return sentences[randomIndex];
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (!startTime) setStartTime(new Date());
        setTypedText(value);
    };

    const calculateWPM = () => {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000 / 60; 
        const wordCount = sentence.split(" ").length;
        const currentWpm = Math.round(wordCount / timeTaken);
        setWpm(currentWpm);

        if (currentWpm > bestWpm) {
            setBestWpm(currentWpm);
        }
    };

    const resetTest = () => {
        setSentence(getRandomSentence());
        setTypedText("");
        setWpm(null);
        setStartTime(null);
        inputRef.current.focus();
    };

    return (
        <div className="app-container">
            <h1 className="app-heading">Typing Speed Test</h1>
            <Sentence sentence={sentence} />
            <Typing
                value={typedText}
                onChange={handleInputChange}
                inputRef={inputRef}
            />
            {wpm !== null && (
                <WPM wpm={wpm} bestWpm={bestWpm} />
            )}
            <Reset onClick={resetTest} />
        </div>
    );
}

export default App;
