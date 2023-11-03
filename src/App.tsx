import MainPage from './components/main-page/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import Pagination from './components/Pagination/Pagination';
// import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ErrorPageNavigation from './components/ErrorBoundary/ErrorNavigation';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/page/:id" element={<MainPage />} />
            <Route path="about" element={<div>hello</div>} />
            <Route path="*" element={<ErrorPageNavigation />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
