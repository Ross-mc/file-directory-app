import { render, screen } from '@testing-library/react';
import App from '../../../App';

test('renders welcome header', () => {
  render(<App />);
  const header = screen.getByText(/Welcome to your Document Store/i);
  expect(header).toBeInTheDocument();
});
