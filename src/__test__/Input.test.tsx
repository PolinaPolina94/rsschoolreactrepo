import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import InputSearch from '../components/input-search/InputSearch';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args: []) => mockGetItem(...args),
    setItem: (...args: []) => mockSetItem(...args),
  },
});
describe('InputSearch', () => {
  beforeEach(() => {
    mockSetItem.mockClear();
  });
  it('Show input', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
    render(<InputSearch />);
    const input = screen.getByPlaceholderText('write here a name');
    expect(input).toBeInTheDocument();
  });
  it('Call local storage setItem method when button clicked', async () => {
    mockedDispatch.mockReturnValue(jest.fn());
    render(<InputSearch />);
    const button = screen.getByRole('button', { name: /Search/i });
    await waitFor(() => {
      fireEvent.submit(button);
      expect(mockSetItem).toHaveBeenCalled();
      expect(mockSetItem).toHaveBeenCalledWith('personName', []);
    });
  });
});
