import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../Layout';
import './checkout.styles.scss';
import CustomCheckout from './CustomCheckout';
import ShippingAddress from './ShippingAddress';

const Checkout = () => {
  const { itemCount, total, cartItems } = useContext(CartContext);

  const [shipping, setShipping] = useState(null);
  const showAddress = {
    display: shipping ? 'none' : 'block',
  };
  const cardShown = {
    display: shipping ? 'block' : 'none',
  };

  return (
    <Layout>
      <div className='checkout'>
        <h2>Checkout Summary</h2>
        <h3>{`Total Items ${itemCount}`}</h3>
        <h4>{`Total Price $${total}`}</h4>
      </div>
      <div style={showAddress}>
        <ShippingAddress setShipping={setShipping} />
      </div>
      <div style={cardShown}>
        <CustomCheckout cartItems={cartItems} shipping={shipping} />
      </div>
    </Layout>
  );
};

export default Checkout;
