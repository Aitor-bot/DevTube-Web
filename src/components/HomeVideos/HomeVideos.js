import './HomeVideos.scss';
import React, { useState, useEffect } from "react";
import axios from "axios";


function HomeVideos() {

    const [videos, setVideo] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get("http://localhost:3001/getAllData");
                setVideo(response.data);
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
                    <div className="homevideos_grid" key={video.videoId}>
                        <div className="homevideos_image">
                            <img src={video.videoThumbnail} alt="videoThumbnail" />
                        </div>
                        <h3>{video.videoTitle}</h3>
                        <p>{video.creator.name}</p>
                        <div className='homevideos_video-info'>
                            <span>{video.viewCount} views</span>
                            <span>{video.publishData.slice(0, 10)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeVideos;
