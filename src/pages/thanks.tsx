import React from 'react';

const images = [
  { attribution: 'Photo by Alberto Bigoni on Unsplash', url: 'https://unsplash.com/photos/S25lkmUwTk8' },
  { attribution: 'Photo by Nicolas Häns on Unsplash', url: 'https://unsplash.com/photos/u2LV_WJdBfQ' },
  { attribution: 'Photo by Kelly Sikkema on Unsplash', url: 'https://unsplash.com/photos/sR1vhfoAuvY' },
  { attribution: 'Photo by Guillaume Bolduc on Unsplash', url: 'https://unsplash.com/photos/uBe2mknURG4' },
  { attribution: 'Photo by Daniel Fazio on Unsplash', url: 'https://unsplash.com/photos/JBN6FHP5VXk' },
  { attribution: 'Photo by Przemyslaw Marczynski on Unsplash', url: 'https://unsplash.com/photos/oCfkSnqZ0SI' },
  { attribution: 'Photo by Steve Sawusch on Unsplash', url: 'https://unsplash.com/photos/PLfpXxZ9r9A' },
];

export default function Thanks() {
  return (
    <>
      {images.map(({ attribution, url }) => <a href={url} target="_blank" rel="noopener noreferrer nofollow">{attribution}</a>)}
    </>
  );
}
