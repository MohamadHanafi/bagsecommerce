import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { withRouter } from 'react-router-dom';
import './CartIcon.styles.scss';

const CartIcon = ({ history }) => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className='cart-container' onClick={() => history.push('/cart')}>
      <FontAwesomeIcon icon={faShoppingCart} size='lg' />
      {itemCount > 0 ? <div className='cart-count'>{itemCount}</div> : null}
    </div>
  );
};

export default withRouter(CartIcon);
