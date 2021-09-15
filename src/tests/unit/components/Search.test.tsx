import { render, screen } from '@testing-library/react';
import Search from '../../../pages/Search';
import { MemoryRouter } from 'react-router-dom';

describe('Search.tsx', () => {
  it('renders folder subcomponent', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/search', search: '' }]}>
        <Search />
      </MemoryRouter>
    );
    const searchForm = await screen.findByTestId('search-form');
    expect(searchForm).toBeInTheDocument();
  });
});
