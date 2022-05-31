import React, { useContext } from 'react';
import AppContext from '../../../context/app.context';
import Navigation from '../../organisms/Navigation';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const appContext = useContext(AppContext);
  
  return (
    <div className={`${styles.layout} ${styles[appContext.theme]}`}>
      <Navigation/>
      {props.children}
    </div>
  );
}

export default Layout;