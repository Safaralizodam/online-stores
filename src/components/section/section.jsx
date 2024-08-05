import React from 'react';

const FeaturedNewArrival = () => {
    return (
        <div className="w-[89%] m-auto mt-[100px] p-8">
           <h1 className='flex items-center'>
          <span className=' w-[20px] h-[40px] mr-[12px] rounded-[3px] bg-red-600'></span>
          <span className='text-red-600 text-2xl font-semibold'> Featured </span>
        </h1>
        <div className='w-[60%] mt-[16px] flex items-center justify-between'>
          <h1 className='text-5xl font-semibold'>New Arrival</h1>
        </div>
            <div className="flex">
                {/* PlayStation 5 Section */}
                <div className="object-cover rounded-lg w-[600px] h-[600px] m-[30px] relative bg-black col-span-2 md:col-span-1">
                    <img src="src/assets/img/ps5-slim-goedkope-playstation_large 1.png" alt="PlayStation 5" className="w-[80%] ml-[70px] mt-[100px] object-cover rounded-lg" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-semibold">PlayStation 5</h3>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <button className="mt-2 px-4 py-2 bg-transparent underline  rounded">Shop Now</button>
                    </div>
                </div>
                <div>
                {/* Women's Collections Section */}
                <div className="object-cover rounded-lg w-[600px] h-[300px] mt-[32px] mb-[30px] bg-black relative col-span-2 md:col-span-1">
                    <img src="src/assets/img/attractive-woman-wearing-hat-posing-black-background 1.png" alt="Women's Collections" className="w-[74%] ml-[140px]" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-semibold">Women's Collections</h3>
                        <p className='w-[80%]'>Featured woman collections that give you another vibe.</p>
                        <button className="mt-2 px-4 py-2 bg-transparent underline  rounded">Shop Now</button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                {/* Speakers Section */}
                <div className=" object-cover rounded-lg w-[280px] h-[270px] bg-black relative col-span-1">
                    <img src="src/assets/img/Frame 707.png" alt="Speakers" className="w-[70%] ml-[40px] mt-[30px]  " />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">Speakers</h3>
                        <p>Amazon wireless speakers.</p>
                        <button className=" mt-2 px-4 py-2 bg-transparent underline  rounded">Shop Now</button>
                    </div>
                </div>
                {/* Perfume Section */}
                <div className=" object-cover rounded-lg w-[280px] h-[270px] bg-black relative col-span-1">
                    <img src="src/assets/img/652e82cd70aa6522dd785109a455904c.png" alt="Perfume" className="w-[70%] ml-[40px] mt-[30px] " />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">Perfume</h3>
                        <p>GUCCI INTENSE OUD EDP.</p>
                        <button className="mt-2 px-4 py-2 bg-transparent underline  rounded">Shop Now</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            {/* Services Section */}
            <div className="flex mt-[90px] flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 text-center">
                <div className="flex flex-col items-center p-4 ">
                    <img src="src/assets/img/Services (7).png" alt="Free and Fast Delivery" className="w-[70px] h-[70px] mb-[15px]" />
                    <h3 className="text-lg font-semibold">FREE AND FAST DELIVERY</h3>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <img src="src/assets/img/Services (8).png" alt="24/7 Customer Service" className="w-[70px] h-[70px] mb-[15px]" />
                    <h3 className="text-lg font-semibold">24/7 CUSTOMER SERVICE</h3>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col items-center p-4 ">
                    <img src="src/assets/img/Services (9).png" alt="Money Back Guarantee" className="w-[70px] h-[70px] mb-[15px]" />
                    <h3 className="text-lg font-semibold">MONEY BACK GUARANTEE</h3>
                    <p>We return money within 30 days</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturedNewArrival;
