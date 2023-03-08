import './Recommendations.scss';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner';


function Recommendations() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await axios.get("https://devtube-production.up.railway.app/getData");
                setVideos(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchVideos();
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={`recommendations_container ${loading ? 'loading' : ''}`}>
            {loading ? (
                <Spinner />
            ) : (
                videos.map((video) => (
                    <Link to={`/video/${video.videoId}`} key={video.videoId}
                        onClick={goToTop}
                    >
                        <div className="recommendations_subcontainer" key={video.videoId}>
                            <div className="recommendations_image">
                                <img src={video.videoThumbnail} alt="videoThumbnail" />
                            </div>
                            <div className="recommendations_info">
                                <h3 title={video.videoTitle} className="recommendations_title">{video.videoTitle}</h3>
                                <div className="recommendations_creator">
                                    <Link to={`/creator/${video.creator.name}`}>
                                        <p>{video.creator.name}</p>
                                    </Link>
                                </div>

                                <div className='recommendations_details'>{video.viewCount} {video.publishData.slice(0, 10)}</div>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
}

export default Recommendations;
