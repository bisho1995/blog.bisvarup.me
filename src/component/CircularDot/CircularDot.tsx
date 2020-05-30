import React from 'react';

export interface Props {
    top?: number
    dimension?:number
}

export default function CircularDot({ top = -2, dimension = 4 }:Props) {
  return (
    <span
      className="bg-gray-600 rounded-full relative inline-block mx-1 "
      style={{
        top,
        width: dimension,
        height: dimension,
      }}
    />
  );
}
