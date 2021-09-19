import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBag from '../assets/studioBag.jpg';
import './MainSection.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={studioBag} alt='studio bag' />
        </div>
        <div className='ms-m-description'>
          <h2>Designed for fashion Crafted for sport</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            aspernatur, voluptatum, id a temporibus, maiores delectus nostrum
            hic numquam placeat in eaque consequuntur vitae et nulla laboriosam
            perferendis repellendus tempora?
          </p>
          <button
            className='button is-black'
            id='shop-now'
            onClick={() => history.push('/product/1')}
          >
            Studio Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
