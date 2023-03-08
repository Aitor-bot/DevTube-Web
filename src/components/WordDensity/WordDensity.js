import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WordDensity.scss";
import Spinner from '../Spinner/Spinner';

function WordDensity({ videoId }) {
    const [wordCount, setWordCount] = useState(0);
    const [wordsPerMinute, setWordsPerMinute] = useState(0);
    const [topWords, setTopWords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWordData() {
            try {
                const response = await axios.get(
                    `http://localhost:3001/getTranscriptionDataForVideo/${videoId}`
                );
                setWordCount(response.data.wordCount);
                setWordsPerMinute(response.data.wordsPerMinute);
                setTopWords(response.data.topWords);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);

            }
        }
        fetchWordData();
    }, [videoId]);

    return (
        <div className={`worddensity_container ${loading ? 'loading' : ''}`}>
            {loading ? (
                <Spinner className="worddensity_spinner" />
            ) : (
                <>
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
                </>
            )}
        </div>
    )
};

export default WordDensity;