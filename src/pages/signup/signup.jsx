import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { axiosList, axiosLogin } from '../../utils/axiosRequest/axiosRequest';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }
     console.log(" error  password");
        try {
            const response = await axiosList.post('/Account/register', {
                userName,
                phoneNumber,
                email,
                password,
                confirmPassword,
            });
            console.log(response.data);
            
            navigate('/login'); 
        } catch (error) {
            console.error(error);
    };
}

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-lg">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Create an account</h1>
                <p className="text-gray-600 mb-6">Enter your details below</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 sm:p-3 mb-4 border border-gray-300 rounded"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-2 sm:p-3 mb-4 border border-gray-300 rounded"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-2 sm:p-3 mb-4 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 sm:p-3 mb-4 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-2 sm:p-3 mb-6 border border-gray-300 rounded"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 sm:py-3 mb-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        // disabled={loading}
                    >
                        sign up
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
                <button
                    className="w-full py-2 sm:py-3 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                >
                    Sign up with Google
                </button>
                <div className="flex justify-center text-center mt-4">
                    <h1 className="text-gray-700">Already have an account?</h1>
                    <button
                        className="ml-2 text-gray-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        onClick={handleLoginClick}
                    >
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
