import React, { useState } from 'react';
import Movie from '../types/movie';
import './MovieList.css';

const MovieList = (props: { movies: Movie[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  // Calculate the index of the first and last movie to display on the current page
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = props.movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change the current page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleImageError = (event: any) => {
    event.target.src = `${process.env.PUBLIC_URL}/defaultImage.jpeg`;
  };

  return (
    <div className="container">
      <ul>
        {currentMovies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <a href={`/movies/${movie.id}`}>
            <img
              src={`${process.env.PUBLIC_URL}/posters/${movie.id}.jpeg`}
              alt={movie.title}
              onError={handleImageError}
            />
              <h2>{movie.title}</h2>
              {movie.genres.map((genre) => (
                <span key={genre}>{genre} </span>
              ))}
            </a>
          </li>
        ))}
        {props.movies.length === 0 && <li>No movies found</li>}
      </ul>

      {/* Pagination */}
      {props.movies.length > moviesPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(props.movies.length / moviesPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default MovieList;
