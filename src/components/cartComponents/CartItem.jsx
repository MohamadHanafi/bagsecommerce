import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faTrash,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import './CartItem.styles.scss';

const CartItem = (product) => {
  const { imageUrl, title, price, quantity } = product;
  const { increase, decrease, remove } = useContext(CartContext);

  return (
    <div className='cart-item'>
      <div className='item-image'>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h4>{title}</h4>
        <p>{`$${price}`}</p>
      </div>
      <div className='quantity'>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className='btns-container'>
        <button
          className='btn-increase'
          onClick={() => {
            increase(product);
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} size='lg' />
        </button>
        {quantity === 1 && (
          <button className='btn-trash' onClick={() => remove(product)}>
            <FontAwesomeIcon icon={faTrash} size='lg' />
          </button>
        )}
        {quantity > 1 && (
          <button
            className='btn-decrease'
            onClick={() => {
              decrease(product);
            }}
          >
            <FontAwesomeIcon icon={faMinusCircle} size='lg' />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
