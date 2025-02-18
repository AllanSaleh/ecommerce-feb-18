import { useEffect } from 'react';
import { Product } from '../types/types';
import ProductCard from '../components/ProductCard/ProductCard';
import { useProductContext } from '../context/ProductContext';
import { useQuery } from 'react-query';
import { fetchProducts, fetchCategories } from '../api/api';

const Home = () => {
  const { products, selectedCategory, dispatch } = useProductContext();

  const { data: productsData, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  useEffect(() => {
    if (productsData) {
      dispatch({ type: 'SET_PRODUCTS', payload: productsData.data });
    }
  }, [dispatch, productsData]);

  const getFilteredProducts = () => {
    if (selectedCategory) {
      return products?.filter(
        (product: Product) => product.category === selectedCategory
      );
    }
    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })
        }
      >
        <option value=''>All Categories</option>
        {categories?.data.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {isLoading && <h1>Loading...</h1>}
        {filteredProducts?.map((product: Product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;
