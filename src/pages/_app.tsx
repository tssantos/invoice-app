import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../context/app.context';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
