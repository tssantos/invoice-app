import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Logo from '../assets/logo.svg';
import AppContext from '../context/app.context';
import styles from './Home.module.css';
import { MouseEvent } from 'react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Invoice App</title>
        <meta name="description" content="Frontend Mentor Invoice App Challenge" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
      </main>
    </div>
  );
};

export default Home;
