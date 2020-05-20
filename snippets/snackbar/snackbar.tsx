import React, {useEffect} from 'react';

interface Props {
  message: string;
  timeout?: number;
  onDone?: () => void;
  isVisible: boolean;
}

export default function snackBarComponent({
  message,
  isVisible,
  timeout = 3000,
  onDone = () => {},
}: Props) {
  const [visible, setVisible] = React.useState(isVisible);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      onDone();
    }, timeout);
  }, [isVisible]);

  return visible ? (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        margin: 20,
        background: '#000',
        color: '#fff',
      }}>
      {message}
    </div>
  ) : null;
}
