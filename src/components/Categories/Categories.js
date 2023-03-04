import './Categories.scss';

function Categories() {
    const categories = [
        { name: "Web dev" },
        { name: "App dev" },
        { name: "Game dev" },
        { name: "Hacking" },
        { name: "Kukoro" },
    ];

    return (
        <div className="categories_container">
            <h1 className="categories_title">Explorar</h1>
            <div className="categories_gridcontainer">
                {categories.map((category, index) => (
                    <div className="categories_layout" key={index}>
                        <a href="!#">
                            <p className="category-label">{category.name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;