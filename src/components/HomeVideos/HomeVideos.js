import "./HomeVideos.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get("http://localhost:3001/getData");
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="homevideos_container">
      <div className="homevideos_grid-container">
        {videos.map((video) => (
          <Link to={`/video/${video.videoId}`} key={video.videoId}>

              <div className="homevideos_image">
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
