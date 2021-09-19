import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import FeaturedProduct from './FeaturedProduct';

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((item, index) => index < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);
  return (
    <div className='featured-collection container'>
      <h2 className='featured-section-title'>
        <div className='products'>{productItems}</div>
      </h2>
    </div>
  );
};

export default FeaturedCollection;
