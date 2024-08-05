// src/components/Wishlist.js
import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { apiUrl, axiosList } from '../../utils/axiosRequest/axiosRequest';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axiosList.get('/Wishlist/get-wishlist-items');
        setWishlistItems(response.data);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      }
    };

    fetchWishlistItems();
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      await axiosList.post(`/Wishlist/remove-item?id=${id}`);
      setWishlistItems((prevItems) => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlistItems.map(item => (
          <div key={item.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={apiUrl + item.image} alt={item.productName} />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.productName}</h2>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    style={{ color: index < (item.rating || 0) ? '#FFD700' : '#E0E0E0', fontSize: '16px' }}
                  />
                ))}
              </div>
              <p className="text-gray-800 font-semibold mb-2">${item.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
