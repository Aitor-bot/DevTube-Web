import React, { useState, useEffect } from 'react';
import './DevelopersList.scss';
import axios from 'axios';
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner';

function DevelopersList() {
    const [devData, setDevData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDevelopers() {
            try {
                const response = await axios.get("https://devtube-production.up.railway.app/getAllCreators");
                setDevData(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchDevelopers();
    }, []);

    return (
        <div className="devlist_container">
            {loading ? (
                <Spinner />
            ) : (
                <div className="devlist_grid-container">
                    {devData.map((dev) => (
                        <Link to={`/creator/${dev.name}`} key={dev._id}>
                            <div className="devlist_image">
                                <img src={dev.avatar} alt="dev avatar" />
                            </div>
                            <h3>{dev.name}</h3>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DevelopersList;
