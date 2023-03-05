import "./HomeVideos.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeVideos({ category }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        let endpoint = "http://localhost:3001/getData";
        if (category) {
          endpoint = `http://localhost:3001/getData/${category}`;
        }
        const response = await axios.get(endpoint);
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideos();
  }, [category]);

  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }


  return (
    <div className="homevideos_container">
      <div className="homevideos_grid-container">
        {videos.map((video) => (
          <Link to={`/video/${video.videoId}`} key={video.videoId}>
            <div className="homevideos_image">
              <div className="homevideos_duration">{formatDuration(video.videoDuration)}</div>
              <img src={video.videoThumbnail} alt="videoThumbnail" />
            </div>
            <h3 title={video.videoTitle}>{video.videoTitle}</h3>
            <div className="homevideos_video-info">
              <p>{video.creator.name}</p>
              <div className="homevideos_video-data">
                <span>{video.viewCount} views</span>
                <span>{video.publishData.slice(0, 10)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeVideos;