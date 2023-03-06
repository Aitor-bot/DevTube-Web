import React, { useState } from 'react';
import './Sidebar.scss';
import aforguesa from "../../assets/aforguesa.webp";
import afro from "../../assets/afro.webp";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        className="sidebar-toggle"
        src={isOpen ? afro : aforguesa}
        alt="Toggle Sidebar"
        onClick={toggleSidebar}
      />
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
