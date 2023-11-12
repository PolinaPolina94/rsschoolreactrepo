import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('demo', () => {
  expect(true).toBe(true);
});

describe('App', () => {
  it('Renders App component', () => {
    render(<App />);
    screen.getByRole('button');
  });
});
