import React, { MouseEventHandler, useContext } from 'react';
import AppContext from '../../../context/app.context';

import styles from './Button.module.css';
import IconPlus from '../../../assets/icon-plus.svg';

type ButtonVariant = 'primary' | 'secondary' | 'alternative' | 'cancel';

interface ButtonProps {
  children: string;
  variant: ButtonVariant;
  icon?: boolean;
  fill?: boolean;
  onClick?: MouseEventHandler;
}

const Button = (props: ButtonProps) => {
  const appContext = useContext(AppContext);

  return (
    <div onClick={props.onClick} className={`${styles.button} ${styles[props.variant]} ${styles[appContext.theme]} ${props.fill && styles.fill} ${props.icon && styles.icon}`}>
      {props.icon && <div className={styles.icon}><IconPlus/></div>}
      <p>{props.children}</p>
    </div>
  );
}

export default Button;