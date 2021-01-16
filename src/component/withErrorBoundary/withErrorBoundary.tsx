import React from 'react';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

export default function withErrorBoundary(Component: React.ReactNode) {
  return (props: any[]) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
}
