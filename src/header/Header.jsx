import React from 'react';
import logo from "./Logo.jpeg";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    {/* Top Bar */}
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <a href="/" >
            <img src={logo} alt="pSignal_logo" width="150px"/>
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <a href="tel:8338905772" className=""><i className="fa-solid fa-phone headerPhone"></i> Call Us: (833) 890-5772</a>
        </div>
      </div>
    </div>

    {/* Menu Bar (Navigation) */}
    <nav className=" bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* <nav> */}
          <ul className="flex space-x-10 text-white">
            <li><Link to="/" className="hover:text-orange-500 text-xl font-bold">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 text-xl font-bold">About P-Signal</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 text-xl font-bold">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 text-xl font-bold">Contact</Link></li>
          </ul>
        {/* </nav> */}

        {/* Linked In */}
        <a href="https://www.linkedin.com/in/santhosh-srirambhatla-1190279/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i> 
        </a>

      </div>
    </nav>
    </>
  )
}

export default Header;

