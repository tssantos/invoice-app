import React, { useContext } from 'react';
import slugify from 'slugify';
import AppContext from '../../../context/app.context';

import styles from './Checkbox.module.css';

interface CheckboxProps {
  children: string;
}

const Checkbox = (props: CheckboxProps) => {
  const appContext = useContext(AppContext);
  return (
    <label className={`${styles.checkbox} ${styles[appContext.theme]}`}>
      {props.children}
      <input type="checkbox"/>
        <span className={`${styles.checkmark} ${styles[appContext.theme]}`}></span>
    </label>
  );
};

export default Checkbox;