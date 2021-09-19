import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import MainSection from '../components/MainSection';
import FeaturedCollection from '../components/FeaturedCollection';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default HomePage;
