import React from 'react';
import { Helmet } from 'react-helmet';
import siteConfig from '@config/site-config.json';

export interface IProps {
  pageTitle?: string;
  pageDescription?: string;
}

export default function AppHelmet({
  pageTitle: title = siteConfig['site-metadata'].title,
  pageDescription: description = siteConfig['site-metadata'].description,
}: IProps): JSX.Element {
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
      <meta name="description" content={description} />
      <title>{title}</title>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.google.trackingId}`}
      />
    </Helmet>
  );
}
