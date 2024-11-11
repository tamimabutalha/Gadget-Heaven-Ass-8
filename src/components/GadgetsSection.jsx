import React, { useEffect, useState } from 'react';
import GadgetCard from './GadgetCard';
import { Result } from 'postcss';
import CategoriesSidebar from './CategoriesSidebar';

const GadgetsSection = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [category, setCategory] = useState("All Products"); // Default to "All Products"

    useEffect(() => {
        // Fetch gadget data
        fetch('../../public/gadgets.json')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setFilteredData(result); // Initialize with all products
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        // Update filteredData based on selected category
        if (category === "All Products") {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((item) => item.category === category));
        }
    }, [category, data]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='-mt-10  text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex gap-4 justify-between'>
                <div className='flex flex-col gap-4 -mt-9'>
                    <button className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18 '>All Product</button>
                    <button className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18 '>Laptops</button>
                    <button className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18 '>Phones</button>
                    <button className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18 '>Accessories</button>
                    <button className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18 '>Smart Watches</button>
                    <button className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18 '>MacBook</button>
                    <button className='rounded-3xl hover:text-white btn hover:bg-purple-600 px-18 '>Iphone</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 gap-x-6 mt-10">
                    {
                        data.map((gadgets) => <GadgetCard gadgets={gadgets} key={gadgets.product_id} />)
                    }
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='mt-10 text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
                    <div className='flex gap-4 justify-between'>
                        <CategoriesSidebar setCategory={setCategory} /> {/* Pass setCategory */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5 gap-x-6 mt-10">
                            {filteredData.map((gadget) => (
                                <GadgetCard gadgets={gadget} key={gadget.product_id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsSection;