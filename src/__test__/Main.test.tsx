import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import setupStore from '../store/store';
import { Provider } from 'react-redux';
import MainPage from '../components/main-page/MainPage';

// Redux
const renderComponent = () =>
  render(
    <Provider store={setupStore()}>
      <MainPage />
    </Provider>
  );

test('Render main page with using redux', async () => {
  const { getByRole } = renderComponent();

  await waitFor(() => getByRole('main'));
});
