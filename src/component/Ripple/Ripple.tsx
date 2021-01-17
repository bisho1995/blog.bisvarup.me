import React, { forwardRef } from 'react';
import styles from './ripple.module.scss';

interface Props {
  dimension: number
  x: number
  y: number
  setRef?:any
}
function Ripple({
  x, y, dimension, setRef,
}:Props): JSX.Element {
  return (
    <span
      ref={e => {
        setRef.current = e
      }}
      className={styles.ripple}
      style={{
        left: x, top: y, width: dimension, height: dimension,
      }}
    />
  );
}
export default forwardRef((props: Props, ref) => {
  console.log(ref);
  return <Ripple {...props} setRef={ref} />
});
