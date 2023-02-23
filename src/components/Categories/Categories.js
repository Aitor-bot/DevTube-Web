import './Categories.scss';

function Categories() {
    return (
        <div className="categories_container">
            <h1 className='categories_title'>Explorar</h1>
            <div className="categories_gridcontainer">
                <div className='categories_layout' >
                    <a href="!#">
                        <p className="category-label">
                            Novedades
                        </p>
                    </a>
                </div>
                <div className='categories_layout'>
                    <a href="!#">
                        <p className="category-label">
                            Top Devs
                        </p>
                    </a>
                </div>
                <div className='categories_layout'>
                    <a href="!#">
                        <p className="category-label">
                            Desarrollo Web
                        </p>
                    </a>
                </div>
                <div className='categories_layout'>
                    <a href="!#">
                        <p className="category-label">
                            Desarrollo App
                        </p>
                    </a>
                </div>
                <div className='categories_layout'>
                    <a href="!#">
                        <p className="category-label">
                            Kukoro
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Categories;
