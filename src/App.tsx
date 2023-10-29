import { Component } from 'react';
import InputSearch from './components/input-search/InputSearch';
import MainPage from './components/main-page/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './components/ErrorBoundary/ErrorButton';

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <ErrorButton />
          <InputSearch />
          <MainPage />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
