import MainPage from './components/main-page/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import ErrorPageNavigation from './components/ErrorBoundary/ErrorNavigation';
import Layout from './components/Layout/Layout';
import Person from './components/Person/Person';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />}>
              <Route path="details/:personId" element={<Person />} />
            </Route>
            <Route path="page/:id" element={<MainPage />}>
              <Route path="details/:personId" element={<Person />} />
            </Route>
            <Route path="*" element={<ErrorPageNavigation />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
