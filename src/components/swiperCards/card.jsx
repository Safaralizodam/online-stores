// src/components/Card.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '../../reducers/home/homeSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { apiUrl, axiosList } from '../../utils/axiosRequest/axiosRequest';

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.home.data);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    dispatch(fetchHomeData());
    
  }, [dispatch]);

  // Fetch the initial favorites state from the server (if applicable)
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axiosList.get('/Wishlist/get-wishlist-items');
        const initialFavorites = new Set(response.data.map(item => item.id));
        setFavorites(initialFavorites);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  const addToCart = async (id) => {
    try {
      const response = await axiosList.post(`/Cart/add-product-to-cart?id=${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      if (favorites.has(id)) {
        // Remove from favorites
        await axiosList.post(`/Wishlist/remove-item?id=${id}`);
        setFavorites((prevFavorites) => {
          const newFavorites = new Set(prevFavorites);
          newFavorites.delete(id);
          return newFavorites;
        });
      } else {
        // Add to favorites
        await axiosList.post(`/Wishlist/add-item?id=${id}`);
        setFavorites((prevFavorites) => {
          const newFavorites = new Set(prevFavorites);
          newFavorites.add(id);
          return newFavorites;
        });
      }
      navigate('/wishlist');
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="relative group">
            <div className="bg-white">
              {item.hasDiscount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs rounded px-2 py-1">
                  -{item.discountPrice}%
                </div>
              )}
              <div className="flex flex-col items-center space-x-2 absolute top-4 left-[250px]">
                <button
                  aria-label="Add to favorites"
                  onClick={() => toggleFavorite(item.id)}
                  className={`ml-[7px] rounded-full p-[3px] mb-[4px] ${favorites.has(item.id) ? 'bg-red-500' : 'bg-gray-200'}`}
                >
                  <FavoriteBorderIcon style={{ fontSize: '20px', color: favorites.has(item.id) ? '#FFFFFF' : '#9CA3AF' }} />
                </button>
                <button aria-label="View item" className="rounded-[20px] p-[3px] bg-gray-200">
                  <Link to={`/products/${item.id}`}>
                    <VisibilityIcon style={{ fontSize: '20px', color: '#9CA3AF' }} />
                  </Link>
                </button>
              </div>
              <div className="mb-4">
                <img className="w-[1400px] h-[250px]" src={apiUrl + item.image} alt={item.productName} />
              </div>
              <div className="ml-[20px] pb-[40px]">
                <div className="text-start mb-2">
                  <p className="text-gray-800 w-[160px] text-lg font-semibold">{item.productName}</p>
                </div>
                <div className="flex items-center w-[40%] justify-between mt-4">
                  {item.hasDiscount ? (
                    <>
                      <span className="text-gray-500 line-through">${item.price}</span>
                      <span className="text-red-500 font-semibold">${item.discountPrice}</span>
                    </>
                  ) : (
                    <span className="text-gray-800 font-semibold">${item.price}</span>
                  )}
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} style={{ color: index < (item.rating || 0) ? '#FFD700' : '#E0E0E0', fontSize: '16px' }} />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">({item.reviews || 0})</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[140px] left-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 duration-300">
                <button
                  onClick={() => addToCart(item.id)}
                  className="text-white px-4 py-2 rounded-none w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
