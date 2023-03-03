import React, { useState, useEffect } from 'react';
import './DevelopersList.scss';
import axios from 'axios';
import { Link } from "react-router-dom";

function DevelopersList() {
    const [devData, setDevData] = useState([])

    

    useEffect(() => {
        async function fetchDevelopers() {
            try {
                const response = await axios.get("http://localhost:3001/getCreatorsData")
                setDevData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDevelopers()
    }, [])

    return (
        <div className="devlist_container">
            <div className="devlist_grid-container">
                {devData.map((dev) => (
                    <Link key={dev._id}>
                        <div className="devlist_image">
                            <img src={dev.avatar} alt="dev avatar" />
                        </div>
                        <h3>{dev.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default DevelopersList;
