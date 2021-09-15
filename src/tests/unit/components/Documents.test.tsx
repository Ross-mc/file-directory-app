import { render, screen } from '@testing-library/react';
import Documents from '../../../pages/Documents';
import { MemoryRouter } from 'react-router-dom';

describe('Document.tsx', () => {
  it('renders folder subcomponent', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/documents', search: '' }]}>
        <Documents />
      </MemoryRouter>
    );
    const folder = await screen.findByTestId('root-folder');
    expect(folder).toBeInTheDocument();
  });
  it('renders error when given invalid pathname', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/error', search: '' }]}>
        <Documents />
      </MemoryRouter>
    );
    const error = await screen.findByTestId('error-component');
    expect(error).toBeInTheDocument();
  });
});
