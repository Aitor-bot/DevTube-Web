import './Categories.scss';
import { useState } from 'react';

function Categories({ onCategoryClick }) {
  const categories = [{ name: "All", endpoint: "" }, { name: "Web dev", endpoint: "webdev" }, { name: "App dev", endpoint: "appdev" }, { name: "Game dev", endpoint: "gamedev" }, { name: "Hacking", endpoint: "hacking" }, { name: "Kukoro", endpoint: "kukoro" },];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category.endpoint);
    onCategoryClick(category.endpoint);
  };

  return (
    <div className="categories_container">
      <h1 className="categories_title">Explore</h1>
      <div className="categories_gridcontainer">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button${selectedCategory === category.endpoint ? ' selected' : ''}`}
            onClick={() => handleClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;