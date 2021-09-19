import React, { useEffect, useState } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { withRouter } from 'react-router-dom';
import { fetchFromApi } from '../../helpers/cartHelpers';
import './CustomCheckout.styles.scss';

const CustomCheckout = ({ cartItems, shipping, history }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const items = cartItems.map((item) => {
      return { price: item.price, quantity: item.quantity };
    });
    if (shipping) {
      const body = {
        cartItems: items,
        shipping: {
          name: shipping.name,
          address: { line1: shipping.address },
        },
        description: 'payment intent creation',
        receipt_email: shipping.email,
      };
      const customCheckout = async () => {
        const { clientSecret } = await fetchFromApi('create-payment-intent', {
          body,
        });
        setClientSecret(clientSecret);
      };
      customCheckout();
    }
  }, [cartItems, shipping]);

  const cardHandleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleCheckout = async (event) => {
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    });
    console.log(payload);

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      history.push('/success');
    }
  };

  const cardOptions = {
    style: {
      base: {
        color: '#000',
        fontFamily: 'Roboto, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#606060',
        },
      },
      invalid: {
        color: '#fa7555a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <div className='shippingAddress-container'>
      <h4>Enter Payment details</h4>
      <div className='stripe-card '>
        <CardNumberElement
          className='card-element nomad-input'
          options={cardOptions}
          onChange={cardHandleChange}
        />
      </div>
      <div className='stripe-card'>
        <CardExpiryElement
          className='card-element nomad-input'
          options={cardOptions}
          onChange={cardHandleChange}
        />
      </div>
      <div className='stripe-card'>
        <CardCvcElement
          className='card-element nomad-input'
          options={cardOptions}
          onChange={cardHandleChange}
        />
      </div>
      <div className='submit-btn'>
        <button
          disabled={processing || disabled || succeeded}
          className='button is-black nomad-btn submit'
          onClick={handleCheckout}
        >
          {processing
            ? 'Processing'
            : succeeded
            ? 'Succeeded'
            : error
            ? 'Error'
            : 'Pay'}
        </button>
        {error && <div className='error-message'>{error}</div>}
      </div>
    </div>
  );
};

export default withRouter(CustomCheckout);
