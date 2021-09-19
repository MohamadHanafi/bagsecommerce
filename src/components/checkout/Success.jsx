import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../Layout';

const Success = ({ history }) => {
  const { clear } = useContext(CartContext);

  useEffect(clear, [clear]);

  return (
    <Layout>
      <div className='checkout'>
        <h1>You're order was successful</h1>
        <p>Thank you for your purchase</p>
        <div>
          <button
            className='button is-black nomad-btn submit'
            onClick={() => history.push('/shop')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
