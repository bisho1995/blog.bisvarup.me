import React from 'react';
import config from '@config/site-config.json';

export interface Props {
tags:string | string[] | null | undefined
className?:string
}

export default function HashTags({ tags, className }:Props) {
  if (!tags) return null;
  let ar = Array.isArray(tags) ? tags : tags.split(',').filter(Boolean).map((a) => a.trim());
  ar = ar.map((a) => `#${a}`);
  return (
    <div className={`text-sm ${className}`} style={{ color: config.color.primary_color }}>
      {ar.join(' ')}
    </div>
  );
}
