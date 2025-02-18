import { Product } from '../../types/types';
import './ProductCard.css';
import StarRatings from 'react-star-ratings';
import { useCart } from '../../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const styles = {
    productImage: {
      width: '100px',
      height: '100px',
    },
  };

  const { addToCart } = useCart();

  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <StarRatings
        rating={product.rating.rate}
        starRatedColor='gold'
        starDimension='30px'
        starSpacing='2px'
        numberOfStars={5}
        name='product-rating'
      />
      <h4>{product.category}</h4>
      <p>{product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        style={styles.productImage}
      />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
