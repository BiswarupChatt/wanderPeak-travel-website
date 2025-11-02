import { useState, useEffect } from "react";

/**
 * Custom hook for typing & deleting text animation
 * @param {string[]} words - Array of words to animate
 * @param {number} typingSpeed - Speed of typing each character (ms)
 * @param {number} deletingSpeed - Speed of deleting each character (ms)
 * @param {number} delayBetweenWords - Delay before deleting starts (ms)
 * @returns {string} - The current animated text
 */
export const useTypingEffect = (
    words = [],
    typingSpeed = 150,
    deletingSpeed = 100,
    delayBetweenWords = 1000
) => {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!words.length) return;

        const currentWord = words[index];

        if (isTyping) {
            // Typing phase
            if (currentText !== currentWord) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                // Pause before deleting
                const delay = setTimeout(() => setIsTyping(false), delayBetweenWords);
                return () => clearTimeout(delay);
            }
        } else {
            // Deleting phase
            if (currentText === "") {
                setIndex((prev) => (prev + 1) % words.length);
                setIsTyping(true);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, currentText.length - 1));
                }, deletingSpeed);
                return () => clearTimeout(timeout);
            }
        }
    }, [currentText, isTyping, index, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return currentText;
};
