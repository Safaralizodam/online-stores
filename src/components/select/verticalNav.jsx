import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosList } from '../../utils/axiosRequest/axiosRequest';
import './select.css'

const VerticalNav = () => {
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

  const handleNavigation = (id) => {
    navigate(`/categori/${id}`);
  };

  return (
    <nav className="bg-white w-[40%] font-medium border-r-2 border-gray-200 mr-[40px] h-[400px] overflow-y-auto custom-scrollbar">
      <div className="p-4">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleNavigation(category.id)}
                className="block w-full text-left p-[6px] rounded hover:bg-gray-100 hover:text-gray-900"
              >
                {category.categoryName}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default VerticalNav;
