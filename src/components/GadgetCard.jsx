import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';


const GadgetCard = ({gadgets}) => {
    const {product_title, product_image, description, price, product_id} = gadgets
    return (
        <Link to={`/GadgetsSection/${product_id}`}>
            <div className="card card-compact bg-base-100 w-52 shadow-xl ">
                    <figure>
                        <img
                            src={product_image}
                            className=' object-cover w-[282px] h-[150px]  p-2 rounded-3xl '
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <p> Price: {price}$</p>
                        <div className="card-actions justify-end">
                        <Button>View Details</Button>
                        </div>
                    </div>
                </div>
        </Link>
    );
};

export default GadgetCard;