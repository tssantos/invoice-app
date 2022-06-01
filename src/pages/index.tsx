import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Logo from '../assets/logo.svg';
import AppContext from '../context/app.context';
import styles from './Home.module.css';
import { MouseEvent } from 'react';
import Button from '../components/atoms/Button';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Invoice App</title>
        <meta name="description" content="Frontend Mentor Invoice App Challenge" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <Button variant='primary'>Mark as Paid</Button>
        <Button variant='secondary'>Edit</Button>
        <Button variant='alternative'>Save as Draft</Button>
        <Button variant='cancel'>Delete</Button>
        <Button variant='primary' icon>New Invoice</Button>
        <Button variant='secondary' fill>+ Add New Item</Button>
      </main>
    </div>
  );
};

export default Home;
