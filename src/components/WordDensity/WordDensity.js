import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WordDensity.scss";

function WordDensity() {
    const [wordCount, setWordCount] = useState(0);
    const [wordsPerMinute, setWordsPerMinute] = useState(0);
    const [topWords, setTopWords] = useState([]);

    useEffect(() => {
        async function fetchWordData() {
            try {
                const response = await axios.get(
                    "http://localhost:3001/getTranscriptionDataForVideo/NGmIZD2bXsE"
                );
                setWordCount(response.data.wordCount);
                setWordsPerMinute(response.data.wordsPerMinute);
                setTopWords(response.data.topWords);
            } catch (error) {
                console.log(error);
            }
        }
        fetchWordData();
    }, []);

    return (
        <div className="worddensity_container">
            <div className="worddensity_details">
                <h3>Details</h3>
                <div className="word_count">{wordCount} words</div>
                <div className="words_per_minute">{Math.floor(wordsPerMinute)} words per minute</div>
            </div>
            <h3 className="worddensity_title">Word Density</h3>
            {topWords.map((word) => (
                <div className="word_density" key={word._id}>
                    {word.word} {word.count}
                </div>
            ))}
        </div>
    );
}

export default WordDensity;
