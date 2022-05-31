import React, { useContext, MouseEvent, MouseEventHandler } from 'react';

import styles from './ThemeSwitcher.module.css';

import IconMoon from '../../../assets/icon-moon.svg';
import IconSun from '../../../assets/icon-sun.svg';
import AppContext from '../../../context/app.context';

interface ThemeSwitcherProps {}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const appContext = useContext(AppContext);

  const onClickHandler: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    appContext.toggleTheme();
  }

  return (
    <div onClick={onClickHandler} className={styles.themeSwitcher}>
      {appContext.theme == 'light' && <IconMoon/>}
      {appContext.theme == 'dark' && <IconSun/>}
    </div>
  );
}

export default ThemeSwitcher;