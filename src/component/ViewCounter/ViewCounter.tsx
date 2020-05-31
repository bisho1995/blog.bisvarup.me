import React from 'react';

export interface Props {
    className?: string
}

export default function ViewCounter({ className = '' }:Props) {
  return (
    <a style={{ border: 0 }} href="https://www.hitwebcounter.com" target="_blank" rel="noopener nofollow noreferrer" className={`flex justify-center ${className}`}>
      <img className="mr-2" src="https://hitwebcounter.com/counter/counter.php?page=7355859&style=0006&nbdigits=6&type=page&initCount=7387" title="Web Counter" alt="counter free" />
      <b>Views</b>
    </a>
  );
}
