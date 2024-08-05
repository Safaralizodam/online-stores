import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { apiUrl, axiosList } from '../../utils/axiosRequest/axiosRequest';
import Card from '../../components/swiperCards/card';

const GetById = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosList.get(`/Product/get-product-by-id?id=${id}`);
        setProduct( response.data.data) 
      } catch (error) {
        console.error(error);
      }
    };



    fetchProduct();
  }, [id]);

  // if (loading) return <div className="text-center mt-10">Loading...</div>;
  // if (error) return <div className="text-center mt-10">Error: {error}</div>;
  if (!product) return <div className="text-center mt-10">No product found</div>;

  return (
    <div className="bg-white">
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">Home</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">Clothing</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product.productName}</a>
          </li>
        </ol>
      </nav>

      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        {/* Left side: Small images and big image */}
        <div className=" flex  justify-between  items-center gap-y-4">
        <div className="flex gap-x-2">
            {/* Example for small images */}
            <div className="w-24 h-26 overflow-hidden mr-[10px]">
              <img src={`${apiUrl+product.images[0].images}`} alt={`${product.productName} Small Image`} className="w-full h-full object-cover object-center" />
            </div>
          </div>
          {/* Big image */}
          <div className="aspect-h-4 aspect-w-3 overflow-hidden ">
            <img src={`${apiUrl+product.images[0].images}`} alt={product.productName} className="h-full w-full object-cover object-center" />
          </div>
          {/* Small images */}
        </div>

        {/* Right side: Product info, stars, buttons */}
        <div className=" w-[120%] ml-[260px] flex flex-col gap-y-6">
          {/* Product Information */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.productName}</h1>

            <p className="text-3xl tracking-tight text-gray-900 mt-4">${product.hasDiscount ? product.discountPrice : product.price}</p>
            <h1 className=" tracking-tight pt-[20px] pb-[20px] border-b border-gray-300">{product.description}</h1>

          </div>

          {/* Stars */}
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-gray-900" />
            <StarIcon className="h-5 w-5 text-gray-900" />
            <StarIcon className="h-5 w-5 text-gray-900" />
            <StarIcon className="h-5 w-5 text-gray-200" />
            <StarIcon className="h-5 w-5 text-gray-200" />
          </div>

          {/* Color Options */}
          
          <div className="flex items-center mt-6">
      <h2 className="text-lg font-medium text-gray-900">Colors :</h2>
      <div className="flex mt-2 items-center">
        {/* Button with dynamic background color */}
        <button
          className={`w-6 h-6 rounded-full bg-[${product.color}] mr-2`}
          aria-label={product.color}
        ></button>

        {/* Paragraph with dynamic background color and text color */}
        <p
          style={{
            backgroundColor: product.color,
            padding: '10px',
            borderRadius: '50%',
            border:'2px solid black'
          }}
        >
        </p>
      </div>
    </div>
        <div className='flex items-center justify-between'>
          {/* Buy Now Button */}

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center">
            <button onClick={handleDecrement} className=" rounded-l-xl bg-red-500 px-4 py-2 text-white hover:bg-gray-300">-</button>
            <span className="mx-4 text-lg font-medium">{quantity}</span>
            <button onClick={handleIncrement} className="rounded-r-xl  bg-red-500 px-[19px] py-2 text-white hover:bg-gray-300">+</button>
          </div>
          <button className="mt-6 inline-block rounded-md bg-red-600 px-[50px] py-2 text-white text-sm font-semibold shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">Buy Now</button>

          </div>
        </div>
      </div>
    </div>
    <div className='w-[89%] m-auto mt-[170px] '>
        <h1 className='flex items-center'>
          <span className=' w-[20px] h-[40px] mr-[12px] rounded-[3px] bg-red-600'></span>
          <span className='text-red-600 text-2xl font-semibold'>Related Item</span>
        </h1>
     <Card/>
     </div>
  </div>
);
};
export default GetById;
