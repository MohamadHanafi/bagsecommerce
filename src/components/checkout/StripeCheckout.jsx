import React, { useContext, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../context/CartContext';
import { fetchFromApi } from '../../helpers/cartHelpers';

const StripeCheckout = () => {
  const [email, setEmail] = useState('');
  const { cartItems } = useContext(CartContext);
  const stripe = useStripe();

  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl],
          },
        },
      };
    });

    const res = await fetchFromApi('create-checkout-session', {
      body: { line_items, customer_email: email },
    });

    const { sessionId } = res;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleGuestCheckout}>
      <div>
        <input
          type='email'
          placeholder='Email'
          className='nomad-input'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='submit-btn'>
        <button type='submit' className='button is-black nomad-btn submit'>
          Checkout
        </button>
      </div>
    </form>
  );
};

export default StripeCheckout;
