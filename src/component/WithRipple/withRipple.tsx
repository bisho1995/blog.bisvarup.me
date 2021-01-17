import React, {
  useState, MouseEvent, useEffect, createRef,
} from 'react';
import Ripple from '@components/Ripple/Ripple';

// todo: ref not working
export default function withRipple(Component: any): any {
  return function WithRippleContainer(props): JSX.Element {
    const [showRipple, setShowRipple] = useState(false);
    const [customClick, setCustomClick] = useState(null);
    const [rippleProps, setRippleProps] = useState({
      x: 970,
      y: 772,
      dimension: 500,
    });
    const [timerRef, setTimerRef] = useState<null | number>(null);
    const ref = createRef();

    /** didMount */
    useEffect(() => {
      console.log('didMount', ref);
      return () => {
        // @ts-ignore
        if (timerRef) window.clearTimeout(timerRef);
      };
    }, []);

    const createRipple = (e: MouseEvent) => {
      e.preventDefault();
      if (showRipple) return;

      setShowRipple(true);

      setTimerRef(
        // @ts-ignore
        window.setTimeout(() => {
          //   setShowRipple(false);
          setTimerRef(null);
        }, 500),
      );
      console.log(e.currentTarget);
      // @ts-ignore
      const { width, height } = e.currentTarget.getBoundingClientRect();
      const x = Math.floor(e.clientX) - width / 2;
      const y = e.currentTarget.offsetTop;
      const dim = Math.max(width, height);

      console.log(
        `{x:${e.clientX}, y:${e.clientY}, newX:${x}, newY: ${y}}, screenX: ${e.screenX}, screenY: ${e.screenY}`,
        e.currentTarget.getBoundingClientRect(),
      );

      const radius = dim / 2;

      //   // todo: fix the position coords
      //   console.log(
      //     `x: ${e.clientX} y: ${e.clientY} width: ${elementWidth} height: ${elementHeight}`,
      //   );
      setRippleProps({
        x,
        y,
        dimension: dim,
      });
    };

    // if (showRipple) console.log(rippleProps);

    return (
      <>
        {showRipple ? <Ripple {...rippleProps} /> : null}
        <Component ref={ref} {...props} createRipple={createRipple} />
      </>
    );
  };
}
