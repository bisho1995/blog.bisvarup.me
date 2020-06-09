import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ViewCounter from '../ViewCounter/ViewCounter';

const socialUrls = [
  'https://twitter.com/BisvarupMukher1',
  'https://www.linkedin.com/in/bisvarup-mukherjee-78865a131/',
  'https://www.facebook.com/bisvarup.mukherjee.9/',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 md:text-left">
      <div className="mx-auto container flex flex-col md:flex-row justify-between mb-4">
        <div className="my-2 md:my-0 text-center">
          Copyright &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Bisvarup Mukherjee
        </div>
        <div className="my-2 md:my-0 text-center md:text-right">
          {socialUrls.map((url) => (
            <SocialIcon
              url={url}
              className="mx-2 rounded-full"
              fgColor="#fff"
              style={{ width: 30, height: 30 }}
            />
          ))}
        </div>
      </div>
      <ViewCounter />
    </footer>
  );
}
