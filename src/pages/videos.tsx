import React from 'react';
import Container from '@components/Container/Container';
import siteConfig from '@config/site-config.json';

export default function Videos(): JSX.Element {
  return (
    <Container pageTitle="Screencasts of UI Engineering">
      <h1 className="text-center text-2xl md:text-3xl cursor-pointer">
        Videos
      </h1>
      <div className="text-gray-700 text-center">
        Videos about JavaScript, React and in general software engineering
      </div>
      <p>More content coming soon...</p>
    </Container>
  );
}
