import React from 'react';
import { Helmet } from 'react-helmet';
import siteConfig from '../../../config/site-config.json';

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

        gtag('config', '${siteConfig.analytics.google.trackingId}');
      `,
        },
      ]}
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=yes"
      />
      <meta
        name="description"
        content={siteConfig['site-metadata'].description}
      />
      <title>{siteConfig['site-metadata'].title}</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.google.trackingId}`}
      />
    </Helmet>
  );
}
