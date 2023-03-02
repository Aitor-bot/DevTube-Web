import React, { useState } from 'react';
import './NavigationLinks.scss';

function NavigationLinks({ onLinkClick }) {
  const [selectedLink, setSelectedLink] = useState('newvideos');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    onLinkClick(link);
  };

  return (
    <div className="navigation-links-container">
      <button
        className={`navigation-link ${selectedLink === 'newvideos' ? 'selected' : ''}`}
        onClick={() => handleLinkClick('newvideos')}
      >
        Novedades
      </button>
      <button
        className={`navigation-link ${selectedLink === 'topdevelopers' ? 'selected' : ''}`}
        onClick={() => handleLinkClick('topdevelopers')}
      >
        Top Developers
      </button>
    </div>
  );
}


export default NavigationLinks;
