import React from 'react';

import styles from './Brand.module.css';
import Logo from '../../../assets/logo.svg';

interface BrandProps { }

const Brand = (props: BrandProps) => {
  return (
    <div className={styles.brand}>
      <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.6942 0.292255L20 19L29.3058 0.292255C35.6645 3.64081 40 10.3141 40 18C40 29.0457 31.0457 38 20 38C8.9543 38 0 29.0457 0 18C0 10.3141 4.33546 3.64081 10.6942 0.292255Z" fill="white" />
      </svg>
    </div>
  );
};

export default Brand;