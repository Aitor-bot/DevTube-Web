import "./HomeVideos.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeVideos({ category }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        let endpoint = "https://devtube-production.up.railway.app/getData";
        if (category) {
          endpoint = `https://devtube-production.up.railway.app/getData/${category}`;
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
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    const seconds = duration % 60;
    return `${hours > 0 ? hours + ':' : ''}${minutes < 10 && hours > 0 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }



  return (
    <div className="homevideos_container">
      <div className="homevideos_grid-container">
        {videos.map((video) => (
          <div key={video.videoId}>
            <Link to={`/video/${video.videoId}`}>
              <div className="homevideos_image">
                <div className="homevideos_duration">{formatDuration(video.videoDuration)}</div>
                <img src={video.videoThumbnail} alt="videoThumbnail" />
              </div>
              <h3 title={video.videoTitle}>{video.videoTitle}</h3>
            </Link>
            <div className="homevideos_video-info">
              <Link to={`/creator/${video.creator.name}`}>
                <p>{video.creator.name}</p>
              </Link>
              <div className="homevideos_video-data">
                <span>{video.viewCount} views</span>
                <span>{video.publishData.slice(0, 10)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeVideos;