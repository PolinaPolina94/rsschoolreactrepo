import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import ErrorButton from '../components/ErrorBoundary/ErrorButton';
import ErrorPage from '../components/ErrorBoundary/ErrorPage';
import App from '../App';

describe('404 page test', () => {
  it('Render App page', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Reset ♻/));
  });
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
