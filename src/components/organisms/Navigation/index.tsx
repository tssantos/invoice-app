import React from 'react';
import Avatar from '../../atoms/Avatar';
import Brand from '../../atoms/Brand';
import ThemeSwitcher from '../../atoms/ThemeSwitcher';

import styles from './Navigation.module.css';

interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}><Brand/></div>
      <div  className={styles.themeSwitcher}><ThemeSwitcher/></div>
      <div  className={styles.divider}/>
      <div  className={styles.avatar}><Avatar/></div>
    </nav>
  );
}

export default Navigation;