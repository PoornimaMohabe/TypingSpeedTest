import { useState, useRef, useEffect } from 'react';

const useTypingSpeed = (sentence, typedText) => {
    const [wpm, setWpm] = useState(null);
    const [bestWpm, setBestWpm] = useState(0);
    const startTime = useRef(null);

    useEffect(() => {
        if (typedText.length === 1 && !startTime.current) {
            startTime.current = new Date();
        }

        if (typedText === sentence) {
            calculateWPM();
        }
    }, [typedText]);

    const calculateWPM = () => {
        const endTime = new Date();
        const timeTakenInMinutes = (endTime - startTime.current) / 1000 / 60;
        const wordCount = sentence.split(" ").length;
        const currentWpm = Math.round(wordCount / timeTakenInMinutes);

        setWpm(currentWpm);

        if (currentWpm > bestWpm) {
            setBestWpm(currentWpm);
        }
    };

    const reset = () => {
        setWpm(null);
        startTime.current = null;
    };

    return { wpm, bestWpm, reset };
};

export default useTypingSpeed;
