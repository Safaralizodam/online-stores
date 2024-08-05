import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl, axiosList } from '../../utils/axiosRequest/axiosRequest'; // Ensure this points to your API base URL
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './stayle.css';

const GetCategori = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosList.get(`/Category/get-category-by-id?id=${id}`);
        if (response.data.data) {
          setCategory(response.data.data);
        } else {
          setError('Category not found');
        }
      } catch (error) {
        setError('Error fetching category data');
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!category) return <div>No category found</div>;

  return (
    <div className="category-details">
      <img 
        // src={`${apiUrl+category.categoryImage}`} 
        src='https://www.shutterstock.com/image-illustration/black-paper-arrows-abstract-technology-600nw-2480480473.jpg'
        alt={category.categoryName} 
      />
      <h1>{category.categoryName}</h1>
      
      <p>{category.description}</p>

      {category.subCategories && category.subCategories.length > 0 && (
        <div className="subcategories">
          <h2>Subcategories</h2>
          <Swiper
            spaceBetween={90}
            slidesPerView={4}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {category.subCategories.map(subCategory => (
              <SwiperSlide key={subCategory.id}>
                <div className="flex flex-col items-center bg-white ">
                  <img 
                    // src='https://via.placeholder.com/150' // Replace with actual image url
                    src='https://i.pinimg.com/originals/6e/e1/91/6ee19142a58f28b93766a9f44663a540.jpg'
                    alt={subCategory.subCategoryName}
                  />
                  <p>{subCategory.subCategoryName}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default GetCategori;
