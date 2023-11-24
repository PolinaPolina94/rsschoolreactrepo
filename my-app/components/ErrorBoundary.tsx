import { PureComponent, ErrorInfo } from 'react';
import { HasState, Props } from '../types/types';
import ErrorPageNavigation from '@/pages/404';

class ErrorBoundary extends PureComponent<Props, HasState> {
  public state: HasState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): HasState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorPageNavigation />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
