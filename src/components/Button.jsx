import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='px-5 py-2 border-2 border-purple-500 rounded-3xl text-purple-500 font-semibold hover:bg-purple-600 hover:text-white mr-12'>
            {children}
        </button>
    );
};

export default Button;