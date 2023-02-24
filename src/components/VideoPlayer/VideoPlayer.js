import './VideoPlayer.scss';

import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';

function VideoPlayer({ videoId }) {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        async function fetchVideo() {
            try {
                const response = await axios.get(`http://localhost:3001/getVideoData/${videoId}`);
                setVideo(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchVideo();
    }, [videoId]);

    const opts = {
        height: '811',
        width: '2544',
        playerVars: {
            autoplay: 1,
        },
    };

    function giveFormatToDescription(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const lines = text.split('\n');
        const paragraphs = lines.map((line, index) => {
            const htmlLine = line.replace(urlRegex, '<a href="$1" target="_blank" rel="noreferrer" style="color:#3ea6ff;text-decoration:none;">$1</a>');
            return <p key={index} dangerouslySetInnerHTML={{ __html: htmlLine }} />;
        });
        return paragraphs;
    }

    return (
        <div>
            {video ? (
                <div className='videoplayer_container'>
                    <YouTube className='videoplayer_youtube' videoId={videoId} opts={opts} />
                    <h1 className='videoplayer_title'>{video.videoTitle}</h1>
                    <div className="videoplayer_info">
                        <img src={video.creator.avatar} alt="Channel Avatar" />
                        <div>
                            <h2 className='videoplayer_channelname'>{video.creator.name}</h2>
                            <p className='videoplayer_subs'>{video.creator.subscribersCount} suscriptores</p>
                        </div>
                    </div>
                    <div className='videoplayer_data'>
                        <span className='videoplayer_data-views'>{video.viewCount} visitas</span>
                        <span className='videoplayer_data-publish'>{video.publishData.slice(0, 10)}</span>
                        <div className="videoplayer_data-description">{giveFormatToDescription(video.videoDescription)}</div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default VideoPlayer;