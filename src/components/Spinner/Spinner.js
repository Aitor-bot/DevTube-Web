import './Spinner.scss';
import React from "react";
import aforspinner from "../../assets/evilafor.webp"

function Spinner() {

    return (
        <div className="spinner">
            <img src={aforspinner} alt="spinner"></img>
        </div>
    );
}

export default Spinner;
