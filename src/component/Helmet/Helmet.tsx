import React from 'react';
import {Helmet} from 'react-helmet';

export default function AppHelmet() {
  return (
    <Helmet
      script={[
        {
          type: 'text/javascript',
          innerHTML: `
      window.dataLayer = window.dataLayer || [];

        function gtag(...args)
        {window.dataLayer.push(args)}
        gtag('js', new Date());

        gtag('config', 'UA-167742423-1');
      `,
        },
      ]}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta
        name="description"
        content="Technical blog regarding bisvarup's views and experiences. Subscribe now to get the best industry standard information delivered to you."
      />
      <title>bisvarup&apos;s blog</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-167742423-1"
      />
    </Helmet>
  );
}
