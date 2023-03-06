import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Sidebar.scss';
import aforguesa from "../../assets/aforguesa.webp";
import afro from "../../assets/afro.webp";
import { AiFillHome, AiFillYoutube, AiFillFolder, AiFillAlert, AiFillPlaySquare } from "react-icons/ai";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar_container'>
      <img
        className="sidebar_img"
        src={isOpen ? afro : aforguesa}
        alt="Toggle Sidebar"
        onClick={toggleSidebar}
      />
      <nav className={`sidebar_nav ${isOpen ? 'open' : ''}`}>
        <ul className='sidebar_ul'>
          <li>
            <Link to="/">
              <AiFillHome size={25} />
              <span className="sidebar_link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/suscriptions">
              <AiFillYoutube size={25} />
              <span className="sidebar_link-text">Suscriptions</span>
            </Link>
          </li>
          <div className="sidebar_separator"></div>
          <li>
            <Link to="/resources">
              <AiFillFolder size={25} />
              <span className="sidebar_link-text">Resources</span>
            </Link>
          </li>
          <li>
            <Link to="/news">
              <AiFillAlert size={25} />
              <span className="sidebar_link-text">News</span>
            </Link>
          </li>
          <li>
            <Link to="/lofi">
              <AiFillPlaySquare size={25} />
              <span className="sidebar_link-text">LOFI</span>
            </Link>
          </li>
          <div className="sidebar_separator"></div>
          <div className="sidebar_mini-title">Subscriptions</div>
          <li>
            <Link to="/afor_digital">
              <img className='sidebar_channel-avatar' src={afro} alt="channel avatar"></img>
            <span className="sidebar_link-text">Afor_Digital</span>
            </Link>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
