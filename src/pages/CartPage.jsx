import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout';
import CartItem from '../components/cartComponents/CartItem';
import './CartPage.styles.scss';
import Total from '../components/cartComponents/Total';

const CartPage = () => {
  const { cartItems, itemCount, total, clear } = useContext(CartContext);
  console.log(cartItems);
  return (
    <Layout>
      <>
        <h1>Cart Items</h1>
        {cartItems.length === 0 ? (
          <div className='empty-cart-msg'>Your cart is empty</div>
        ) : (
          <>
            <div className='cart-page'>
              <div className='cart-item-container'>
                {cartItems.map((item) => (
                  <CartItem {...item} key={item.id} />
                ))}
              </div>
              <Total itemCount={itemCount} total={total} clear={clear} />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default CartPage;
