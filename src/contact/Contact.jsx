import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success message

    // Basic validation
    if (!name || !email || !mobile || !message) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (!/^\d{10}$/.test(mobile)) { // Mobile number validation (10 digits)
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

  
      // Handle form submission logic (e.g., send data to an API or email service)
    console.log({ name, email, mobile, message });
    // Reset fields after submission

    // Set success message
    setSuccess('Thank you for contacting us! We will get back to you soon.');
    
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
  };

  return (
    <>
      {/* Page Title Section */}
      <div className="page-title flex items-center justify-center z-9 bg-black bg-opacity-50 w-full h-screen">     
        <h2 className="text-white z-10">Contact Us</h2>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Column: Contact Details */}
          <div className="p-8 ">
            <h2 className="text-4xl font-bold mb-6 text-left">
              GOT A QUESTION? <span className="headingText">GET IN TOUCH</span>
            </h2>
            <p className="mb-4 text-lg">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
            <p className="mb-2">
              <i className="fa-solid fa-location-dot mx-2 text-[#FB853C]"></i>
              1809 Shelburne Ridge, Marietta, GA 30068
            </p>
            <p className="mb-2">
              <i className="fa-solid fa-envelope mx-2 text-[#FB853C]"></i>
              santhoshs@p-signal.com
            </p>
            <p className="mb-2">
              <i className="fa-solid fa-phone mx-2 text-[#FB853C]"></i>
              (833) 890-5772
            </p>
            <a href="https://www.linkedin.com/in/santhosh-srirambhatla-1190279/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x text-[#FB853C] my-4"></i> 
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="border p-8 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-2">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  pattern="\d{10}" // Pattern for validation (10 digits)
                  maxLength="10"   // Max length for mobile number
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                className=" bg-[#FB853C] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 "
              >
                Submit
              </button>
              </div>
              {success && <p className="text-green-500 mb-4">{success}</p>} {/* Success message */}

            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
