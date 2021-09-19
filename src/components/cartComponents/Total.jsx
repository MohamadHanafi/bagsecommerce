import React from 'react';
import { withRouter } from 'react-router-dom';
import './Total.styles.scss';

const Total = ({ itemCount, total, history, clear }) => {
  return (
    <div className='total-container'>
      <div className='total'>
        <p>Total Items: {itemCount}</p>
        <p>{`total: $ ${total}`}</p>
      </div>
      <div className='checkout'>
        <button
          className='button is-black'
          onClick={() => history.push('/checkout')}
        >
          CheckOut
        </button>
        <button className='button is-white' onClick={() => clear()}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default withRouter(Total);
