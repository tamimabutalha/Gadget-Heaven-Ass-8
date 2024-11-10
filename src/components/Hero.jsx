import React from 'react';
import banner from "../assets/banner.jpg"

const Hero = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-[#9538E2] rounded-2xl mb-[330px] text-white flex flex-col justify-center items-center text-center py-4 h-[580px] rounded-b-[32px] relative">
                <h2 className="text-[50px] font-bold my-4 px-5">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h2>
                <p className="text-[16px] py-2">
                    Explore the latest gadgets that will take your experience to the next
                    level. From smart devices <br /> to the coolest accessories, we have it all!
                </p>
                <a>
                    <button className="btn rounded-2xl">Shop Now</button>
                </a>

                <div className="absolute w-2/3 left-1/2 transform h-[250px] -translate-x-1/2 top-[450px] bg-[#ffffff65] p-4 rounded-2xl shadow-lg ">
                    <img
                        src={banner}
                        alt="VR Headset"
                        className="rounded-2xl w-full h-[30rem]"
                    />
                </div>
            </div>

        </div>
    );
};

export default Hero;