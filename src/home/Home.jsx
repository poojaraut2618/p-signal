import React from 'react';
import './Home.css';
import { FaUserFriends, FaCloudDownloadAlt, FaChartBar } from 'react-icons/fa'; // Example icons
import { MdOutlineSecurity } from "react-icons/md";
import aboutImage from './aboutSection.png';
import Button from 'react-bootstrap/Button';
import WhyPSignal from './WhyPSignal';
import Values from './Values';
import Services from './Services';
import About from './../about/About';
import {useNavigate} from 'react-router-dom';

const IconBox = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
  );
};

const IconBoxSection = () => {
  const iconBoxes = [
    {
      icon: <FaUserFriends />,
      title: 'Non-Technical Founder',
    },
    {
      icon: <FaCloudDownloadAlt  />,
      title: 'Technology is Hard',
    },
    {
      icon: <MdOutlineSecurity  />,
      title: 'InExperienced Team',
    },
    {
      icon: <FaChartBar />,
      title: 'Unable to Scale',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-9">ARE THESE YOUR <span className="headingText" >CHALLENGES?</span> </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {iconBoxes.map((box, index) => (
            <IconBox
              key={index}
              icon={box.icon}
              title={box.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/about');
  }
  return (
    <>
      {/* Banner Section */}
      <div className="banner-section">
      </div>

      {/* Icon Box Section */}
      <IconBoxSection />

      <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 1st Column: Text */}
          <div className="text-column">
            <h2 className="text-3xl font-bold mb-4"><span className="headingText" >ACCELERATE</span> YOUR <br/> BUSINESS WITH VIRTUAL <br/><span className="headingText" > CTO SERVICES</span>
            </h2>
          </div>

          {/* 2nd Column: Image */}
          <div className="image-column">
            <img
              src={aboutImage} // Replace with your image URL
              alt="Description of the image"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNavigate}> 
        KNOW MORE
      </button>
    </div>
    </section>

    <WhyPSignal/>

    <Values/>

    <Services/>
    </>
  );
};

export default Home;
