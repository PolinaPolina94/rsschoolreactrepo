import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

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
});
