import React from 'react';
import { Helmet } from 'react-helmet';

export default function AppHelmet() {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
    </Helmet>
  );
}
