import React, {useState, MouseEvent, useEffect, createRef} from 'react';
import Ripple from '@components/Ripple/Ripple';
import {createDocumentRegistry} from 'typescript';

// todo: ref not working
export default function withRipple(Component: any): any {
  return function WithRippleContainer(props): JSX.Element {
    const [showRipple, setShowRipple] = useState(false);
    const [rippleProps, setRippleProps] = useState({
      x: 0,
      y: 0,
      dimension: 0,
    });
    const [timerRef, setTimerRef] = useState<null | number>(null);
    const ref = createRef<HTMLElement>();
    const rippleRef = createRef();

    const createRipple = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (showRipple) return;

      const {currentTarget} = e;

      setShowRipple(true);

      setTimerRef(
        window.setTimeout(() => {
          setShowRipple(false);
          setTimerRef(null);
        }, 500),
      );

      // @ts-ignore
      const {width, height} = currentTarget.getBoundingClientRect();
      const dim = Math.max(width, height);

      const radius = dim / 2;
      const x = Math.floor(e.clientX) - radius;
      /**
       * Client y gives the offset WRT viewport which means if the
       * element scrolled past viewport height clientY will still be
       * less than viewport height
       */
      const y = window.pageYOffset + e.clientY - radius;

      setRippleProps({
        x,
        y,
        dimension: dim,
      });
    };

    /** didMount */
    useEffect(() => {
      if (ref.current) {
        ref.current.addEventListener('click', createRipple);
      }
      return () => {
        if (timerRef) window.clearTimeout(timerRef);
      };
    }, []);

    return (
      <>
        {showRipple ? <Ripple {...rippleProps} ref={rippleRef} /> : null}
        <Component ref={ref} {...props} />
      </>
    );
  };
}
