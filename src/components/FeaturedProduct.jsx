import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { isInCart } from '../helpers/cartHelpers';
import './FeaturedProduct.styles.scss';

const FeaturedProduct = (props) => {
  const { addProduct, increase, cartItems } = useContext(CartContext);

  const {
    title,
    imageUrl,
    price,
    history: { push },
    id,
    description,
  } = props;

  const product = {
    title,
    imageUrl,
    price,
    id,
    description,
  };

  const itemInCart = isInCart(product, cartItems);

  return (
    <div className='featured-product'>
      <div className='feature-image' onClick={() => push(`/product/${id}`)}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!itemInCart && (
          <button
            onClick={() => addProduct(product)}
            className='button is-black shop-btn'
          >
            Add To Cart
          </button>
        )}
        {itemInCart && (
          <button
            onClick={() => increase(product)}
            className='button is-white shop-btn'
            id='btn-white-outline'
          >
            Add More
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
