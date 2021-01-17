import React from 'react';
import Helmet from '@components/Helmet/Helmet';
import TopMenuBar from '@components/TopMenuBar/TopMenuBar';
import {Helmet as ReactHelmet} from 'react-helmet';
import Footer from '@components/Footer/Footer';
import siteConfig from '@config/site-config.json';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  pageTitle?: String;
  style?: Record<string, unknown>;
  showTopMenu?: boolean;
}

export default function Container({
  children,
  pageTitle = siteConfig['site-metadata'].title,
  style = {},
  showTopMenu = true,
}: Props): JSX.Element {
  return (
    <article style={style}>
      <span id="ripple" />
      <header>
        {showTopMenu ? <TopMenuBar /> : null}
        <Helmet />
        <ReactHelmet>
          <title>{pageTitle}</title>
        </ReactHelmet>
      </header>
      <main className="px-4">{children}</main>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}
