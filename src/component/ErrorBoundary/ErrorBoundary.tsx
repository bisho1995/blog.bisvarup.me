import React from 'react';
import analytics from '../../analytics/GoogleAnalytics';
import googleAnalytics from '../../analytics/GoogleAnalytics';

interface Props {
    children: React.ReactNode
}

interface State {
    hasError: boolean
}

export default class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props:Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error(error, errorInfo);
    googleAnalytics.trackEvent('ErrorBoundary', {
      error, errorInfo,
    });
  }

  renderErrorUI = () => <div>Oops, something went wrong!</div>

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? this.renderErrorUI() : children;
  }
}
