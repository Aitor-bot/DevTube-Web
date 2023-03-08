import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Sidebar.scss';
import aforguesa from "../../assets/aforguesa.webp";
import afro from "../../assets/afro.webp";
import aforguesabuena from "../../assets/aforguesabuena.webp"
import evilafor from "../../assets/evilafor.webp"
import { AiFillHome, AiFillFolder, AiFillAlert, AiFillPlaySquare } from "react-icons/ai";
import DevTubeLogo from "../DevTubeLogo/DevtubeLogo.js"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarLinks = [
    {
      imageSrc: afro,
      linkText: 'Afor_Digital',
      linkUrl: '/creator/afor%20digital'
    },
    {
      imageSrc: afro,
      linkText: 'Aforcita',
      linkUrl: '/creator/afor%20digital'
    },
    {
      imageSrc: afro,
      linkText: 'Aforjefa',
      linkUrl: '/creator/afor%20digital'
    },
    {
      imageSrc: afro,
      linkText: 'A4',
      linkUrl: '/creator/afor%20digital'
    },
    {
      imageSrc: afro,
      linkText: 'Alfajor',
      linkUrl: '/creator/afor%20digital'
    },
    {
      imageSrc: afro,
      linkText: 'Afro',
      linkUrl: '/creator/afor%20digital'
    },
    {
      imageSrc: afro,
      linkText: 'Afrodita',
      linkUrl: '/creator/afor%20digital'
    },
    {
      imageSrc: evilafor,
      linkText: 'EvilAfor',
      linkUrl: '/creator/afor%20digital'
    },
  ];

  return (
    <div className='sidebar_container'>
      <img
        className="sidebar_img"
        src={isOpen ? aforguesabuena : aforguesa}
        alt="Toggle Sidebar"
        onClick={toggleSidebar}
      />
      <Link className='sidebar_logo' to="/">
        <DevTubeLogo></DevTubeLogo>
      </Link>
      <nav className={`sidebar_nav ${isOpen ? 'open' : ''}`}>
        <ul className='sidebar_ul'>
          <li>
            <Link to="/">
              <AiFillHome size={25} />
              <span className="sidebar_link-text">Home</span>
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
          {sidebarLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.linkUrl}>
                <img className='sidebar_channel-avatar' src={link.imageSrc} alt="channel avatar" />
                <span className="sidebar_link-text">{link.linkText}</span>
              </Link>
            </li>
          ))}
          <div className="sidebar_separator"></div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
