import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Paginator } from '../components/Pagination/Pagination';
// import { getPages } from './__ mocks __/usersApi';
import { BrowserRouter } from 'react-router-dom';

describe('Pagination test', () => {
  it('URL is updating when page is changing', async () => {
    render(
      <BrowserRouter>
        <Paginator />
      </BrowserRouter>
    );
    expect(screen.getByText('2')).toBeInTheDocument();
    await waitFor(() => {
      fireEvent.click(screen.getByText('2'));
      expect(window.location.search).toBe('');
    });
  });
});
