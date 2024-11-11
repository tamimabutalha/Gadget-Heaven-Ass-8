import React from 'react';
import { useLoaderData, useParams } from
    'react-router-dom';


const GadgetsDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    console.log(data, product_id)
    const id = parseInt(product_id);
    const gadget = data.find(gadget => gadget.product_id === id);

    if (!gadget) return <div>Product not found</div>;
    const handleAddToCard = () =>{

    }

    return (


        <div className=''>

            <div className='bg-[#9538E2] m text-white relative pt-6 pb-8'>
                <h2 className="text-[32px] font-bold text-center">Product Details</h2>
                <p className=" text-center ">
                    Explore the latest gadgets that will take your experience to the next
                    level. From smart devices to <br /> the coolest accessories, we have it all!
                </p>
            </div>
            <div className="hero bg-base-200 min-h-screen w-1/2 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={gadget.product_image}
                        className="max-w-sm rounded-lg shadow-2xl w-72 " />
                    <div className='text-black'>
                        <h1 className="text-xl font-bold">{gadget.product_title}</h1>
                        <p className="">
                            Price: {gadget.price}$
                        </p>
                        <button className="btn btn-outline btn-success my-3 rounded-3xl">In Stock</button>
                        <br />
                        <p className='font-sm'>
                            {gadget.description}
                        </p>
                        <ul>
                            <li><a href="">{gadget.specification}</a></li>
                        </ul>

                        <button onClick={handleAddToCard} className="px-5 py-2 border-2 border-purple-500 rounded-3xl font-semibold hover:bg-purple-600 hover:text-white mr-12">Add To Card </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsDetails;
