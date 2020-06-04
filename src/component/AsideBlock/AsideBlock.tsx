import React from 'react';

export interface Props {
    header: React.ReactNode
    children: React.ReactNode
}

export default function AsideBlock({ header, children }:Props) {
  return (
    <div className="border-solid rounded border-2 border-gray-200 p-8 mb-8">
      {header && <b className="mb-8 block">{header}</b>}
      {children}
    </div>
  );
}
