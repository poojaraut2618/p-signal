import React from 'react';
import './Services.css';
import ImageBox from './ImageBox';
import aboutService from './Servicesss.png';
import service1 from './ai.png';
import service2 from './inte.png';
import service3 from './app.png';
import service4 from './modern.png';
import service5 from './success.png';
import service6 from './sw.png';
import service7 from './cto.png';
import service8 from './offShore.png';

const Services = () => {
  return (
    <>
      {/* Page Title Section */}
      <div className="service-title flex items-center justify-center z-9 bg-black bg-opacity-50 w-full h-screen">     
        <h2 className="text-white z-10">Our Services</h2>
      </div>

      {/* Two-Column Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Column 1: Image */}
          <div className="flex justify-center">
            <img
              src={aboutService}
              alt="Company Image"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Column 2: Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-4 text-left">
              <span className="headingText">P-SIGNAL:</span> YOUR PARTNER IN SCALING SAAS WITH EXPERT
              <span className="headingText"> IT SOLUTIONS</span>
            </h2>
            <p className="text-gray-800 mb-6 text-lg">
              At <span className="headingText">P-Signal</span>, we specialize in accelerating the growth of software companies by providing tailored IT solutions that drive efficiency, innovation, and scalability. With decades of years of experience working with Private Equity (PE) and Venture Capital (VC)-backed B2B SaaS companies, our team offers a comprehensive suite of services to meet your technology needs. Whether you’re looking to leverage the power of AI or streamline your operational processes, P-Signal delivers solutions that are both cost-efficient and impactful.
            </p>
          </div>

        </div>
      </div>

      {/* 3-Column Image Box */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
          
          {/* Image Box 1 */}
          
          <div className="flex flex-col items-left p-6 bg-[#FFFAFA] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service1} alt="Service 1" className="w-14 h-14  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">Analytics & AI/ML Solutions</h3>
            <p className="text-gray-600 t">
            Unlock the full potential of your data with P-Signal. We offer expertise in selecting the right Business Intelligence (BI) stack, enhancing existing BI solutions, and building cutting-edge Machine Learning (ML) and Artificial Intelligence (AI) models. From proof of concept (POC) to deployment, we guide you every step of the way, ensuring your company leverages data-driven insights to stay ahead in a competitive market.
            </p>
          </div>

          {/* Image Box 2 */}
          <div className="flex flex-col items-left p-6 bg-[#f7fafc] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service2} alt="Service 2" className="w-16 h-16  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">Seamless Integration Services</h3>
            <p className="text-gray-600 t">
            Our integration services ensure seamless data extraction, transformation, loading (ETL), and management. Using both open-source and licensed software, we help you build and maintain robust data pipelines that are scalable and efficient, keeping your business operations smooth and uninterrupted.
            </p>
          </div>

          {/* Image Box 3 */}
          <div className="flex flex-col items-left p-6 bg-[#FFFAFA] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service3} alt="Service 3" className="w-16 h-16  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">Site Reliability Engineering (SRE) & DevOps</h3>
            <p className="text-gray-600 t">
            Optimize your infrastructure with P-Signal’s SRE and DevOps expertise. We focus on improving your system’s availability, latency, performance, and efficiency. Additionally, we enhance your change management, monitoring, emergency response, and capacity planning to ensure a reliable and scalable system.
            </p>
          </div>

           {/* Image Box 4 */}
           <div className="flex flex-col items-left p-6 bg-[#f7fafc] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service4} alt="Service 4" className="w-16 h-16  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">
              Application Modernization</h3>
            <p className="text-gray-600 t">
            Transform your legacy applications with modern computing approaches. Whether it’s migrating to new languages, frameworks, or cloud infrastructure platforms, we ensure a smooth and seamless modernization process, boosting both performance and maintainability.
            </p>
          </div>

           {/* Image Box 5 */}
           <div className="flex flex-col items-left p-6 bg-[#f7fafc] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service5} alt="Service 5" className="w-16 h-16  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">Customer Success Automation</h3>
            <p className="text-gray-600 t">
            Streamline your onboarding, tooling, and reporting with our customer success automation services. P-Signal helps you enhance the customer experience by automating repetitive tasks, ensuring efficient onboarding processes, and providing actionable insights for better decision-making.
            </p>
          </div>

          {/* Image Box 6 */}
          <div className="flex flex-col items-left p-6 bg-[#FFFAFA] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service6} alt="Service 6" className="w-16 h-16  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">Software Engineering & Quality Assurance</h3>
            <p className="text-gray-600 t">
            Our experienced engineering team delivers QA automation, UI/UX improvements, and architecture reviews, ensuring that your software products meet the highest standards of quality, usability, and performance. We build scalable, maintainable, and user-centric solutions tailored to your needs.
            </p>
          </div>

          {/* Image Box 7 */}
          <div className="flex flex-col items-left p-6 bg-[#f7fafc] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service7} alt="Service 7" className="w-16 h-16  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">Fractional CTO Services </h3>
            <p className="text-gray-600 t">
            Need strategic technical guidance? Our Fractional CTO service reviews and enhances your Software Development Life Cycle (SDLC) processes, tools, and methodologies, offering expert advice to accelerate your company’s growth without the overhead of a full-time CTO.
            </p>
          </div>

          {/* Image Box 8 */}
          <div className="flex flex-col items-left p-6 bg-[#FFFAFA] rounded-[35px] transition-all hover:shadow-xl">
          <img src={service8} alt="Service 8" className="w-16 h-16  ml-[-57px] mt-[-40px] " />
            <h3 className="text-xl font-bold mb-2">Off-Shore Team Setup (India) </h3>
            <p className="text-gray-600 t">
              Looking to expand your team? We offer Build-Operate-Transfer (BOT) and Build-Operate-Maintain (BOM) models for setting up and managing off-shore teams in India. We handle the entire process, from recruitment and operations to transitioning or maintaining the team as per your business needs.
            </p>
          </div>

        </div>
      </div>

    </>
  );
};

export default Services;
