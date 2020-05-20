import React from 'react';

interface Props {
  message: string;
  timeout?: number;
  onDone?: () => void;
}

export default function snackBarComponent({
  message,
  timeout = 3000,
  onDone = () => {},
}: Props) {
  return <div>Snackbar</div>;
}
