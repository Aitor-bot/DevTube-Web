import React, { useState, useEffect } from 'react';
import './DevelopersList.scss';
import axios from 'axios';

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
            {devData.map((dev) => (
                <div key={dev.name}>{dev.name}</div>
            ))}
        </div>
    );
}

export default DevelopersList;
