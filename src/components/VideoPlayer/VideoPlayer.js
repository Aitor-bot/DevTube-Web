import './VideoPlayer.scss';
import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import axios from "axios";


function VideoPlayer() {
    
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get("http://localhost:3001/getAllData");
                setVideo(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchVideos();
    }, []);

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts = {
        height: '180',
        width: '305',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        },
        origin: window.location.origin,
    };

    return (
        <div className="videoplayer_container">
            {videos.map((video) => (
                <div key={video.videoId}>
                    <YouTube videoId={video.videoId} opts={opts} onReady={onReady} />
                </div>
            ))}
        </div>
    );
}

export default VideoPlayer;
