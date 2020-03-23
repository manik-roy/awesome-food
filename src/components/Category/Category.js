import React from 'react';
import './Category.css';

const Category = () => {
    return (
        <div className="category">
            <nav>
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>
        </div>
    );
};

export default Category;