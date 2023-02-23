import React, { useState } from 'react';
import './NavigationLinks.scss';

function NavigationLinks() {
  const [selectedLink, setSelectedLink] = useState('novedades');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="navigation-links-container">
      <p
        className={`navigation-link ${selectedLink === 'novedades' ? 'selected' : ''}`}
        onClick={() => handleLinkClick('novedades')}
      >
        Novedades
      </p>
      <p
        className={`navigation-link ${selectedLink === 'top-developers' ? 'selected' : ''}`}
        onClick={() => handleLinkClick('top-developers')}
      >
        Top Developers
      </p>
    </div>
  );
}

export default NavigationLinks;
