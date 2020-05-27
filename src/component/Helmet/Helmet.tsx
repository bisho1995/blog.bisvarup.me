import React from 'react';
import {Helmet} from 'react-helmet';

export default function AppHelmet() {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta
        name="description"
        content="Technical blog regarding bisvarup's views and experiences. Subscribe now to get the best industry standard information delivered to you."
      />
      <title>bisvarup&apos;s blog</title>
    </Helmet>
  );
}
