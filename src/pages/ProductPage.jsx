import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import Layout from '../components/Layout';
import './ProductPage.styles.scss';
import { CartContext } from '../context/CartContext';
import { isInCart } from '../helpers/cartHelpers';

const ProductPage = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { addProduct, increase, cartItems } = useContext(CartContext);

  const { id } = match.params;
  const [product, setProduct] = useState(null);

  const itemInCart = isInCart(product, cartItems);
  useEffect(() => {
    const product = products.find(
      (product) => Number(product.id) === Number(id)
    );
    if (!product) {
      return push('/shop');
    }
    setProduct(product);
  }, [products, id, push]);

  if (!product) {
    return null;
  }
  const { imageUrl, title, price, description } = product;
  return (
    <Layout>
      <div className='product-container'>
        <div className='product-image'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className='product-buttons'>
            {!itemInCart && (
              <button
                className='button is-white nomad-btn'
                id='btn-white-outline'
                onClick={() => addProduct(product)}
              >
                Add To Cart
              </button>
            )}
            {itemInCart && (
              <button
                className='button is-white nomad-btn'
                id='btn-white-outline'
                onClick={() => increase(product)}
              >
                Add More
              </button>
            )}
            <button
              className='button is-black nomad-btn'
              id='btn-white-outline'
            >
              Proceed To Checkout
            </button>
          </div>
          <div className='product-description'>{description}</div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ProductPage);
