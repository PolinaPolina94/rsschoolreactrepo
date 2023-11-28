import ErrorBoundary from '@/components/ErrorBoundary';
import setupStore, { wrapper } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const store = setupStore();

export function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      {' '}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(App);
