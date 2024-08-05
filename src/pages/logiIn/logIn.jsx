import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosLogin } from '../../utils/axiosRequest/axiosRequest'; 

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    console.log(axiosLogin);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data } = await axiosLogin.post('/Account/login', { userName, password });
            console.log(data?.data);
           
            localStorage.setItem('token', data?.data);
            navigate('/'); 
        } catch (error) {
            console.error('error');
        }
    };

    return (
        <div className="flex items-center text-start justify-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-lg">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Log in to Exclusive</h1>
                <p className="text-gray-600 mb-6">Enter your details below</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="User Name"
                        className="w-full p-2 sm:p-3 mb-4 border border-gray-300 rounded"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 sm:p-3 mb-6 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 sm:py-3 mb-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        // disabled={loading}
                    >
                       login
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
                <Link to="/signup">
                <button
                    className="w-full py-2  mb-[20px] sm:py-3 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                >
                     Sign Up
                </button>
                </Link>
                <button
                    className="w-full py-2 sm:py-3 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                >
                    Log in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
