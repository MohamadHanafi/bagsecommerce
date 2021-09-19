import React from 'react';
import './Footer.styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className='footer'>{year} &copy; HANAFI store</div>;
};

export default Footer;
