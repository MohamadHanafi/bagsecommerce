import React from 'react';
import Layout from '../Layout';

const Cancel = ({ history }) => {
  return (
    <Layout>
      <div className='checkout'>
        <h1>Payment failed</h1>
        <p>Please try again</p>
        <button
          className='button is-black nomad-btn submit'
          onClick={() => history.push('/shop')}
        >
          Continue Shopping
        </button>
      </div>
    </Layout>
  );
};

export default Cancel;
