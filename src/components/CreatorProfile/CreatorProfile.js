import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CreatorProfile() {
  const { creatorName } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchCreatorData() {
      try {
        const response = await axios.get(`http://localhost:3001/getCreatorData/${creatorName}`);
        setVideos(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCreatorData();
  }, [creatorName]);

  return (
    <div>
      <div>
        {videos.map((video) => (
          <Link to={`/video/${video.videoId}`} key={video.videoId}>
            <div>
              <img src={video.videoThumbnail} alt={video.videoTitle} />
              <h3>{video.videoTitle}</h3>
              <p>{video.videoDescription}</p>
              <div>
                <span>{video.viewCount} views</span>
                <span>{video.videoDuration}</span>
                <span>{video.publishData}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CreatorProfile;
