import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Paginator } from '../components/Pagination/Pagination';
import { BrowserRouter } from 'react-router-dom';
import SelectorBtn from '../components/SelectorBtn/SelectorBtn';

describe('Pagination test', () => {
  it('URL is updating when page is changing', async () => {
    render(
      <BrowserRouter>
        <Paginator />
      </BrowserRouter>
    );
    expect(screen.getByText('2'));
    waitFor(() => {
      fireEvent.click(screen.getByText('2'));
      expect(window.location.search).toBe('/page/2');
    });
  });
  it('Render selector test', async () => {
    const onSubmit = jest.fn();
    render(
      <BrowserRouter>
        <SelectorBtn />
      </BrowserRouter>
    );
    expect(screen.getByRole('selector'));
    expect(screen.getByText(/Choose items count 🖖/));
    waitFor(() => {
      fireEvent.submit(screen.getByText(/Choose items count 🖖/));
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
