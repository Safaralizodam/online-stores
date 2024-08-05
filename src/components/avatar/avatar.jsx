import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';

const DropdownMenu = ({ user, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative text-white">
      <button
        type="button"
        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6  text-white"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        <img src={user.avatar} alt="User Avatar" className="h-8 w-8 rounded-full ml-[20px]" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-zinc-800 text-white  shadow-lg rounded-md ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <NavLink
              to="my-account"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
              onClick={() => setIsDropdownOpen(false)}
            >
               <ManageAccountsIcon/> Account
            </NavLink>
            <NavLink
              to="checkout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
              onClick={() => setIsDropdownOpen(false)}
            >
                <ShoppingBagIcon/> My Order
            </NavLink>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-400"
            >
               <LogoutIcon/>  Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
