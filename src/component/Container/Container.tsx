import React from 'react';
import Helmet from '@components/Helmet/Helmet';
import TopMenuBar from '@components/TopMenuBar/TopMenuBar';
import { Helmet as ReactHelmet } from 'react-helmet';
import Footer from '@components/Footer/Footer';
import siteConfig from '@config/site-config.json';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  pageTitle?: String;
}

export default function Container({
  children,
  pageTitle = siteConfig['site-metadata'].title,
}: Props): JSX.Element {
  return (
    <article>
      <header>
        <TopMenuBar />
        <Helmet />
        <ReactHelmet>
          <title>{pageTitle}</title>
        </ReactHelmet>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}
