import { FunctionComponent, useEffect } from 'react';
import styles from './layout.module.scss';
import Header from './header';
import Footer from './footer';
import { Theme } from 'types/theme';
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import Head from 'next/head';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const theme: Theme = useSelector((state: RootState) => state.settings.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={styles.container}>
      <Head>
        <base href="/" />
        <meta name="theme-color" content="#000" />
        <meta name="application-name" content="Tim Brown's Artwork" />
        <meta name="url" content="https://timbrowns.art" />
        {/* <link rel="icon" href="/public/icon-295.png" />  */}
        
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
