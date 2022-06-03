import React, { useContext } from 'react';
import AppContext from '../../../context/app.context';
import Button from '../../atoms/Button';
import StatusFilter from '../../atoms/StatusFilter';

import styles from './InvoiceHeader.module.css';

interface InvoiceHeaderProps { }

const InvoiceHeader = (props: InvoiceHeaderProps) => {
  const appContext = useContext(AppContext);

  const invoicesSubtitle = appContext.isMobile ? '7 invoices' : 'There are 7 total invoices';
  const buttonLabel = appContext.isMobile ? 'New' : 'New Invoice';


  return (
    <div className={`${styles.invoiceHeader} ${styles[appContext.theme]}`}>
      <div className={styles.title}>
        <h1>Invoices</h1>
        <p>{invoicesSubtitle}</p>
      </div>
      <StatusFilter />
      <Button variant='primary' icon>{buttonLabel}</Button>
    </div>
  );
};

export default InvoiceHeader;