import React, { useContext } from 'react';
import FeaturedProduct from '../components/FeaturedProduct';
import Layout from '../components/Layout';
import { ProductsContext } from '../context/ProductsContext';
import './Shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProduct = products.map((product) => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Shop</h2>
        <div className='product-list'>{allProduct}</div>
      </div>
    </Layout>
  );
};

export default Shop;
