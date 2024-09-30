import React from 'react'
import { FaUser } from 'react-icons/fa'; // Example icons
import { IoDiamond } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";



function Values() {
    return (
        <>
        <div className="container mx-auto py-12 ">
            {/* 3-Column Grid */}
            <h2 className="text-3xl font-bold mb-10">OUR CORE <span className="headingText" >VALUES</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Column 1 */}

                <div className="flex flex-col items-center">
                    {/* Circle with Icon and Text */}
                    <div className="w-48 h-48 bg-[#FB853C] rounded-full flex flex-col justify-center items-center mb-4 shadow-lg">
                        <FaUser className="text-white text-5xl mb-2" /> {/* Icon */}
                        <h3 className="text-white text-lg font-bold">Customer Focus</h3> {/* Text */}
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center">
                    {/* Circle with Icon and Text */}
                    <div className="w-48 h-48 bg-[#FB853C] rounded-full flex flex-col justify-center items-center mb-4 shadow-lg">
                        <MdOutlineSecurity className="text-white text-5xl mb-2" /> {/* Icon */}
                        <h3 className="text-white text-lg font-bold">Trust</h3> {/* Text */}
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center">
                    {/* Circle with Icon and Text */}
                    <div className="w-48 h-48 bg-[#FB853C] rounded-full flex flex-col justify-center items-center mb-4 shadow-lg">
                        <IoDiamond className="text-white text-5xl mb-2" /> {/* Icon */}
                        <h3 className="text-white text-lg font-bold">Respect</h3> {/* Text */}
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}

export default Values;