import React from 'react'
import {useNavigate} from 'react-router-dom';

const WhyPSignal = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/about');
    }
    return (
        <>
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold">WHY <span className="headingText" >P-Signal</span></h2>
                    {/* background circle */}
                    <div className="w-52 h-52 z-1 left-60 bg-[#FEE7D9] rounded-full absolute circle"></div>
                    {/* Zig-Zag List on top of the circle */}
                    <ul className="relative z-10 text-left">
                        <li className="absolute top-8 left-80 text-md font-bold bg-white shadow-lg p-2 shadow-lg">WE "GET IT"</li>
                        <li className="absolute top-20 right-20 text-md font-bold bg-white p-2 shadow-lg">COST EFFICIENCY</li>
                        <li className="absolute top-32 left-80 text-md font-bold bg-white p-2 shadow-lg">PRAGMATIC, HANDS-ON APPROACH</li>
                    </ul>

                </div>

                {/* Second Column */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold">WHO <span className="headingText" >WE ARE?</span></h2>

                    <p className="text-center text-lg ">
                        For the past 15+ years, we have helped various SaaS companies grow, scale and ultimately have seen successful exits.
                        We have across multiple organizations consistently
                        seen a huge gap in engineering/delivery
                        teams’ ability to understand a customer’s
                        (internal or external) need.
                    </p>

                    <div className="flex justify-center m-8">
                        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNavigate}>
                        KNOW MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default WhyPSignal;
