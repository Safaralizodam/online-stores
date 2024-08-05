import React from 'react';

const Contact = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-8 lg:py-16">
      <div className="flex mb-8">
        <p className="text-gray-400 text-xl lg:text-2xl">Home /</p>
        <p className="text-black text-xl lg:text-2xl ml-2">Contact</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-7 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[50%] space-y-8 lg:space-y-16 mb-8 lg:mb-16 p-6 lg:p-10 bg-white shadow-lg rounded-lg">
          <div className="space-y-4 lg:space-y-8">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img src="src/assets/img/icons-phone.png" alt="Phone Icon" className="h-8 w-8 lg:h-12 lg:w-12" />
              <h1 className="text-2xl lg:text-4xl font-bold">Call To Us</h1>
            </div>
            <p className="text-lg lg:text-xl">We are available 24/7, 7 days a week.</p>
            <p className="text-lg lg:text-xl">Phone: +8801611112222</p>
          </div>
          <div className="space-y-4 lg:space-y-8">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <img src="src/assets/img/icons-mail.png" alt="Mail Icon" className="h-8 w-8 lg:h-12 lg:w-12" />
              <h1 className="text-2xl lg:text-4xl font-bold">Write To Us</h1>
            </div>
            <p className="text-lg lg:text-xl">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-lg lg:text-xl">Emails: customer@exclusive.com</p>
            <p className="text-lg lg:text-xl">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="w-full p-6 lg:p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col lg:flex-wrap lg:gap-8 mb-8">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full lg:flex-grow p-3 lg:p-4 mb-4 lg:mb-0 text-lg border border-gray-300 rounded-lg"
            />
            <input 
              type="text" 
              placeholder="Email" 
              className="w-full lg:flex-grow p-3 lg:p-4 mb-4 lg:mb-0 text-lg border border-gray-300 rounded-lg"
            />
            <input 
              type="text" 
              placeholder="Phone" 
              className="w-full lg:flex-grow p-3 lg:p-4 mb-4 lg:mb-0 text-lg border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-8">
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 lg:p-4 text-lg border border-gray-300 rounded-lg h-32 lg:h-48"
            />
            <button className="bg-red-500 text-white px-6 py-3 lg:px-8 lg:py-4 text-lg rounded-lg hover:bg-red-600 self-end">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
