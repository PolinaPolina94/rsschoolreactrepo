import MainPage from './components/main-page/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import Pagination from './components/Pagination/Pagination';
// import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ErrorPageNavigation from './components/ErrorBoundary/ErrorNavigation';
import Layout from './components/Layout/Layout';
// import Header from './components/Header/Header';
import Person from './components/Person/Person';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />}>
              <Route path="character/:personId" element={<Person />} />
            </Route>
            <Route path="page/:id" element={<MainPage />}>
              <Route path="character/:personId" element={<Person />} />
            </Route>
            {/* <Route path="character/:id" element={<Person />} /> */}
            <Route path="about" element={<div>hello</div>} />
            <Route path="*" element={<ErrorPageNavigation />} />
          </Route>
          {/* <Route path="page/:id" element={<MainPage />} /> */}
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
