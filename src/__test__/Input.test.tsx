// import '@testing-library/jest-dom';
// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import InputSearch from '../components/input-search/InputSearch';

// const mockGetItem = jest.fn();
// const mockSetItem = jest.fn();
// Object.defineProperty(window, 'localStorage', {
//   value: {
//     getItem: (...args: []) => mockGetItem(...args),
//     setItem: (...args: []) => mockSetItem(...args),
//   },
// });

// describe('InputSearch', () => {
//   it('Show input', () => {
//     render(<InputSearch />);
//     const input = screen.getByPlaceholderText('write here a name');
//     expect(input).toBeInTheDocument();
//     screen.debug();
//   });
// });

// describe('Tests for the InputSearch component', () => {
//   beforeEach(() => {
//     mockSetItem.mockClear();
//   });
//   it('Call local storage setItem method when button clicked', async () => {
//     render(<InputSearch />);
//     const button = screen.getByRole('button', { name: /Search/i });
//     await waitFor(() => {
//       fireEvent.click(button);
//       expect(mockSetItem).toHaveBeenCalledTimes(1);
//       expect(mockSetItem).toHaveBeenCalledWith('personName', '');
//     });
//   });
//   it('Call local storage getItem method when component was mounted', async () => {
//     render(<InputSearch />);
//     screen.getByRole('button', { name: /Search/i });
//     expect(mockGetItem).toHaveBeenCalled();
//     expect(mockGetItem).toHaveBeenCalledWith('active');
//   });
// });
