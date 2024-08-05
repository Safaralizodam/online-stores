import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import VerticalNav from '../../components/select/verticalNav';
import SwiperComponent from '../../components/swiper/swiperComponent';
import ClockAndDate from '../../components/countdays/countdays';
import Card from '../../components/swiperCards/card';
import Categori from '../../components/categori/categori';
import FeaturedNewArrival from '../../components/section/section';

const Home = () => {

  const navigate = useNavigate(); 

  const handleViewAllProducts = () => {
    navigate('products'); 
  };

  return (
    <div>
      <div className="w-[86%] m-auto flex justify-between">
        <VerticalNav />
        <SwiperComponent />
      </div>
      <div className='w-[86%] m-auto mt-[100px] border-b border-gray-300'>
        <h1 className='flex items-center'>
          <span className=' w-[20px] h-[40px] mr-[12px] rounded-[3px] bg-red-600'></span>
          <span className='text-red-600 text-2xl font-semibold'>Today’s</span>
        </h1>
        <div className='w-[60%] mt-[16px] flex items-center justify-between'>
          <h1 className='text-5xl font-semibold'>Flash Sales</h1>
          <h1 className='mb-[30px]'><ClockAndDate /></h1>
        </div>
        <div>
          <Suspense fallback={<div>Loading Cards...</div>}>
            <Card />
          </Suspense>
        </div>
        <div className="w-[17%] m-auto">
          <button 
            className='mr-[12px] text-xl mb-[30px] p-[10px] px-[30px] rounded-[3px] text-white bg-red-600'
            onClick={handleViewAllProducts} 
          >
            View All Products
          </button>
        </div>
      </div>
       <Categori/>
       <div>
        <FeaturedNewArrival/>
       </div>
    </div>
  );
};

export default Home;
