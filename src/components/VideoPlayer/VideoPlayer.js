import './VideoPlayer.scss';
import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer() {
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        },
    };

    return (
        <div className="videoplayer_container">
            <YouTube videoId="kaTR_JXGgxE" opts={opts} onReady={onReady} />
        </div>
    );
}

export default VideoPlayer;
