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
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {video ? (
        <div>
          <YouTube videoId={videoId} opts={opts} />
          <h1>{video.videoTitle}</h1>
          <div className="video-player-info">
            <img src={video.creator.avatar} alt="Channel Avatar" />
            <div>
              <h2>{video.creator.name}</h2>
              <p>{video.creator.subscribersCount} subscribers</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VideoPlayer;
