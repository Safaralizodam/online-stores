import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '../../reducers/home/homeSlice';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { apiUrl, axiosList } from '../../utils/axiosRequest/axiosRequest';

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home.data);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([300, 2000]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [minPrice, setMinPrice] = useState(300);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = async (id) => {
    try {
      const response = await axiosList.post(`/Cart/add-product-to-cart?id=${id}`);
      if (response.data.success) {
        setCartItems((prev) => [...prev, id]); // Update cart items state
        alert('Item added to cart!');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Fetch brands and colors
  const fetchBrandsAndColors = async () => {
    try {
      const [brandsResponse, colorsResponse] = await Promise.all([
        axiosList.get('http://135.181.152.249:8072/Brand/get-brands'),
        axiosList.get('http://135.181.152.249:8072/Color/get-colors')
      ]);

      setBrands(brandsResponse.data.data);
      setColors(colorsResponse.data.data);
      setMinPrice(300); // Adjust based on actual data
      setMaxPrice(2000); // Adjust based on actual data
      setPriceRange([300, 2000]); // Adjust based on actual data
    } catch (error) {
      console.error('Error fetching brands or colors:', error);
    }
  };

  useEffect(() => {
    dispatch(fetchHomeData());
    fetchBrandsAndColors();
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter(item => {
          const itemCategory = item.category ? item.category.trim() : '';
          const itemBrand = item.brand ? item.brand.trim() : '';
          const itemColor = item.color ? item.color.trim() : '';
          const itemPrice = item.price;

          return (
            (selectedCategory === 'All' || itemCategory === selectedCategory) &&
            (selectedBrands.length === 0 || selectedBrands.includes(itemBrand)) &&
            (selectedColors.length === 0 || selectedColors.includes(itemColor)) &&
            (itemPrice >= priceRange[0] && itemPrice <= priceRange[1])
          );
        })
      );
    }
  }, [data, selectedCategory, selectedBrands, selectedColors, priceRange]);

  return (
    <div className="container my-8 px-4 flex">
      {/* Filters Sidebar */}
      <div className="w-1/5">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <label className="block mb-2">
            <input
              type="radio"
              value="All"
              checked={selectedCategory === 'All'}
              onChange={() => setSelectedCategory('All')}
            />
            <span className="ml-2">All</span>
          </label>
          {/* Assuming you have a list of categories */}
          {/* Replace with actual category data */}
          {['Electronics', 'Clothing', 'Accessories'].map((category) => (
            <label key={category} className="block mb-2">
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </div>

        {/* Brands */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Brands</h3>
          {brands.map((brand) => (
            <label key={brand.id} className="block mb-2">
              <input
                type="checkbox"
                value={brand.brandName}
                checked={selectedBrands.includes(brand.brandName)}
                onChange={(e) => {
                  const { value, checked } = e.target;
                  setSelectedBrands((prev) =>
                    checked ? [...prev, value] : prev.filter((b) => b !== value)
                  );
                }}
              />
              <span className="ml-2">{brand.brandName}</span>
            </label>
          ))}
        </div>

        {/* Colors */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap">
            {colors.map((color) => (
              <label key={color.id} className="block mb-2 mr-2">
                <span
                  className="w-8 h-8 block rounded-full cursor-pointer border border-full border-slate-950"
                  style={{
                    backgroundColor: color.colorName, // Ensure this is a valid color
                    border: selectedColors.includes(color.colorName) ? '2px solid black' : '2px solid grey'
                  }}
                  onClick={() => {
                    setSelectedColors((prev) =>
                      prev.includes(color.colorName) 
                        ? prev.filter((c) => c !== color.colorName) 
                        : [...prev, color.colorName]
                    );
                  }}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="10"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-full mb-2"
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-full"
          />
          <div className="flex justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="w-4/5 ml-8">
        <div className="flex mb-8">
          <p className="text-gray-400 text-xl lg:text-2xl">Home /</p>
          <p className="text-black text-xl lg:text-2xl ml-2">Explore Our Products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div key={item.id} className="relative bg-white p-4 rounded-lg shadow-lg group">
              {item.hasDiscount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs rounded px-2 py-1">
                  -{item.discountPrice}%
                </div>
              )}
              <div className="flex flex-col items-center">
                <div className="flex space-x-2 mb-2">
                  <button aria-label="Add to favorites" className="p-2 bg-gray-200 rounded-full">
                    <FavoriteBorderIcon style={{ fontSize: '20px', color: '#9CA3AF' }} />
                  </button>
                  <Link to={`/products/${item.id}`}>
                    <button aria-label="View item" className="p-2 bg-gray-200 rounded-full">
                      <VisibilityIcon style={{ fontSize: '20px', color: '#9CA3AF' }} />
                    </button>
                  </Link>
                </div>
                <img className="w-full h-64 object-cover rounded-lg mb-4" src={apiUrl + item.image} alt={item.productName} />
                <div className="text-start">
                  <p className="text-gray-800 text-lg font-semibold mb-2">{item.productName}</p>
                  <div className="flex items-center justify-between mb-2">
                    {item.hasDiscount ? (
                      <>
                        <span className="text-gray-500 line-through">${item.price}</span>
                        <span className="text-red-500 font-semibold">${item.discountPrice}</span>
                      </>
                    ) : (
                      <span className="text-gray-800 font-semibold">${item.price}</span>
                    )}
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} style={{ color: index < (item.rating || 0) ? '#FFD700' : '#E0E0E0', fontSize: '16px' }} />
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">({item.reviews || 0})</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 duration-300">
                    <button 
                      onClick={() => addToCart(item.id)} 
                      className="text-white px-4 py-2 rounded-none w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
