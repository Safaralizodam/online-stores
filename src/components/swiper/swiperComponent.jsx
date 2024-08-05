import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import './swiper.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const SwiperComponent = () => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSlider ? (
        <Swiper
          effect="fade"
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 60000 }} // 1 minute
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className="slide">
            <img className='img2' src="src/assets/img/asdfghjk.png" alt="Slide 1" />
            <div className="slide-content">
              <div className='flex justify-between items-center w-[20%] my-[15px]'>
                <img className='w-[35px] h-[39px]' src="src/assets/img/1200px-Apple_gray_logo 1.png" alt="" />
                <p>iPhone 14 Series</p>
              </div>
              <h1 className="text-1xl font-bold w-[40%]">Up to 10% off Voucher</h1>
              <button className=' p-[10px] underline text-xl'>
                <Link to="products" className="button-link">Shop Now →</Link>
              </button>
            </div>
          </SwiperSlide>
          {/* Repeat for other slides */}
          <SwiperSlide className="slide">
          <img className='img2' src="src/assets/img/asdfghjk.png" alt="Slide 1" />
          <div className="slide-content">
              <div className='flex justify-between items-center w-[20%] my-[15px]'>
                <img className='w-[35px] h-[39px]' src="src/assets/img/1200px-Apple_gray_logo 1.png" alt="" />
                <p>iPhone 14 Series</p>
              </div>
              <h1 className="text-1xl font-bold w-[40%]">Up to 10% off Voucher</h1>
              <button className=' p-[10px] underline text-xl'>
                <Link to="products" className="button-link">Shop Now →</Link>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default SwiperComponent;
