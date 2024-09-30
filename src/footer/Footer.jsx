import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Example social media icons
import logo from "./logo.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-12 pt-8">

        {/* Column 1: Company Info */}
        <div>
          <a href="/" >
            <img src={logo} alt="pSignal_logo" width="150px" />
          </a>
          <p className="mb-2">
          P-Signal builds innovative solutions and products for small to mid-size companies.
          </p>
          <a href="https://www.linkedin.com/in/santhosh-srirambhatla-1190279/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i> 
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div className="mx-[80px]">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-white">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="mb-2"><i className="fa-solid fa-location-dot mx-2"></i>
 1809 Shelburne Ridge Marietta GA 30068</p>
          <p className="mb-2"> <i className="fa-solid fa-envelope mx-2"></i> santhoshs@p-signal.com</p>
          <p className="mb-2"> <i className="fa-solid fa-phone mx-2"></i> (833) 890-5772</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center  border-t border-gray-700 mt-8 pt-4">
        <p>&copy; {new Date().getFullYear()} P-Signal. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer;
