import React from 'react';
import Helmet, { IProps as IHelmetProps } from '@components/Helmet/Helmet';
import TopMenuBar from '@components/TopMenuBar/TopMenuBar';
import Footer from '@components/Footer/Footer';
import siteConfig from '@config/site-config.json';

interface Props extends IHelmetProps {
  children: JSX.Element | Array<JSX.Element>;
  style?: Record<string, unknown>;
  showTopMenu?: boolean;
}

export default function Container({
  children,
  pageTitle = siteConfig['site-metadata'].title,
  style = {},
  showTopMenu = true,
}: Props): JSX.Element {
  /**
   * *tip: For position sticky to work the parent needs to have a fixed height so for mobile
   * * doing height as 100vh
   */
  return (
    <article
      className={`overflow-auto ${showTopMenu ? 'h-screen' : 'h-auto'}`}
      style={style}
    >
      <span id="ripple" />
      <Helmet pageTitle={pageTitle} />
      {showTopMenu ? <TopMenuBar /> : null}
      <main className="px-4">{children}</main>
      <footer className="mt-8">
        <Footer />
      </footer>
    </article>
  );
}
