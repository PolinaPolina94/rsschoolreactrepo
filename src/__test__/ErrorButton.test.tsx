import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorButton from '../components/ErrorBoundary/ErrorButton';

describe('Error button test', () => {
  it('Render error btn', async () => {
    render(<ErrorButton />);
    expect(screen.getByText(/Error Button/)).toBeInTheDocument();
  });
});
