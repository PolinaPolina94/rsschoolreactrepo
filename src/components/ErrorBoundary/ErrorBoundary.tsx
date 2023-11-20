import { PureComponent, ErrorInfo } from 'react';
import ErrorPage from './ErrorPage';
import { HasState, Props } from '../../types';

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
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
