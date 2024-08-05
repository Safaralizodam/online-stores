import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DropdownMenu from '../components/avatar/avatar'; 
import { axiosList } from '../utils/axiosRequest/axiosRequest';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 1,
    border: `2px solid ${theme.palette.error.main}`,
    padding: '0 4px',
  },
}));

const Layout = () => {
  const [user, setUser] = useState(null);
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    // Fetch user data
    const token = localStorage.getItem('token');
    if (token) {
      setUser({
        avatar: 'data:image/png;base64,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', // Replace with actual user avatar path
      });
    }
  }, []);

  useEffect(() => {
    const fetchBasketCount = async () => {
      try {
        const response = await axiosList.get('/Cart/get-products-from-cart');
        if (response.data && response.data.data && response.data.data[0] && response.data.data[0].productsInCart) {
          const count = response.data.data[0].productsInCart.reduce((acc, item) => acc + (item.quantity || 0), 0);
          setBasketCount(count);
        } else {
          setBasketCount(0);
        }
      } catch (error) {
        console.error('Error fetching basket count:', error);
      }
    };

    fetchBasketCount();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md py-4">
        <nav className="w-[80%] m-auto container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <img src="src/assets/img/Group 1116606595.png" alt="Logo" className="h-10" />
          </div>
          <ul className="flex space-x-20">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'underline text-gray-700' : 'hover:text-gray-700'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'underline text-gray-700' : 'hover:text-gray-700'
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'underline text-gray-700' : 'hover:text-gray-700'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? 'underline text-gray-700' : 'hover:text-gray-700'
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-between items-center space-x-2">
            <input className="rounded-lg bg-gray-200 px-2 py-1" type="text" placeholder="Search" />
            <SearchIcon className="text-gray-600" />
            <NavLink to="wishlist">
              <IconButton aria-label="favorites" className="text-gray-600">
                <StyledBadge>
                  <FavoriteBorderIcon />
                </StyledBadge>
              </IconButton>
            </NavLink>
            <NavLink to="korzina">
              <IconButton aria-label="cart" className="text-gray-600">
                <StyledBadge badgeContent={basketCount} color="error">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </NavLink>
            {user ? (
              <DropdownMenu user={user} handleLogout={handleLogout} />
            ) : (
              <NavLink to="/login" className="text-gray-600">
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-[50px] pt-[90px] px-[90px]">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Exclusive</h3>
            <h3 className="text-lg mb-4">Subscribe</h3>
            <p>Get 10% off your first order</p>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-[7px] bg-gray-900 border border-gray-100 px-3 py-2 mb-2 text-black rounded"
              />
            </form>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <p className="w-[180px] pb-[8px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className="pb-[8px]">exclusive@gmail.com</p>
            <p className="pb-[8px]">+88015-88888-9999</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Account</h3>
            <ul>
              <li className="mb-2">
                <NavLink to="/my-account" className="hover:text-gray-300">My Account</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/korzina" className="hover:text-gray-300">Cart</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/wishlist" className="hover:text-gray-300">Wishlist</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/products" className="hover:text-gray-300">Shop</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
            <ul>
              <li className="mb-2">
                <NavLink to="/shipping" className="hover:text-gray-300">Privacy Policy</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/terms" className="hover:text-gray-300">Terms Of Use</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/sitemap" className="hover:text-gray-300">FAQ</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            <img className="w-[220px] h-[35px]" src="src/assets/img/Frame 741.png" />
          </div>
        </div>
        <p className="text-center mt-[80px] text-gray-600">
          © Copyright Brand 2024. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Layout;
