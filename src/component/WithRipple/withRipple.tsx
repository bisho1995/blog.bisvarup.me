import React from 'react';
import Ripple from '@components/Ripple/Ripple';

export default function withRipple(Component: any): any {
  return function WithRippleContainer(): JSX.Element {
    return (
      <>
        <Ripple />
        <Component />
      </>
    );
  };
}
