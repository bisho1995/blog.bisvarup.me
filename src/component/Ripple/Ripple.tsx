import React from 'react';
import styles from './ripple.module.scss';

interface Props {
  dimension: number
  x: number
  y: number
}
export default function Ripple({ x, y, dimension }:Props): JSX.Element {
  return (
    <span
      className={styles.ripple}
      style={{
        left: x, top: y, width: dimension, height: dimension,
      }}
    />
  );
}
