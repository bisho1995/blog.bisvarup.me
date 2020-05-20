import React, { useState } from 'react';
import Snackbar from './snackbar';

interface SnackBarType {
    showSnackBar: (msg: string)=>void
}
export const SnackbarContext = React.createContext<SnackBarType>({ showSnackBar: () => {} });

export default function withSnackBarHOC(Component: React.ReactNode) {
  return function wrappedSnackbaredComponent(props: Array<any>) {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const showSnackBar = (msg: string) => {
      if (!msg) return;

      setVisible(true);
      setMessage(msg);
    };

    return (
      <SnackbarContext.Provider value={{ showSnackBar }}>
        {visible && message ? <Snackbar isVisible onDone={() => { setVisible(false); setMessage(''); }} message={message} /> : null}
        <Component {...props} />
        ;
      </SnackbarContext.Provider>
    );
  };
}
