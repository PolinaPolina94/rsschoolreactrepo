import MainPage from './components/main-page/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Route, Routes } from 'react-router-dom';
import ErrorPageNavigation from './components/ErrorBoundary/ErrorNavigation';
import Layout from './components/Layout/Layout';
import Person from './components/Person/Person';
import { useState } from 'react';
import { State } from './types';
import { ApiContext } from './components/Context/ApiContext';

const App = () => {
  const [state, setState] = useState<State | null>(null);
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <ApiContext.Provider value={{ state, setState }}>
                  <MainPage />
                </ApiContext.Provider>
              }
            >
              <Route path="details/:personId" element={<Person />} />
            </Route>
            <Route
              path="page/:id"
              element={
                <ApiContext.Provider value={{ state, setState }}>
                  <MainPage />
                </ApiContext.Provider>
              }
            >
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
