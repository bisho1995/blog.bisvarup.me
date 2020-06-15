import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ViewCounter from '../ViewCounter/ViewCounter';
import siteConfig from '../../../config/site-config.json';

const socialUrls = siteConfig['social-urls'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 md:text-left">
      <div className="mx-auto container flex flex-col md:flex-row justify-between mb-4">
        <div className="my-2 md:my-0 text-center">
          Copyright &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          {siteConfig['site-metadata'].owner}
        </div>
        <div className="my-2 md:my-0 text-center md:text-right">
          {socialUrls.map((url) => (
            <SocialIcon
              url={url}
              className="mx-2 rounded-full"
              fgColor="#fff"
              style={{ width: 30, height: 30 }}
              key={url}
            />
          ))}
        </div>
      </div>
      <ViewCounter />
    </footer>
  );
}
