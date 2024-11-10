import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetsDetails = () => {
    const {product_id} = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);
    const gadgets = data.find(gadgets => gadgets.product_id === id);
    const {productId, product_image} = gadgets;

    
    return (
        <div>
            <h2>Details : {product_id}</h2>
            <img src={product_image} alt="" />

        </div>
    );
};

export default GadgetsDetails;