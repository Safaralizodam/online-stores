import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl, axiosList } from '../../utils/axiosRequest/axiosRequest';
import './stayle.css'; // Ensure this file contains your custom styles

const Categori = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosList.get('/Category/get-categories');
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (id) => {
    navigate(`/categori/${id}`);
  };

  return (
    <div className="mt-[90px] w-[86%] m-auto">
      <h1 className="flex items-center mb-6">
        <span className="w-[20px] h-[40px] mr-[12px] rounded-[3px] bg-red-600"></span>
        <span className="text-red-600 text-2xl font-semibold">Categories</span>
      </h1>
      <div className="w-[60%] mt-[16px] flex items-center justify-between">
        <h1 className="text-5xl font-semibold">Browse By Category</h1>
      </div>
      <section className="mt-16">
        <div className=" flex items-center justify-between">
          <div className="w-4 h-8 bg-gradient-to-r from-white via-transparent to-transparent absolute left-0 z-10"></div>
          <div className="w-4 h-8 bg-gradient-to-l from-white via-transparent to-transparent absolute right-0 z-10"></div>
        </div>
        <div className="flex gap-8 overflow-x-auto py-4 ">
          {categories.map(category => (
            <div
              key={category.id}
              className='border border-gray-400 rounded-lg flex-none w-[200px] h-[200px] flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white shadow-lg'
              onClick={() => handleCategoryClick(category.id)}
            >
              <img 
                src='https://media.istockphoto.com/id/1149286270/vector/department-store-shopping-categories-icons.jpg?s=612x612&w=0&k=20&c=-xTK6VnUwGjj-Qw0UlKdspnPJomY_WmsI8Mtn-39BkY='
                alt={category.categoryName} 
                className="w-[90%] h-[60%] object-cover mb-2 rounded-lg border border-gray-300" 
              />
              <p className="text-[16px] font-bold text-center text-gray-700">{category.categoryName}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categori;
