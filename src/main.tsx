import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ErrorPageNavigation from './components/ErrorBoundary/ErrorNavigation';
// import MainPage from './components/main-page/MainPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPageNavigation />,
//     children: [
//       {
//         path: 'page/:id',
//         element: <MainPage />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
