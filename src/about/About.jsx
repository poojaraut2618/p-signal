import React from 'react'
import aboutImage from './aboutInfo.jpeg';
import './About.css';
import { FaUser } from 'react-icons/fa'; // Example icons
import { IoDiamond } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import vision from './Vision2.jpg';
import mission from './mission.jpg';
import founder from './founder_ceo.png';

const About = () => {
  return (
    <>
      {/* Page Title Section */}
      <div className="about-title flex items-center justify-center  bg-black bg-opacity-70 w-full">     
        <h2 className="text-white z-10">About P-Signal</h2>
      </div>

      {/* Two-Column Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Column 1: Image */}
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="Company Image"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Column 2: Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-4 text-left">
              <span className="headingText">P-SIGNAL:</span> TAILORED TECHNOLOGY SOLUTIONS FOR SMALL AND MID-SIZED
              <span className="headingText"> COMPANIES</span>
            </h2>
            <p className="text-gray-800 mb-6 text-lg">
            P-Signal is a forward-thinking technology partner dedicated to empowering small to mid-sized companies with the leadership and expertise needed to navigate today’s rapidly evolving digital landscape. We have a proven track record of helping businesses, especially PE/VC-backed B2B SaaS companies, achieve their goals through strategic technology adoption and innovation.

            Our company was founded on the belief that robust technology leadership should be accessible to organizations of all sizes, not just those with the resources to maintain full-time in-house teams. To address this need, we offer flexible, high-impact solutions such as <span className="headingText font-bold"> Fractional CTO Services, Application Modernization, Analytics & AI/ML, Integration, SRE/DevOps and Customer Success.</span>
            </p>
          </div>

        </div>
      </div>


      <div className="container mx-auto py-12 ">
            {/* 3-Column Grid */}
            <h2 className="text-3xl font-bold mb-10">OUR CORE <span className="headingText" >VALUES</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">

                {/* Column 1 */}
                <div className="flex flex-col items-center transition-all">
                    {/* Circle with Icon and Text */}
                    <div className="flex flex-col rounded-xl justify-center items-center mb-4 shadow-xl border p-6 ">
                    {/* Icon */}
                        <FaUser className="text-[#FB853C] text-5xl mb-2" /> 
                         {/* Text */}
                        <h3 className="text-gray-800 text-lg font-bold">Customer Focus</h3>
                        <p className="text-gray-600">
                        We prioritize our customers in every decision we make. By actively listening and responding to their unique needs, we deliver solutions that drive value and success. Whether through innovative products or expert CTO services, we aim to build lasting partnerships and ensure our customers achieve their goals. Your success is our mission.
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center transition-all">
                    {/* Circle with Icon and Text */}
                    <div className="flex flex-col rounded-xl justify-center items-center mb-4 shadow-xl border p-6 ">
                        <MdOutlineSecurity className="text-[#FB853C] text-5xl mb-2" /> {/* Icon */}
                        <h3 className="text-gray-800 text-lg font-bold">Trust</h3> {/* Text */}

                        <p className="text-gray-600">
                        Our success is built on the trust we establish with our clients and partners. At P-Signal, we are committed to clear communication, transparency, and ethical practices. By consistently delivering on our promises and standing by our values, we foster trust that drives meaningful, lasting relationships. We are your trusted partner in achieving success.
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center transition-all">
                    {/* Circle with Icon and Text */}
                    <div className="flex flex-col rounded-xl justify-center items-center mb-4 shadow-lg border p-6">
                        <IoDiamond className="text-[#FB853C] text-5xl mb-2" /> {/* Icon */}
                        <h3 className="text-gray-800 text-lg font-bold">Respect</h3> {/* Text */}

                        <p className="text-gray-600">
                        At P-Signal, respect is fundamental to how we operate and interact. We are dedicated to recognizing and valuing the unique qualities and viewpoints of each individual. Our approach encourages open dialogue, fosters inclusivity, and supports a positive work environment.                        </p>
                    </div>
                </div>

            </div>
        </div>

        {/* Two-Column Layout : Vision */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Column 1: Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-2 text-left">OUR
              <span className="headingText"> VISION</span>
            </h2>
            <h3 className="text-gray-900 text-2xl font-bold mb-2">Empowering businesses through innovative technology leadership.</h3>
            <p className="text-gray-800 mb-6 text-lg">
            At P-Signal, our vision is to be the trusted partner for companies striving to leverage cutting-edge technology, driving their growth and success in an ever-evolving digital landscape. We envision a future where organizations of all sizes can access world-class technology leadership, enabling them to innovate, scale, and thrive.
            </p>
          </div>

          {/* Column 2: Image */}
          <div className="flex justify-left">
            <img
              src={vision}
              alt="vision"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>

       {/* Two-Column Layout : Mission */}
       <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Column 1: Image */}
          <div className="flex justify-left">
            <img
              src={mission}
              alt="mission"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Column 2: Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-2 text-left">OUR
              <span className="headingText"> Mission</span>
            </h2>
            <h3 className="text-gray-900 text-2xl font-bold mb-2">Bridging the gap between technology and business success.</h3>
            <p className="text-gray-800 mb-6 text-lg">
            Our mission at P-Signal is to deliver tailored technology leadership and engineering solutions that empower small to mid-sized companies to achieve their strategic goals. By providing <span className="headingText font-bold">fractional CTO services, advanced analytics, integration, and modernization solutions</span>, we ensure our clients stay ahead of technological trends, optimize operations, and enhance customer experiences.
            </p>
          </div>

        </div>
      </div>

      {/* Two-Column Layout : Founder */}
      <div className="container mx-auto px-40 py-24">

      <h2 className=" text-center text-3xl font-bold mb-2 text-left">OUR
              <span className="headingText"> FOUNDER</span>
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 shadow-lg rounded-2xl border">

          {/* Column 1: Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={founder}
              alt="Founder & CEO"
              className="w-[300px] h-[400px] object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-gray-800 headingText">Santhosh Srirambhatla</h3> {/* Add the founder's name here */}
            <p>Founder & CEO
</p>

          </div>

          {/* Column 2: Content */}
          <div className="flex flex-col justify-center pr-16 items-center h-full">
            
            <p className="text-gray-800 mb-6 text-lg ">
            Prior to starting P-SIGNAL, Santhosh was the CTO at Sysdyne, a cloud-native ready-mix software company, and the CTO at Blue Ridge Global, a cloud-native supply chain planning software company.
            Santhosh has over 20 years of experience in designing, building, and deploying enterprise software solutions. His past customers include Nvidia, Jaguar Land Rover, Lenovo, HP, Honeywell, Sonos, and Fitbit.
            </p>
          </div>

        </div>
      </div>

    </>
  )
}

export default About;