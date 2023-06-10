import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('calls setSearchQuery with input value on change', () => {
  const setSearchQueryMock = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar searchQuery="" setSearchQuery={setSearchQueryMock} selectedGenre="" setSelectedGenre={() => {}} />
  );
  const searchInput = getByPlaceholderText('Search by movie title');
  fireEvent.change(searchInput, { target: { value: 'Movie 1' } });
  expect(setSearchQueryMock).toHaveBeenCalledWith('Movie 1');
});
