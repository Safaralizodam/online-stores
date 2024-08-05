import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilByid } from '../../reducers/home/homeSlice';
import {getToken} from "../../utils/token/token"



const Account = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.home.profile);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    dispatch(getProfilByid(getToken().sid));
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.data.firstName);
      setLastName(profile.data.lastName);
      setEmail(profile.data.email);
      setStreetAddress(profile.data.streetAddress);
    }
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      firstName,
      lastName,
      email,
      streetAddress,
      currentPassword,
      newPassword,
      confirmPassword,
    };
    // dispatch(updateProfile(updatedProfile));
  };

  return (
    <div className="min-h-screen font-sans">
      <div className="container mx-auto p-4 flex">
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <div className="p-4">
            <nav className="space-y-2">
              <a href="#" className="block text-gray-800 hover:text-red-500 font-semibold">My Profile</a>
              <a href="#" className="block text-gray-800 hover:text-red-500">Address Book</a>
              <a href="#" className="block text-gray-800 hover:text-red-500">My Payment Options</a>
            </nav>
            <hr className="my-4" />
            <nav className="space-y-2">
              <a href="#" className="block text-gray-800 hover:text-red-500">My Returns</a>
              <a href="#" className="block text-gray-800 hover:text-red-500">My Cancellations</a>
            </nav>
            <hr className="my-4" />
            <nav className="space-y-2">
              <a href="#" className="block text-gray-800 hover:text-red-500">My Wishlist</a>
            </nav>
          </div>
        </div>

        {/* Profile Form */}
        <div className="ml-[200px] w-[50%] p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street Address</label>
                  <input
                    type="text"
                    id="street-address"
                    name="street-address"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Password Changes</h3>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
                  <input
                    type="password"
                    id="current-password"
                    name="current-password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                      type="password"
                      id="new-password"
                      name="new-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button type="button" className="text-gray-800 py-2 px-4 rounded-md mr-2">Cancel</button>
                <button type="submit" className="bg-red-500 text-white py-4 px-8 rounded-md">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
