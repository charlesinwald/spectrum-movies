import React from 'react';
import { render } from '@testing-library/react';
import MovieList from '../components/MovieList';
import Movie from '../types/movie';

const movies: Movie[] = [
  { id: '1', title: 'Movie 1', genres: ['Action', 'Adventure'] },
  { id: '2', title: 'Movie 2', genres: ['Comedy', 'Drama'] },
];

test('renders movie list', () => {
  const { getByText } = render(<MovieList movies={movies} />);
  
  movies.forEach((movie) => {
    const movieTitle = getByText(movie.title);
    expect(movieTitle).toBeInTheDocument();
  });
});

test('renders "No movies found" when movies array is empty', () => {
  const { getByText } = render(<MovieList movies={[]} />);
  const noMoviesText = getByText('No movies found');
  expect(noMoviesText).toBeInTheDocument();
});
