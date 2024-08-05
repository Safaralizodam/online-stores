import React from 'react';

const About = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-8 lg:py-16">
      <div className="flex mb-8">
        <p className="text-gray-400 text-xl lg:text-2xl">Home /</p>
        <p className="text-black text-xl lg:text-2xl ml-2">About</p>
      </div>
      <div className="p-8">
        <section className="w-[100%] mb-8 flex flex-col lg:flex-row justify-between items-center">
          <div className='ml-[-30px] lg:w-[50%]'>
            <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
            <p className="mt-6 md:mt-[60px]">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 45 million active users. Delivering to more than 97% of the regions in Bangladesh, our aim is to provide the best online shopping experience to millions of customers across the region.
            </p>
            <p className='mt-4 md:mt-[40px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <img src="src/assets/img/Side Image.png" alt="Our Story" className="mx-auto" />
          </div>
        </section>
        <section className="mt-16 md:mt-[200px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className='border border-gray-400 rounded p-4'>
            <img src="src/assets/img/Services.png" alt="Service Icon" className="mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold">10.5k</h2>
            <p>Sellers active on our site</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded">
            <img src="src/assets/img/Services (1).png" alt="Service Icon" className="mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold">33k</h2>
            <p>Monthly Product Sale</p>
          </div>
          <div className='border border-gray-400 rounded p-4'>
            <img src="src/assets/img/Services (6).png" alt="Service Icon" className="mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold">45.5k</h2>
            <p>Customer active in our site</p>
          </div>
          <div className='border border-gray-400 rounded p-4'>
            <img src="src/assets/img/Services (2).png" alt="Service Icon" className="mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold">25k</h2>
            <p>Annual gross sale in our site</p>
          </div>
        </section>
        <section className="mt-16 md:mt-[200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-start">
              <img src="src/assets/img/Frame 874.png" alt="Tom Cruise" className="mx-auto md:mx-0" />
              <h3 className="text-xl font-bold mt-4">Tom Cruise</h3>
              <p>Founder & Chairman</p>
              <div className="pt-2">
                <img src="src/assets/img/Frame 881.png" alt="Social Icon" className="mx-auto md:mx-0" />
              </div>
            </div>
            <div className="text-center md:text-start">
              <img src="src/assets/img/Frame 875.png" alt="Emma Watson" className="mx-auto md:mx-0" />
              <h3 className="text-xl font-bold mt-4">Emma Watson</h3>
              <p>Managing Director</p>
              <div className="pt-2">
                <img src="src/assets/img/Frame 881.png" alt="Social Icon" className="mx-auto md:mx-0" />
              </div>
            </div>
            <div className="text-center md:text-start">
              <img src="src/assets/img/Frame 876.png" alt="Will Smith" className="mx-auto md:mx-0" />
              <h3 className="text-xl font-bold mt-4">Will Smith</h3>
              <p>Product Designer</p>
              <div className="pt-2">
                <img src="src/assets/img/Frame 881.png" alt="Social Icon" className="mx-auto md:mx-0" />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 md:mt-[200px] flex flex-col md:flex-row justify-around text-center">
          <div className="mb-8 md:mb-0">
            <img src="src/assets/img/Services (3).png" alt="Service Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">Free and Fast Delivery</h3>
            <p>Free delivery on all orders over $50</p>
          </div>
          <div className="mb-8 md:mb-0">
            <img src="src/assets/img/Services (4).png" alt="Service Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">24/7 Customer Service</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div>
            <img src="src/assets/img/Services (5).png" alt="Service Icon" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold">Money Back Guarantee</h3>
            <p>We return money within 30 days</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
