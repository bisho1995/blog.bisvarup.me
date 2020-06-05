import React from 'react';

export interface Props {
tags:string | string[] | null | undefined
className?:string
}

export default function HashTags({ tags, className }:Props) {
  if (!tags) return null;
  let ar = Array.isArray(tags) ? tags : tags.split(',').filter(Boolean).map((a) => a.trim());
  ar = ar.map((a) => `#${a}`);
  return (
    <div className={`text-purple-900 text-sm ${className}`}>
      {ar.join(' ')}
    </div>
  );
}
