import React from 'react';
import { Helmet } from 'react-helmet';
import siteConfig from '@config/site-config.json';

export interface IProps {
  pageTitle?: string;
  pageDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function AppHelmet({
  pageTitle: title = siteConfig['site-metadata'].title,
  pageDescription: description = siteConfig['site-metadata'].description,
  ogImage = 'https://user-images.githubusercontent.com/12195877/114293171-ad298380-9ab1-11eb-8725-b758d0dab2c7.jpg',
  ogUrl,
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
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Bisvarup Mukherjee's Blog" />
      <meta property="og:type" content="Article" />
      <meta property="og:locale" content="en_Us" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.google.trackingId}`}
      />
    </Helmet>
  );
}
