import { React } from 'react';
import { FaUser, FaCode, FaMobileAlt, FaChartBar } from 'react-icons/fa'; // Example icons

const IconBox = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="text-4xl text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };

  