import InputSearch from './components/input-search/InputSearch';
import MainPage from './components/main-page/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './components/ErrorBoundary/ErrorButton';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <header>
          <ErrorButton />
          <InputSearch />
        </header>
        <MainPage />
      </ErrorBoundary>
    </>
  );
};

export default App;
