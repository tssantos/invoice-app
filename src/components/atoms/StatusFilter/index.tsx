import React, { MouseEventHandler, MouseEvent, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive'

import styles from './StatusFilter.module.css';
import IconArrowDown from '../../../assets/icon-arrow-down.svg';
import Checkbox from '../Checkbox';
import AppContext from '../../../context/app.context';

interface StatusFilterProps { }

const StatusFilter = (props: StatusFilterProps) => {
  const appContext = useContext(AppContext);

  const [opened, setOpened] = useState(false);

  const OnClickHandler: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOpened(state => !state);
  };

  const label = appContext.isMobile ? 'Filter': 'Filter by status';

  return (
    <div className={`${styles.statusFilter} ${styles[appContext.theme]}`}>
      <div onClick={OnClickHandler} className={`${styles.content} ${opened && styles.opened}`}>
        <p>{label}</p>
        <IconArrowDown />
      </div>
      <div className={`${styles.drawer} ${opened && styles.opened}`}>
        <Checkbox>Draft</Checkbox>
        <Checkbox>Pending</Checkbox>
        <Checkbox>Paid</Checkbox>
      </div>
    </div>
  );
};

export default StatusFilter;