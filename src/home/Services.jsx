import React from 'react'
import ai from '../services/ai.png';
import inte from '../services/inte.png';
import sre from '../services/sre.png';
import app from '../services/app.png';
import {useNavigate} from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/services');
  }
    return (
        <>
           <div className="container mx-auto py-8 text-center">
        {/* 4-Column Grid */}
        <h2 className="text-3xl font-bold mb-4">OUR  <span className="headingText" >SERVICES</span></h2>
        <p className="text-center mb-8 text-lg">P-Signal can fast track your company’s progress in any of the following areas.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Column 1 */}
        <div className="flex flex-col items-center shadow-lg p-[15px] rounded-xl">
         
            <img src={ai} alt="" className="w-12 h-12 mb-4"/>

          <h3 className="text-xl font-bold mb-2">Analytics, AI/ML</h3>
          <p className="text-gray-600">Selecting the right BI stack, enhancing your existing BI solution and helping you build ML and AI models from POC all the way to deployment.</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center p-[15px] rounded-xl shadow-lg">
          
          <img src={inte} alt="" className="w-12 h-12 mb-4"/>

          <h3 className="text-xl font-bold mb-2">Integration</h3>
          <p className="text-gray-600">Build and Maintain Data Extraction, Transformation, Loading and Management using open source and/or licensed software.</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center p-[15px] rounded-xl shadow-lg">
          <img src={sre} alt="" className="w-12 h-12 mb-4"/>
          <h3 className="text-xl font-bold mb-2">SRE / DevOps</h3>
          <p className="text-gray-600">Improve your availability, latency, performance, efficiency, change management, monitoring, emergency response, and capacity planning</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center p-[15px] rounded-xl shadow-lg">
          <img src={app} alt="" className="w-12 h-12 mb-4"/>
          <h3 className="text-xl font-bold mb-2">Application Modernization</h3>
          <p className="text-gray-600">Migrate your legacy applications to newer computing approaches, including newer languages, frameworks and infrastructure platforms.</p>
        </div>
      </div>
      <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6" onClick={handleNavigate}>
        KNOW MORE
      </button>
    </div> 
        </>
    )
}

export default Services;
