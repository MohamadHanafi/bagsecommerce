import React from 'react';
import './Hero.styles.scss';
import { withRouter } from 'react-router-dom';

const Hero = ({ history }) => {
  return (
    <section className='hero is-large is-info hero-image'>
      <div className='hero-body'>
        <h1 className='hero-title'>Bags reimagined</h1>
        <div className='shop-now-button'>
          <button
            className='button is-black'
            id='shop-now'
            onClick={() => history.push('/shop')}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Hero);
