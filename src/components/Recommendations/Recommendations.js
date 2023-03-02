import './Recommendations.scss';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Recommendations() {
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get("http://localhost:3001/getData");
                setVideo(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchVideos();
    }, []);

    return (
        <div className="recommendations_container">
            {videos.map((video) => (
                <Link to={`/video/${video.videoId}`} key={video.videoId}>
                    <div className="recommendations_subcontainer" key={video.videoId}>
                        <div className="recommendations_image">
                            <img src={video.videoThumbnail} alt="videoThumbnail" />
                        </div>
                        <div className="recommendations_info">
                            <h3 title={video.videoTitle} className="recommendations_title">{video.videoTitle}</h3>
                            <div className="recommendations_creator">
                                {video.creator.name}
                            </div>
                            <div className='recommendations_details'>{video.viewCount} {video.publishData.slice(0, 10)}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Recommendations;
