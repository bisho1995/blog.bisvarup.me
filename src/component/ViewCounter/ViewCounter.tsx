import React from 'react';
import siteConfig from '@config/site-config.json';

export interface Props {
  className?: string;
}

// todo: check if hitwebcounter.url is available else return null
export default function ViewCounter({ className = '' }: Props) {
  return (
    <a
      style={{ border: 0 }}
      href="https://www.hitwebcounter.com"
      target="_blank"
      rel="noopener nofollow noreferrer"
      className={`flex justify-center ${className}`}
    >
      <img
        className="mr-2"
        src={siteConfig.analytics.hitwebcounter.url}
        title="Web Counter"
        alt="counter free"
      />
      <b>Views</b>
    </a>
  );
}
