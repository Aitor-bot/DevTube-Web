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
                <div className='devlist_subcontainer' key={dev._id}>
                    <img className='devlist_image' src={dev.avatar} alt="developers-avatar"></img> 
                    <div className='devlist_data'>
                    <span>{dev.name}</span> 
                    <span>{dev.subscribersCount}</span>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default DevelopersList;
