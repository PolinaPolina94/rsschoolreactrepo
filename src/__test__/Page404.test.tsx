import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import ErrorButton from '../components/ErrorBoundary/ErrorButton';
import ErrorPage from '../components/ErrorBoundary/ErrorPage';

describe('404 page test', () => {
  it('Render 404 Page with wrong path', async () => {
    const wrongPath = '/somethingwrong/';
    render(
      <MemoryRouter initialEntries={[wrongPath]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Oops!/)).toBeInTheDocument();
  });
  it('Render error btn', async () => {
    render(<ErrorButton />);
    expect(screen.getByText(/Error Button/)).toBeInTheDocument();
  });
  it('Render 404 Page with wrong path', async () => {
    const wrongPath = '/somethingwrong/';
    render(
      <MemoryRouter initialEntries={[wrongPath]}>
        <ErrorPage />
      </MemoryRouter>
    );
  });
});
