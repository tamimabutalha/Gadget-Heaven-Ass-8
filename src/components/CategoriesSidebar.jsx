
import React from 'react';

const CategoriesSidebar = ({ setCategory }) => {
    const categories = ["All Products", "Computers", "Phones", "Smart Watches", "Chargers", "Power Banks"];

    return (
        <div className='flex flex-col gap-4 mt-10'>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setCategory(category)}
                    className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18'>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoriesSidebar;
