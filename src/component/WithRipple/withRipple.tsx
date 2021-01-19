import React, {
  useState, MouseEvent, useEffect, createRef,
} from 'react';
import styles from './ripple.module.scss';

/**
 * The target node should have position relative
 * and display block/inline-block for this to work
 *
 * @param Component React Component
 */
export default function withRipple(Component: any): any {
  return function WithRippleContainer(props): JSX.Element {
    const [showRipple, setShowRipple] = useState(false);
    let secondClick = false;
    const [timerRef, setTimerRef] = useState<null | number>(null);
    const ref = createRef<HTMLElement>();

    const createRipple = (e: MouseEvent) => {
      if (secondClick) {
        secondClick = false;
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      if (showRipple) return;
      let ripple = document.getElementById('ripple') as HTMLSpanElement;
      if (!ripple) {
        ripple = document.createElement('span');
        ripple.setAttribute('id', 'ripple');
      }
        ripple.parentElement?.removeChild(ripple);
        const { currentTarget } = e;
        currentTarget.appendChild(ripple);
        ripple.classList.add(styles.ripple);

        setShowRipple(true);

        setTimerRef(
          window.setTimeout(() => {
            setShowRipple(false);
            setTimerRef(null);
            secondClick = true;
            const { parentElement } = ripple;
            if (parentElement?.querySelector('a')) {
                  parentElement?.querySelector('a')?.click();
            } else {
                  parentElement?.click();
            }
            // ripple.classList.remove(styles.ripple)
          }, 150),
        );
        // @ts-ignore
        const { width, height } = currentTarget.getBoundingClientRect();
        const dim = Math.max(width, height);

        const radius = dim / 2;
        const x = Math.floor(e.clientX) - currentTarget.getBoundingClientRect().left - (radius);

        const y = Math.floor(e.clientY) - currentTarget.getBoundingClientRect().top - radius;

        ripple.style.top = `${y}px`;
        ripple.style.left = `${x}px`;
        ripple.style.width = `${dim}px`;
        ripple.style.height = `${dim}px`;
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
        <Component ref={ref} {...props} />
      </>
    );
  };
}
